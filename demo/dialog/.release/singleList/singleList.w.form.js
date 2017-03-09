define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/dialog/singleList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVFzmmu';
	this._flag_='993488731fbeae728cb01291ede1a90e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"ID":{"define":"ID","label":"ID","name":"ID","relation":"ID","type":"String"},"sName":{"define":"sName","label":"名称","name":"sName","relation":"sName","type":"String"}},"directDelete":false,"events":{},"idColumn":"ID","initData":"[{\"ID\":\"1\",\"sName\":\"起步软件\"},{\"ID\":\"2\",\"sName\":\"system\"},{\"ID\":\"3\",\"sName\":\"董事会\"},{\"ID\":\"4\",\"sName\":\"董事长\"}]","limit":20,"xid":"listData"});
}}); 
return __result;});