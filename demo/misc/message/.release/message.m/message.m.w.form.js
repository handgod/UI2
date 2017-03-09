define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/misc/message/message.m'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFv2eUj';
	this._flag_='bf063a0dd67fbc8fbef70c8e2be02b7f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"targetNames":{"define":"targetNames","label":"发送目标名称","name":"targetNames","relation":"targetNames","type":"String"},"targets":{"define":"targets","label":"发送目标","name":"targets","relation":"targets","rules":{"required":{"message":"请选择消息接收者","params":{"expr":"true"}}},"type":"String"},"title":{"define":"title","label":"消息标题","name":"title","relation":"title","rules":{"required":{"message":"请输出消息标题","params":{"expr":"true"}}},"type":"String"},"type":{"define":"type","label":"消息类型","name":"type","relation":"type","type":"String"},"url":{"define":"url","label":"消息url","name":"url","relation":"url","type":"String"}},"directDelete":false,"events":{},"idColumn":"targets","initData":"[{\"targets\":\"\",\"targetNames\":\"\",\"title\":\"hello\",\"type\":\"default\",\"url\":\"/UI2/demo/misc/message/message.m.w?process=/demo/components/process/ui2/ui2Process&activity=mainActivity\"}]","limit":20,"xid":"sendData"});
}}); 
return __result;});