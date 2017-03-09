define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/native/fileOpener/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ca2M3ee';
	this._flag_='23716da36c7bf0e901a49f1d7d3f5122';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imageURI":{"define":"imageURI","label":"imageURI","name":"imageURI","relation":"imageURI","type":"String"},"ispackageid":{"define":"ispackageid","label":"ispackageid","name":"ispackageid","relation":"ispackageid","type":"String"},"unpackageId":{"define":"unpackageId","label":"unpackageId","name":"unpackageId","relation":"unpackageId","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"unpackageId\":\"com.justep.x5\",\"ispackageid\":\"com.justep.x5\"}]","limit":20,"xid":"data"});
}}); 
return __result;});