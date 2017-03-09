window.__justep.__ResourceEngine.loadCss([{url: '/v_0ff613ff985a40a58764b159144cb707l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_0dd4ffb8f28b49aeb4a11b22c1a0e962l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_92fb0085aa8d43cab0dc08262aa44d79l_zh_CNs_desktopd_pc/system/core.min.js','/v_7000cf75e6a047ed939b04b19c6d9c88l_zh_CNs_desktopd_pc/system/common.min.js','/v_b2541dcd5ebc4e93bd5e333fef125615l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent0=require('$model/UI2/system/lib/base/modelBase'); 
var __result = __parent0.extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='czei22a';
	this._flag_='242d29d7b64255fb9dcf19a3ebe0a3c1';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":true,"defCols":{"completed":{"define":"completed","label":"completed","name":"completed","relation":"completed","type":"Boolean"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","rules":{"datetime":true},"type":"DateTime"}},"directDelete":false,"events":{"onAfterDelete":"saveData","onAfterNew":"saveData","onValueChanged":"saveData"},"idColumn":"id","limit":20,"readonly":"js:$model.test()","xid":"todoData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"allCompleted":{"define":"allCompleted","label":"allCompleted","name":"allCompleted","relation":"allCompleted","rules":{"calculate":"js:($model.todoData.getCount()>0) ($model.tempData.val('completedCount')==$model.todoData.getCount())"},"type":"Boolean"},"col3":{"define":"col3","label":"col3","name":"col3","relation":"col3","type":"String"},"completedCount":{"define":"completedCount","label":"completedCount","name":"completedCount","relation":"completedCount","rules":{"calculate":"js: $model.todoData.count(function(p){return p.row.val('completed')})","integer":true},"type":"Integer"},"status":{"define":"status","label":"status","name":"status","relation":"status","type":"String"}},"directDelete":false,"events":{},"idColumn":"status","initData":"[{\"status\":\"All\"}]","limit":20,"xid":"tempData"});
}}); 
return __result;});
