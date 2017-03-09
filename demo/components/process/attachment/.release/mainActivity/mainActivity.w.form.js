define(function(require){
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