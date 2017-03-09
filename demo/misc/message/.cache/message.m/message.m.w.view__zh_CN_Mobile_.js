window.__justep.__ResourceEngine.loadCss([{url: '/v_5e6bac0f0b484b29ba8968711bbab23cl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_ab4917b4ea8549fdaf485a8f8c1fa65el_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ccf5bb9e12c342f8958077577ce0ecf6l_zh_CNs_d_m/system/core.min.js','/v_19d0ab8a20474ee19811ae832f3cdae7l_zh_CNs_d_m/system/common.min.js','/v_d5ce6d6e35ef48c2b57d7fcdfd2594f5l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/misc/message/message.m'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFv2eUj';
	this._flag_='bf063a0dd67fbc8fbef70c8e2be02b7f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"targetNames":{"define":"targetNames","label":"发送目标名称","name":"targetNames","relation":"targetNames","type":"String"},"targets":{"define":"targets","label":"发送目标","name":"targets","relation":"targets","rules":{"required":{"message":"请选择消息接收者","params":{"expr":"true"}}},"type":"String"},"title":{"define":"title","label":"消息标题","name":"title","relation":"title","rules":{"required":{"message":"请输出消息标题","params":{"expr":"true"}}},"type":"String"},"type":{"define":"type","label":"消息类型","name":"type","relation":"type","type":"String"},"url":{"define":"url","label":"消息url","name":"url","relation":"url","type":"String"}},"directDelete":false,"events":{},"idColumn":"targets","initData":"[{\"targets\":\"\",\"targetNames\":\"\",\"title\":\"hello\",\"type\":\"default\",\"url\":\"/UI2/demo/misc/message/message.m.w?process=/demo/components/process/ui2/ui2Process&activity=mainActivity\"}]","limit":20,"xid":"sendData"});
}}); 
return __result;});
