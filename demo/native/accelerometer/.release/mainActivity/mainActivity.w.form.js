define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/native/accelerometer/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJ3yayq';
	this._flag_='ac6ca2651cd40ef862392476f69f8215';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"col0","name":"content","relation":"content","type":"String"}},"directDelete":false,"events":{},"idColumn":"content","limit":20,"xid":"fileData"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"title":{"define":"title","label":"col0","name":"title","relation":"title","type":"String"},"x":{"define":"x","label":"col1","name":"x","relation":"x","type":"String"},"y":{"define":"y","label":"col2","name":"y","relation":"y","type":"String"},"z":{"define":"z","label":"col3","name":"z","relation":"z","type":"String"}},"directDelete":false,"events":{},"idColumn":"title","limit":20,"xid":"contentData"});
}}); 
return __result;});