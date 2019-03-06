<?php

//后台控制器
Route::get('admin', function () {
    return view('admin');
});

//接收反馈短信链接
Route::get('/accept', 'Home\GoodsController@AcceptSMS');


Route::get('/report', function () {
    return view('goods.report');
});
Route::get('/report2', function () {
    return view('goods.report2');
});
Route::get('/report3', function () {
    return view('goods.report3');
});



Route::get('exportOrder', function (\Illuminate\Http\Request $request) {
    $where = $request->get('where', null);
    if ($where) {
        $where = json_decode($where, true);
    }
    $xlsx = \Maatwebsite\Excel\Facades\Excel::download(new \App\Exports\OrderExport($where), '订单.xlsx');
    return $xlsx;
});

Route::get('/buySuccess/{id}', 'Home\GoodsController@buySuccess');

Route::get('/{code}', 'Home\GoodsController@show');


Route::get('/update/article/{id}',function (){
   return response()->json(['code'=>0]);
});
