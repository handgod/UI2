define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/cellLayout/cellLayout');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/toolBar/toolBar');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/demo/fn/process/processFnExample/mainActivity'); 
var __parent0=require('$model/UI2/demo/fn/process/processFnExample/businessActivity3'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEVNZZn';
	this._flag_='7c7d4e6d704261883950022edb5fe07d';
	this.callParent(contextUrl);
}}); 
return __result;});