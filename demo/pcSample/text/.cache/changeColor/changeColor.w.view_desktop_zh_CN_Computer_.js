window.__justep.__ResourceEngine.loadCss([{url: '/v_cabbfac3766e4c61ad4fe8c0e9abe7e6l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_0f352ebab88a47c0a2c48f56797063b4l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_66d3be86f8ab47a29f1f54b50a6dda5fl_zh_CNs_desktopd_pc/system/core.min.js','/v_8f7e128ab5564f7fb2fb6cebeec3cecfl_zh_CNs_desktopd_pc/system/common.min.js','/v_a51ab2593ca9404db96d19dd2ba5a190l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/text/changeColor'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caqqUZr';
	this._flag_='c53582ded62fd7c6eddb4c0488de0296';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"colorID":{"define":"colorID","label":"颜色","name":"colorID","relation":"colorID","type":"String"}},"directDelete":false,"events":{},"idColumn":"colorID","initData":"[{\"colorID\":\"0\"}]","limit":20,"xid":"colorData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"age":{"define":"age","label":"年龄","name":"age","relation":"age","type":"String"},"name":{"define":"name","label":"姓名","name":"name","relation":"name","type":"String"},"sex":{"define":"sex","label":"性别","name":"sex","relation":"sex","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"name\":\"张三\",\"sex\":\"男\",\"age\":\"22\"},{\"name\":\"张三\",\"sex\":\"男\",\"age\":\"22\"},{\"name\":\"张三\",\"sex\":\"男\",\"age\":\"22\"},{\"name\":\"张三\",\"sex\":\"男\",\"age\":\"22\"}]","limit":20,"xid":"informationData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"colorID":{"define":"colorID","label":"颜色ID","name":"colorID","relation":"colorID","type":"String"}},"directDelete":false,"events":{},"idColumn":"colorID","initData":"[{\"colorID\":\"0\"}]","limit":20,"xid":"multiLineData"});
}}); 
return __result;});
