define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/dialog/multiList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cvumA3i';
	this._flag_='cc71d46599c29dd659ac917b9c86091a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"SA_OPOrg":{"define":"SA_OPOrg","label":"组织ID","name":"SA_OPOrg","relation":"SA_OPOrg","type":"String"},"sName":{"define":"sName","label":"名称","name":"sName","relation":"sName","type":"String"}},"directDelete":false,"events":{},"idColumn":"SA_OPOrg","limit":20,"xid":"selectData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"SA_OPOrg":{"define":"SA_OPOrg","label":"组织ID","name":"SA_OPOrg","relation":"SA_OPOrg","type":"String"},"sName":{"define":"sName","label":"名称","name":"sName","relation":"sName","type":"String"}},"directDelete":false,"events":{},"idColumn":"SA_OPOrg","initData":"[{\"SA_OPOrg\":\"1\",\"sName\":\"起步软件\"},{\"SA_OPOrg\":\"2\",\"sName\":\"system\"},{\"SA_OPOrg\":\"3\",\"sName\":\"董事会\"},{\"SA_OPOrg\":\"4\",\"sName\":\"董事长\"}]","limit":20,"xid":"searchData"});
}}); 
return __result;});