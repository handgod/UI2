window.__justep.__ResourceEngine.loadCss([{url: '/v_66de5d98f4c64439b8732bacfc1fd023l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_e678a8fe2b784ec1a776b9dd5b914c65l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_e39f045637d24081aecf70849e466566l_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_079d987410804acb901d91dcb7792307l_zh_CNs_desktopd_pc/system/core.min.js','/v_5bf7b84df19a48ecac471d3e4592a240l_zh_CNs_desktopd_pc/system/common.min.js','/v_1fa6d393375e4b2eb32eb07ad15e4589l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/dataOperation/dataOperation');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/shell/shell');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/tuniu/index_main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmm6ja2';
	this._flag_='545969a89bfc4224ab83f48f35b93b49';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cityName":{"define":"cityName","name":"cityName","relation":"cityName","type":"String"},"inputVal":{"define":"inputVal","name":"inputVal","relation":"inputVal","type":"String"},"useTopClass":{"define":"useTopClass","name":"useTopClass","relation":"useTopClass","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"inputVal","initData":"[{\"inputVal\":\"马尔代夫\",\"useTopClass\":0,\"cityName\":\"北京\"}]","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","type":"String"},"fSatisfaction":{"define":"fSatisfaction","label":"满意度","name":"fSatisfaction","relation":"fSatisfaction","type":"String"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"{\"operation\":\"dataOperation1.refreshByGET\",\"args\":{\"url\":\"js: $model.toUrl('./json/productData.json')\",\"sync\":\"js:true\"}}"},"idColumn":"fID","limit":20,"xid":"productData"});
 var __DataOP__ = require("$UI/system/components/justep/dataOperation/dataOperation");new __DataOP__(this,'dataOperation1');
}}); 
return __result;});
