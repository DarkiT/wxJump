<?php

namespace App\Http\Controllers\Article;

use App\Http\Controllers\BaseController;
use App\Models\Article;
use App\Models\ConfigModel;
use App\Models\Url;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\Calculation\Category;
use QL\QueryList;

class ArticleController extends BaseController
{
    /**
     * 控制器模型
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * 添加文章
     *
     * @param \Illuminate\Http\Request $request 请求体
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\FromVerif
     */
    public function add(Request $request)
    {
        //验证表单字段
        $article = $this->formVerif($request, [
            'title' => 'required', //文章标题
            'content' => 'required', //文章内容
            'photo' => 'nullable', //文章封面
            'description' => 'nullable', //文章描述
            'is_jump' => 'nullable', //随机跳转
            'is_wechat' => 'nullable', //是否检测微信
            'arrow' => 'nullable',    //文章箭头返回地址
            'physics' => 'nullable', //物理按键返回地址
            'url' => 'nullable', //文章访问地址
            'music' => 'nullable',    //背景音乐
            'appid' => 'nullable',    //微信appId
            'key' => 'nullable',  //微信密匙
            'right_now' => 'nullable',    //文章立即跳转
            'cnzz' => 'nullable', //第三方流量统计
            'is_encryption' => 'nullable', //页面加密
            'iframe' => 'nullable', //嵌套网页
            'source_check' => 'nullable', //来源检测
            'template_id' => 'nullable', //模板Id
        ]);

        $article['publish_time'] = date('Y-m-d H:i:s'); //发布时间默认当前时间
        $article['author'] = \Illuminate\Support\Facades\Auth::user()->username; //作者默认当前登录人员
        $article['user_id'] = \Illuminate\Support\Facades\Auth::id(); //用户默认当前用户Id
        $res = Article::create($article)->id;
        //发出更新通知
        $data = $this->sendUpdate($res, 'add');
        return $data;
    }

    /**
     * 发送文章更新通知
     *
     * @param $id
     * @return int
     */
    public function sendUpdate($id, $type)
    {
        $url = ConfigModel::query()
            ->with('Childs')
            ->where('keyword', 'file_cache')
            ->first()->toArray()['childs'];
        $countResult = 0;
        foreach ($url as $value) {
            $u = $value['value'];
            $html = QueryList::getInstance()->get($u . '/update/article/' . $id, [
                'type' => $type
            ])->getHtml();
            $result = json_decode($html, true);
            if (is_null($result)) {
                ++$countResult;
            }
        }
        return $this->returnData($countResult);
    }

    /**
     * 获得文章详细
     *
     * @param integer $id 文章id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($id)
    {
        $data = $this->model::find($id);
        //临时隐藏一些字段方便后续调用
        return $this->returnData($data->makeHidden(['status', 'other'])->toArray());
    }

    public function getList(Request $request)
    {
        $query = $this->model::orderBy('publish_time', 'desc');
        if (isSuperManager()) {
            $query = $query->where('author', \Illuminate\Support\Facades\Auth::user()->username);
        }
        $data = $this->filter($query, $request, 'array');
        return response()->json($data);
    }

    /**
     * 修改文章
     *
     * @param  integer $id 文章id
     * @param \Illuminate\Http\Request $request 请求体
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\FromVerif
     */
    public function edit($id, Request $request)
    {
        //验证表单字段
        $filedValue = $this->formVerif($request, [
            'title' => 'required', //文章标题
            'content' => 'required', //文章内容
            'photo' => 'nullable', //文章封面
            'description' => 'nullable', //文章描述
            'is_jump' => 'nullable', //随机跳转
            'is_wechat' => 'nullable', //是否检测微信
            'arrow' => 'nullable',    //文章箭头返回地址
            'physics' => 'nullable', //物理按键返回地址
            'url' => 'nullable', //文章访问地址
            'music' => 'nullable',    //背景音乐
            'appid' => 'nullable',    //微信appId
            'key' => 'nullable',  //微信密匙
            'right_now' => 'nullable',    //文章立即跳转
            'cnzz' => 'nullable', //第三方流量统计
            'is_encryption' => 'nullable', //页面加密
            'iframe' => 'nullable', //嵌套网页
            'source_check' => 'nullable', //来源检测
            'template_id' => 'nullable', //模板Id
        ]);
        $res = Article::find($id)->update($filedValue);
        $data = $this->sendUpdate($id, 'update');
        return $data;
    }

    /**
     * 清除缓存
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function clean()
    {
        $cache_prefix = 'OA:'; //Redis缓存前缀
        $cache_arr = Redis::keys($cache_prefix . "*");
        foreach ($cache_arr as $item) {
            Redis::del($item);
        }
        return $this->returnMsg(true);
    }

    /**
     * 文章访问链接
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function ArticleUrl(Request $request)
    {
        $articleId = $request->get('id', 0);
        $page = $request->get('page', 1);
        $limit = $request->get('limit', 10);
        $type = $request->get('type', 1);
        $url = Url::query()
            ->where('status', 0)
            ->where('type', $type)
            ->skip(($page - 1) * $limit)
            ->take($limit)
            ->get()
            ->toArray();
        $result = [];
        foreach ($url as $item) {
            if ($item['type'] == 1) {
                array_push($result, [
                    'url' => 'http://' . $item['url'] . '/show/' . $articleId,
                    'url_type' => $item['url_type'],
                ]);
            }
            if ($item['type'] == 0) {
                array_push($result, [
                    'url' => 'http://' . $item['url'] . '/A-url/' . $articleId,
                    'url_type' => $item['url_type'],
                ]);
            }
        }
        return $this->returnData($result);
    }

    public function delete($id)
    {
        $res = $this->model::destroy($id);
        $this->sendUpdate($id, 'delete');
        return $this->returnMsg($res);
    }
}
