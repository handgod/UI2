window.__justep.__ResourceEngine.loadCss([{url: '/v_7667468a8fa946418142aa2472bc2dffl_zh_CNs_desktopd_pc/system/components/pc.addon.min.css', include: '$model/system/components/justep/pagerBar/css/pagerBar,$model/system/components/justep/widgets/css/widgets,$model/system/components/justep/absoluteLayout/css/absoluteLayout,$model/system/components/justep/pagerLimitSelect/css/pagerLimitSelect,$model/system/components/justep/cellLayout/css/cellLayout,$model/system/components/justep/smartContainer/css/smartContainer'},{url: '/v_0080b2b69556406b9d306869edda1cb3l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_98226ed1c5394a8199aca50e453ffdd4l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a090d26410f5435b907899aa11d76af8l_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_4b06c4fecec84d22a02574d3a00273ddl_zh_CNs_desktopd_pc/system/core.min.js','/v_45cc6e80467e4390bd5c21418f9d415al_zh_CNs_desktopd_pc/system/common.min.js','/v_5eded4a2df8f41f2ae38bafa27ac845bl_zh_CNs_desktopd_pc/system/components/comp.min.js','/v_6ea4bbdb5ddd4334a3e15ab326ce0627l_zh_CNs_desktopd_pc/system/components/pc.addon.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/cellLayout/cellLayout');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/bootstrap/tabs/tab');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/tabs/tabs');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/components/process/attachment/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cANZneu';
	this._flag_='5b4e0778220eb97fb26438e8625309ab';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"label":{"define":"label","name":"label","relation":"label","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":\"7\",\"label\":\"7:下载\"},{\"value\":\"263\",\"label\":\"263:下载 上传\"},{\"value\":\"775\",\"label\":\"775:下载 上传 修改\"},{\"value\":\"1799\",\"label\":\"1799:下载 上传 修改 删除\"}]","limit":20,"xid":"dRadio"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"access":{"define":"access","name":"access","relation":"access","type":"String"}},"directDelete":false,"events":{"onValueChanged":"dTempValueChanged"},"idColumn":"access","limit":20,"xid":"dTemp"});
}}); 
return __result;});
