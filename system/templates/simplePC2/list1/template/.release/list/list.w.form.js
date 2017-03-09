define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/pagerBar/pagerBar');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/toolBar/toolBar');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/templates/simplePC2/list1/template/list'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ceyEbqy';
	this._flag_='baf0ed2752012cae24801a7f987e8878';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"calcCheckBox","label":"选择","name":"calcCheckBox","relation":"calcCheckBox","type":"Boolean"},"fID":{"define":"fID","label":"{{data_xid}}","name":"fID","relation":"fID","rules":{"calculate":"justep.UUID.createUUID()"},"type":"String"},"{{column_name}}":{"define":"{{column_name}}","label":"{{column_label}}","name":"{{column_name}}","relation":"{{column_name}}","type":"{{column_type}}"}},"directDelete":true,"events":{"onCustomRefresh":"mainDataCustomRefresh","onCustomSave":"mainDataCustomSave"},"idColumn":"fID","limit":20,"xid":"{{data_xid}}"});
}}); 
return __result;});