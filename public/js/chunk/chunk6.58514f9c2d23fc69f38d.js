webpackJsonp([6],{176:function(e,t){e.exports=function(e,t,r,n,o,a){var i,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,s=e.default);var d,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=d):n&&(d=n),d){var c=u.functional,h=c?u.render:u.beforeCreate;c?(u._injectStyles=d,u.render=function(e,t){return d.call(t),h(e,t)}):u.beforeCreate=h?[].concat(h,d):[d]}return{esModule:i,exports:s,options:u}}},177:function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(178),a={},i=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,u=function(){},c=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(g(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(g(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,r,n=document.querySelector("style["+h+'~="'+e.id+'"]');if(n){if(d)return u;n.parentNode.removeChild(n)}if(f){var o=l++;n=s||(s=v()),t=b.bind(null,n,o,!1),r=b.bind(null,n,o,!0)}else n=v(),t=function(e,t){var r=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);c.ssrId&&e.setAttribute(h,t.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){d=r,c=n||{};var i=o(e,t);return p(i),function(t){for(var r=[],n=0;n<i.length;n++){var s=i[n];(l=a[s.id]).refs--,r.push(l)}t?p(i=o(e,t)):i=[];for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete a[l.id]}}}};var m,_=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function b(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},178:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}},179:function(e,t,r){var n=r(176)(r(184),r(195),!1,function(e){r(182)},"data-v-2cbd4810",null);e.exports=n.exports},181:function(e,t,r){"use strict";var n={data:function(){return{search:{},edit_id:null,tools_id:null,select_ids:null}},created:function(){},methods:{handleSearch:function(){this.handleSetFilter("search",this.search),this.handleRenderTable()},handleGetSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.table.selection;if(null===t&&(t=[]),null==e)return t;if("string"==typeof e){var r=[];return t.forEach(function(t){e in t&&r.push(t[e])}),r}return console.error("handleGetSelection 参数错误"),this.$refs.table.selection},handleSetFilter:function(e,t){this.$refs.table.filterValue[e]=t},handleGetFilter:function(e){return this.$refs.table.filterValue[e]},handelDeleteFilter:function(e){for(var t in e)this.$refs.table.deleteFilter.push(t)},handleRenderTable:function(){this.$refs.table.renderTable()},handleDeleteRow:function(e){this.$refs.table.deleteRow(e)},handleDel:function(e,t){var r=this,n=this.$loading({lock:!0,text:"删除数据中...",spinner:"el-icon-loading"});e.then(function(e){r.loading=!1,0==e.msg?(r.$message.success("删除成功"),r.handleDeleteRow(t)):r.$message.success("删除成功"),n.close()}).catch(function(e){r.loading=!1,r.$message.error("删除失败"),n.close(),console.log(e)})},handleSetChild:function(e,t){this.$refs.table.SetChildren(e,t)},handleOpenTableLoding:function(){this.$refs.table.loading=!0},handleCloseTableLoding:function(){this.$refs.table.loading=!1}}};t.a=n},182:function(e,t,r){var n=r(183);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("28e99982",n,!0,{})},183:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,".el-pagination[data-v-2cbd4810]{float:right;margin-top:8px}",""])},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(185),o=r.n(n),a=r(190),i=r.n(a),s=r(24);t.default={props:{url:String,columns:Array,page:{type:Boolean,default:!0},checkbox:{type:Boolean,default:!0}},data:function(){return{loading:!1,data:null,selection:null,filterValue:{where:{},page:1,limit:10,search:"",orderBy:"id,asc"},deleteFilter:[],total:0}},components:{Tools:o.a,Fold:i.a},created:function(){for(var e in this.columns)"render"in this.columns[e]&&Vue.component("my-column-"+this.columns[e].prop,this.columns[e].render);Vue.component("fold-prefix",{render:function(e){return e("span",{style:{paddingLeft:2*this.level+"em"}})},props:{level:{type:Number,required:!0}}}),this.renderTable()},methods:{expanding:function(e){e.tree_fold="loading",this.$emit("children",e)},collapsing:function(e){e.tree_fold="close",this.SetChildren(e,null)},Listeners:function(e,t,r){this.$emit("tools",e,t,r)},filterHandler:function(e){for(var t in e)null==e[t]||0==e[t].length?delete this.filterValue.where[t]:1==e[t].length?this.filterValue.where[t]=e[t][0]:this.filterValue.where[t]=e[t];this.handelDeleteFilter(),this.renderTable()},sortHandler:function(e){null==e.order?this.filterValue.orderBy=null:this.filterValue.orderBy=e.prop+","+e.order.slice(0,-6),this.renderTable()},handleSizeChange:function(e){this.filterValue.limit=e,this.renderTable()},handleCurrentChange:function(e){this.filterValue.page=e,this.renderTable()},handleSelectionChange:function(e){this.selection=e,this.$emit("SelectionChange",e)},renderTable:function(){var e=this;this.loading=!0,this.page||(delete this.filterValue.page,delete this.filterValue.limit),s.a.get(this.url,{params:this.filterValue}).then(function(t){e.total=t.data.count,e.data=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},deleteRow:function(e){this.data.splice(e,1)},SetChildren:function(e,t){for(var r=e.tree_path,n=this.data,o=0;o<r.length;o++)n=0==o?n[r[o]]:n.tree_children[r[o]];"loading"==e.tree_fold&&(e.tree_fold="open"),this.$set(n,"tree_fold",e.tree_fold),this.$set(n,"tree_children",t)},handelDeleteFilter:function(){var e=this;this.deleteFilter.forEach(function(t){delete e.filterValue.where[t]})}},computed:{reversedData:function(){var e=this.data;return e=function e(t,r,n){var o="tree_children";var a=[];for(var i in t){t[i].tree_level=n,r[n]=i,r.length=n+1,t[i].tree_path=r;var s=JSON.parse(JSON.stringify(t[i]));if(delete s[o],a.push(s),o in t[i]){var l=e(t[i][o],r,n+1);a=a.concat(l)}}return a}(e,[],0)}}}},185:function(e,t,r){var n=r(176)(r(188),r(189),!1,function(e){r(186)},"data-v-d5eb55a0",null);e.exports=n.exports},186:function(e,t,r){var n=r(187);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("54f2e4d2",n,!0,{})},187:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,"",""])},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tools",props:["row","index","buttons"],data:function(){return{tooltip:{add:"添加",show:"查看详情",edit:"编辑",delete:"删除"}}},methods:{handleTools:function(e){this.$emit("listen-tools",e,this.index,this.row)}}}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-button-group",[e._l(e.buttons,function(t,n){return[(t.text?t.text:e.tooltip[n]&&e.tooltip[n])?[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.text?t.text:e.tooltip[n],placement:"bottom"}},[r("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(n)}}})],1)]:[r("el-button",{attrs:{type:t.type,size:"mini",icon:t.icon},on:{click:function(t){e.handleTools(n)}}})]]})],2)},staticRenderFns:[]}},190:function(e,t,r){var n=r(176)(r(193),r(194),!1,function(e){r(191)},"data-v-1ceaf87c",null);e.exports=n.exports},191:function(e,t,r){var n=r(192);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("7f0398dd",n,!0,{})},192:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,"",""])},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fold",props:{row:{type:Object},status:{default:"close"}},data:function(){return{state:this.status,className:{open:"el-icon-caret-bottom",close:"el-icon-caret-right",loading:"el-icon-loading"}}},methods:{handleFold:function(){"open"==this.status?this.$emit("collapsing",this.row):(this.state="loading",this.$emit("expanding",this.row))}},watch:{status:function(e){this.state=e}}}},194:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className[this.state],staticStyle:{cursor:"pointer"},on:{click:this.handleFold}})},staticRenderFns:[]}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.reversedData,size:"mini"},on:{"filter-change":e.filterHandler,"sort-change":e.sortHandler,"selection-change":e.handleSelectionChange}},[e.checkbox?r("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),e._l(e.columns,function(t){return[r("el-table-column",{ref:"col-"+t.prop,refInFor:!0,attrs:{width:t.width?t.width:null,prop:t.prop,"column-key":t.prop,label:t.label,sortable:!!t.sort&&"custom",filters:t.filter?t.filter.data:null,"filter-multiple":!t.filter||!1!==t.filter.multiple||t.filter.multiple},scopedSlots:e._u([{key:"default",fn:function(n){return["tools"in t?[r("Tools",{attrs:{buttons:t.tools,row:n.row,index:n.$index},on:{"listen-tools":e.Listeners}})]:"render"in t?[r("my-column-"+t.prop,{tag:"component",attrs:{row:n.row}})]:["lazy"in t?r("fold-prefix",{attrs:{level:n.row.tree_level?n.row.tree_level:0}}):e._e(),e._v(" "),"lazy"in t&&n.row.children_count>0?r("Fold",{attrs:{status:n.row.tree_fold,row:n.row},on:{expanding:e.expanding,collapsing:e.collapsing}}):e._e(),e._v("\n                            "+e._s(t.convert?n.row[t.prop+"_name"]:n.row[t.prop])+"\n                        ")]]}}])})]})],2),e._v(" "),e.page?r("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":e.filterValue.limit,"current-page":e.filterValue.page,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},196:function(e,t,r){"use strict";r.d(t,"E",function(){return o}),r.d(t,"B",function(){return a}),r.d(t,"F",function(){return i}),r.d(t,"G",function(){return s}),r.d(t,"C",function(){return l}),r.d(t,"s",function(){return d}),r.d(t,"t",function(){return u}),r.d(t,"r",function(){return c}),r.d(t,"u",function(){return h}),r.d(t,"v",function(){return f}),r.d(t,"m",function(){return p}),r.d(t,"w",function(){return v}),r.d(t,"z",function(){return g}),r.d(t,"A",function(){return m}),r.d(t,"y",function(){return _}),r.d(t,"x",function(){return b}),r.d(t,"c",function(){return y}),r.d(t,"g",function(){return x}),r.d(t,"f",function(){return w}),r.d(t,"e",function(){return O}),r.d(t,"d",function(){return C}),r.d(t,"n",function(){return k}),r.d(t,"i",function(){return S}),r.d(t,"h",function(){return $}),r.d(t,"j",function(){return T}),r.d(t,"k",function(){return q}),r.d(t,"l",function(){return F}),r.d(t,"D",function(){return z}),r.d(t,"H",function(){return j}),r.d(t,"p",function(){return N}),r.d(t,"b",function(){return D}),r.d(t,"q",function(){return R}),r.d(t,"a",function(){return E}),r.d(t,"o",function(){return B});var n=r(24),o=function(e){return n.a.request({url:"/source/"+e,method:"delete"})},a=function(e){return n.a.request({url:"/source",data:e,method:"post"})},i=function(e){return n.a.request({url:"/source/"+e,method:"get"})},s=function(e,t){return n.a.request({url:"/source/"+e,data:t,method:"put"})},l=function(e){return n.a.request({url:"/source/batchIdDelete",data:e,method:"post"})},d=function(e){return n.a.request({url:"/meal/batchIdDelete",data:e,method:"post"})},u=function(e){return n.a.request({url:"/meal/"+e,method:"delete"})},c=function(e){return n.a.request({url:"/meal",data:e,method:"post"})},h=function(e){return n.a.request({url:"/meal/"+e,method:"get"})},f=function(e,t){return n.a.request({url:"/meal/"+e,data:t,method:"put"})},p=function(){return n.a.request({url:"template/list",method:"get"})},v=function(e){return n.a.request({url:"size",data:e,method:"post"})},g=function(e){return n.a.request({url:"size/"+e,method:"get"})},m=function(e,t){return n.a.request({url:"size/"+e,data:t,method:"put"})},_=function(e){return n.a.request({url:"size/"+e,method:"delete"})},b=function(e){return n.a.request({url:"size/batchIdDelete",data:e,method:"post"})},y=function(e){return n.a.request({url:"goods",data:e,method:"post"})},x=function(e,t){return n.a.request({url:"goods/"+e,data:t,method:"put"})},w=function(e){return n.a.request({url:"goods/"+e,method:"get"})},O=function(e){return n.a.request({url:"goods/"+e,method:"delete"})},C=function(e){return n.a.request({url:"goods/batchDelete",data:e,method:"post"})},k=function(e){return n.a.request({url:"goodsOrder/ip_source/"+e,method:"get"})},S=function(e,t){return n.a.request({url:"goodsOrder/"+e,data:t,method:"delete"})},$=function(e){return n.a.request({url:"goodsOrder/batchDelete",data:e,method:"post"})},T=function(e){return n.a.request({url:"goodsOrder/"+e,method:"get"})},q=function(e,t){return n.a.request({url:"goodsOrder/"+e,data:t,method:"put"})},F=function(e,t){return n.a.request({url:"goodsOrder/status/"+e,data:t,method:"put"})},z=function(){return n.a.request({url:"source/count",method:"get"})},j=function(){return n.a.request({url:"source/zhcount",method:"get"})},N=function(){return n.a.request({url:"source/peoplecount",method:"get"})},D=function(e){return n.a.request({url:"goodsOrder/batchEdit",data:e,method:"post"})},R=function(){return n.a.request({url:"goodsOrder/repeatCheck",method:"get"})},E=function(e){return n.a.request({url:"source/Regenerate/"+e,method:"get"})},B=function(){return n.a.request({url:"goodsOrder/orderCount",method:"get"})}},198:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n={sex:[{key:1,value:"男"},{key:2,value:"女"},{key:0,value:"未填写"}],user_type:[{key:0,value:"管理员"},{key:1,value:"普通用户"}],user_state:[{key:0,value:"禁用"},{key:1,value:"正常"}],auth_type:[{key:0,value:"接口"},{key:1,value:"前端路由"}],role_state:[{key:0,value:"禁用"},{key:1,value:"正常"}],config_type:[{key:0,value:"TEXT"},{key:1,value:"JSON"}]},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=n[e];if("key"==t&&"value"==r)return o;var a=[],i=!0,s=!1,l=void 0;try{for(var d,u=o[Symbol.iterator]();!(i=(d=u.next()).done);i=!0){var c=d.value,h={};h[t]=c.key,h[r]=c.value,a.push(h)}}catch(e){s=!0,l=e}finally{try{!i&&u.return&&u.return()}finally{if(s)throw l}}return a}},456:function(e,t,r){var n=r(457);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("1b88e043",n,!0,{})},457:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,".myTable[data-v-710eef25] p{padding:0;margin:0;font-size:14px}li[data-v-710eef25],ul[data-v-710eef25]{padding:0;margin:0}.Briefing[data-v-710eef25]{height:60px;line-height:60px;background:#de9c95;margin-top:10px}.Briefing ul>li[data-v-710eef25]{list-style:none;float:left;margin-left:25px}",""])},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(179),o=r.n(n),a=r(181),i=(r(198),r(196)),s=r(459),l=r.n(s),d=r(464),u=r.n(d),c=r(469),h=r.n(c),f=r(474),p=r.n(f);t.default={components:{Table:o.a,ipSourceShow:l.a,show:u.a,update:h.a,repeat:p.a},mixins:[a.a],data:function(){return{ipSourceIsShow:!1,goodsOrderInfo:!1,updateOrder:!1,repeatOrder:!1,confirmDelete:!1,url:"goodsOrder",columns:[{prop:"id",label:"ID",sort:!0,width:"80"},{prop:"meal_name",label:"购买产品+数量+套餐",search:!0,width:350,render:{props:{row:Object},render:function(e){return e("div",{},[e("p",{},"订单号:"+this.row.order_num),e("p",{style:{color:"green"}},"下单时间:"+this.row.created_at),e("p",{},this.row.goods_name),e("p",{},this.row.meal_name+" "+this.row.size_name+"×"+this.row.num)])}}},{prop:"paytype",label:"支付方式",width:100,render:{props:{row:Object},render:function(e){return e("div",{},[e("el-tag",{attr:{type:"success"}},this.row.paytype),e("p",{style:{color:"red"}},"总额:"+this.row.order_total_price)])}}},{prop:"name",label:"收货人",search:!0,width:115,render:{props:{row:Object},render:function(e){return e("div",{},[e("p",{},this.row.name),e("p",{},this.row.phone)])}}},{prop:"address",label:"地址",search:!0,width:360,render:{props:{row:Object},render:function(e){return e("div",{},[e("p",{},"地址:"+this.row.address),e("p",{},"IP:"+this.row.ip)])}}},{prop:"message",label:"客户留言"},{prop:"source",label:"订单来源",width:110,render:{props:{row:Object},render:function(e){return e("div",{},[e("el-tag",{attr:{type:"info"}},this.row.source)])}}},{prop:"status",label:"订单状态",width:120,filter:{multiple:!1,data:[{value:"0",text:"未发货"},{value:"1",text:"已发货"},{value:"2",text:"无效信息"}]},render:{props:{row:Object},render:function(e){var t=this;return e("el-select",{props:{value:this.row.status,size:"small",placeholder:"标记处理状态"},on:{change:function(e){t.row.status=e,Object(i.l)(t.row.id,{status:e}).then(function(e){t.$message.success(e.data.msg)})}}},[e("el-option",{props:{value:0,label:"未发货"}}),e("el-option",{props:{value:1,label:"已发货"}}),e("el-option",{props:{value:2,label:"无效信息"}})])}}},{prop:"msg_del",label:"短信状态"},{label:"操作",width:"200",tools:this.handleGetBtn()}],id:0,index:0,orderListAuth:[{delete:!1}],Briefing:"",confirm:""}},created:function(){var e=this;this.$store.state.user.auth.goods_order.forEach(function(t){"delete"===t&&(e.orderListAuth.delete=!0)}),Object(i.o)().then(function(t){e.Briefing=t.data.data})},mounted:function(){this.handleSetFilter("where",{status:0}),this.handleSetFilter("orderBy","created_at,desc")},methods:{handleTools:function(e,t,r){"search"==e?(this.id=r.id,this.ipSourceIsShow=!0):"delete"==e?(this.confirmDelete=!0,this.id=r.id,this.index=t):"show"==e?(this.id=r.id,this.goodsOrderInfo=!0):console.error("Tools Event:"+e+" Not found")},handelDel:function(){var e=this;if(""==this.confirm)return this.$message.error("删除信息,必须填写"),!1;Object(i.i)(this.id,{msg:this.confirm}).then(function(t){e.handleDeleteRow(e.index),e.$message.success(t.data.msg),e.confirmDelete=!1})},handleGetBtn:function(){var e={show:{type:"success",icon:"el-icon-view",text:"查看详情"},search:{type:"primary",icon:"el-icon-location-outline",text:"属地查询"},delete:{type:"danger",icon:"el-icon-delete"}},t={};return this.$store.state.user.auth.goods_order.forEach(function(r){r in e&&(t[r]=e[r])}),t},handleSelect:function(){var e=this,t=this.handleGetSelection("id");if(0===t.length)return this.$message.error("请选择一个选项后再进行进行操作"),!1;Object(i.h)({id:t}).then(function(t){e.handleRenderTable(),e.$message.success(t.data.msg)})},updateStatus:function(){var e=this.handleGetSelection("id");if(0===e.length)return this.$message.error("请选择一个选项后再进行进行操作"),!1;this.id=e,this.updateOrder=!0},exportOrder:function(){var e=JSON.stringify(this.handleGetFilter("where")),t="http://"+document.domain+"/exportOrder?where="+e;window.open(t)},repeatCheck:function(){this.repeatOrder=!0},searchKeyword:function(e){this.handleSetFilter("where",e),this.handelDeleteFilter(e),this.handleRenderTable()}}}},459:function(e,t,r){var n=r(176)(r(462),r(463),!1,function(e){r(460)},"data-v-648f6de2",null);e.exports=n.exports},460:function(e,t,r){var n=r(461);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("194614f7",n,!0,{})},461:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,"",""])},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(196);t.default={name:"ipsource",data:function(){return{ip:"",phone:""}},created:function(){var e=this;Object(n.n)(this.id).then(function(t){e.ip=t.data.data.ip,e.phone=t.data.data.phone})},props:["id"]}},463:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Ip地址定位:"+this._s(this.ip))]),this._v(" "),t("p",[this._v("手机号码定位:"+this._s(this.phone))])])},staticRenderFns:[]}},464:function(e,t,r){var n=r(176)(r(467),r(468),!1,function(e){r(465)},"data-v-6afd7be0",null);e.exports=n.exports},465:function(e,t,r){var n=r(466);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("ae93e2d6",n,!0,{})},466:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,".table_head[data-v-6afd7be0]{font-size:16px;font-weight:600;padding-right:15px}.table[data-v-6afd7be0]{width:100%;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse;background-color:transparent}.table-bordered[data-v-6afd7be0],td[data-v-6afd7be0]{border:1px solid #ddd}td[data-v-6afd7be0]{line-height:40px}",""])},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(196);t.default={name:"show",data:function(){return{goodsOrder:[]}},created:function(){var e=this;Object(n.j)(this.id).then(function(t){e.goodsOrder=t.data.data})},methods:{edit:function(){var e=this,t={name:this.goodsOrder.name,phone:this.goodsOrder.phone,address:this.goodsOrder.address};Object(n.k)(this.id,t).then(function(t){e.$message.success(t.data.msg)})}},props:["id"]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("table",{staticClass:"table table-bordered"},[r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订单号")]),e._v(" "),r("td",[e._v(e._s(e.goodsOrder.order_num))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订购时间")]),e._v(" "),r("td",{staticStyle:{color:"green"}},[e._v(e._s(e.goodsOrder.created_at))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订购产品")]),e._v(" "),r("td",[e._v(e._s(e.goodsOrder.goods_name))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订购套餐")]),e._v(" "),r("td",[e._v(e._s(e.goodsOrder.meal_name))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("选择尺码")]),e._v(" "),r("td",[e._v(e._s(e.goodsOrder.size_name))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订购数量")]),e._v(" "),r("td",[r("el-tag",[e._v("\n                    "+e._s(e.goodsOrder.num)+"\n                ")])],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("总金额")]),e._v(" "),r("td",{staticStyle:{color:"red"}},[e._v("¥ "+e._s(e.goodsOrder.order_total_price))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("姓名")]),e._v(" "),r("td",[r("el-input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:e.goodsOrder.name,callback:function(t){e.$set(e.goodsOrder,"name",t)},expression:"goodsOrder.name"}})],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("手机号码")]),e._v(" "),r("td",[r("el-input",{attrs:{placeholder:"请输入联系人手机号"},model:{value:e.goodsOrder.phone,callback:function(t){e.$set(e.goodsOrder,"phone",t)},expression:"goodsOrder.phone"}})],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("收货地址")]),e._v(" "),r("td",[r("el-input",{attrs:{placeholder:"请输入收货地址"},model:{value:e.goodsOrder.address,callback:function(t){e.$set(e.goodsOrder,"address",t)},expression:"goodsOrder.address"}})],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("付款方式")]),e._v(" "),r("td",[r("el-tag",{attrs:{type:"success"}},[e._v("\n                    "+e._s(e.goodsOrder.paytype)+"\n                ")])],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("顾客留言")]),e._v(" "),r("td",[e._v(e._s(e.goodsOrder.message))])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("订单来源")]),e._v(" "),r("td",[r("el-tag",{attrs:{type:"success"}},[e._v("\n                    "+e._s(e.goodsOrder.source)+"\n                ")])],1)]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("下单地址")]),e._v(" "),r("td",[e._v("\n                "+e._s(e.goodsOrder.source_url)+"\n            ")])]),e._v(" "),r("tr",[r("td",{staticClass:"table_head",attrs:{align:"right"}},[e._v("保存修改")]),e._v(" "),r("td",[r("el-button",{attrs:{type:"primary"},on:{click:e.edit}},[e._v("点击修改")])],1)])])])},staticRenderFns:[]}},469:function(e,t,r){var n=r(176)(r(472),r(473),!1,function(e){r(470)},"data-v-72d03fe8",null);e.exports=n.exports},470:function(e,t,r){var n=r(471);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("4f001c3d",n,!0,{})},471:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,"",""])},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(196);t.default={name:"updateOrder",data:function(){return{value:"",options:[{value:"0",text:"未发货"},{value:"1",text:"已发货"},{value:"2",text:"无效信息"}]}},methods:{submitForm:function(){var e=this;Object(n.b)({id:this.id,status:this.value}).then(function(t){e.$message.success(t.data.msg),e.$emit("render"),e.$emit("close")})}},props:["id"]}},473:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n    状态:\n    "),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("主要按钮")])],1)},staticRenderFns:[]}},474:function(e,t,r){var n=r(176)(r(477),r(478),!1,function(e){r(475)},"data-v-bc2ce568",null);e.exports=n.exports},475:function(e,t,r){var n=r(476);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(177)("a33e39a8",n,!0,{})},476:function(e,t,r){(e.exports=r(75)(!1)).push([e.i,"td[data-v-bc2ce568]{border:1px solid #000;line-height:40px;background-color:#f9f9f9;text-align:center}th[data-v-bc2ce568]{text-align:center}table[data-v-bc2ce568]{width:300px;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse;background-color:transparent;margin-left:10px}.cursor[data-v-bc2ce568]{cursor:pointer}",""])},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(196);t.default={data:function(){return{activeName:"first",repeatName:"",repeatPhone:""}},created:function(){var e=this;Object(n.q)().then(function(t){e.repeatName=t.data.data.name,e.repeatPhone=t.data.data.phone})},methods:{repeatPhoneClick:function(e){this.$emit("keyword",{phone:e.target.innerHTML}),this.$emit("close")},repeatNameClick:function(e){this.$emit("keyword",{name:e.target.innerHTML}),this.$emit("close")}}}},478:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"重复姓名",lazy:!0,name:"first"}},[r("div",[r("table",[r("tr",[r("th",[e._v("\n                       名称\n                    ")]),e._v(" "),r("th",[e._v("次数")])]),e._v(" "),e._l(e.repeatName,function(t,n){return r("tr",[r("td",{key:n,staticClass:"cursor",on:{click:e.repeatNameClick}},[e._v(e._s(t[1]))]),e._v(" "),r("td",[e._v(e._s(t[0]))])])})],2)])]),e._v(" "),r("el-tab-pane",{attrs:{label:"重复手机号码",lazy:!0,name:"second"}},[r("div",[r("table",[r("tr",[r("th",[e._v("\n                        名称\n                    ")]),e._v(" "),r("th",[e._v("次数")])]),e._v(" "),e._l(e.repeatPhone,function(t,n){return r("tr",[r("td",{key:n,staticClass:"cursor",on:{click:e.repeatPhoneClick}},[e._v(e._s(t[1]))]),e._v(" "),r("td",[e._v(e._s(t[0]))])])})],2)])])],1)},staticRenderFns:[]}},479:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{margin:"8px 0"}},[r("el-row",[r("el-col",{attrs:{span:14}},[this.orderListAuth.delete?[r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:e.handleSelect}},[e._v("删除订单信息\n                    ")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-refresh"},on:{click:e.updateStatus}},[e._v("更改订单状态\n                    ")]),e._v(" "),r("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-printer"},on:{click:e.exportOrder}},[e._v("导出数据\n                    ")]),e._v(" "),r("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-mobile-phone"},on:{click:e.repeatCheck}},[e._v("重复订单检测\n                    ")])]:e._e()],2),e._v(" "),r("el-col",{attrs:{span:10}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入要搜索的内容...",size:"small"},model:{value:e.search.value,callback:function(t){e.$set(e.search,"value",t)},expression:"search.value"}},[r("el-select",{staticStyle:{width:"110px"},attrs:{slot:"prepend",size:"small",placeholder:"请选择"},slot:"prepend",model:{value:e.search.field,callback:function(t){e.$set(e.search,"field",t)},expression:"search.field"}},e._l(e.columns,function(t){return t.search?r("el-option",{key:t.prop,attrs:{label:t.label,value:t.prop}}):e._e()})),e._v(" "),r("el-button",{attrs:{slot:"append",size:"small",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1)],1),e._v(" "),r("div",{staticClass:"Briefing"},[r("ul",[r("li",[e._v("共查询到 "+e._s(this.Briefing.totalCount)+"笔订单")]),e._v(" "),r("li",[e._v("【今日新订单】 "+e._s(this.Briefing.today)+"笔")]),e._v(" "),r("li",[e._v("【已发货】 "+e._s(this.Briefing.todayAlready)+"笔")]),e._v(" "),r("li",[e._v("【未发货】 "+e._s(this.Briefing.todayNotQuery)+"笔")]),e._v(" "),r("li",[e._v(" 所有订单金额 "+e._s(this.Briefing.todayPrice)+"元")])])])],1),e._v(" "),r("div",{staticClass:"myTable"},[r("Table",{ref:"table",attrs:{url:e.url,columns:e.columns},on:{tools:e.handleTools}})],1),e._v(" "),r("el-dialog",{attrs:{title:"查看IP手机地理信息",visible:e.ipSourceIsShow},on:{"update:visible":function(t){e.ipSourceIsShow=t}}},[e.ipSourceIsShow?r("ipSourceShow",{ref:"editForm",attrs:{id:e.id},on:{close:function(t){e.ipSourceIsShow=!1}}}):e._e()],1),e._v(" "),r("el-dialog",{attrs:{title:"订单详情",visible:e.goodsOrderInfo},on:{"update:visible":function(t){e.goodsOrderInfo=t}}},[e.goodsOrderInfo?r("show",{ref:"editForm",attrs:{id:e.id},on:{close:function(t){e.goodsOrderInfo=!1}}}):e._e()],1),e._v(" "),r("el-dialog",{attrs:{title:"更新订单状态",visible:e.updateOrder},on:{"update:visible":function(t){e.updateOrder=t}}},[e.updateOrder?r("update",{ref:"editForm",attrs:{id:e.id},on:{render:this.handleRenderTable,close:function(t){e.updateOrder=!1}}}):e._e()],1),e._v(" "),r("el-dialog",{attrs:{title:"重复订单",visible:e.repeatOrder},on:{"update:visible":function(t){e.repeatOrder=t}}},[e.repeatOrder?r("repeat",{ref:"editForm",on:{keyword:e.searchKeyword,close:function(t){e.repeatOrder=!1}}}):e._e()],1),e._v(" "),r("el-dialog",{attrs:{title:"确认删除",visible:e.confirmDelete},on:{"update:visible":function(t){e.confirmDelete=t}}},[e.confirmDelete?r("div",[r("el-input",{staticStyle:{width:"70%"},attrs:{placeholder:"删除原因"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}}),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:e.handelDel}},[e._v("立即删除")])],1):e._e()])],1)},staticRenderFns:[]}},532:function(e,t,r){var n=r(176)(r(458),r(479),!1,function(e){r(456)},"data-v-710eef25",null);e.exports=n.exports}});