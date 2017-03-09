define(function(require){
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