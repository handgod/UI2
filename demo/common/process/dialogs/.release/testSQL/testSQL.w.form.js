define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/form/form');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/common/process/dialogs/testSQL'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cr6RBry';
	this._flag_='fbc054f97e9c60e3541a54799ea5b3b2';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"DEMO_Customers":{"define":"DEMO_Customers","name":"DEMO_Customers","relation":"DEMO_Customers","type":"String"},"c":{"define":"c","name":"c","relation":"c","type":"String"},"fAddress":{"define":"fAddress","name":"fAddress","relation":"fAddress","type":"String"},"fAreaCode":{"define":"fAreaCode","name":"fAreaCode","relation":"fAreaCode","type":"String"},"fCity":{"define":"fCity","name":"fCity","relation":"fCity","type":"String"},"fCompanyName":{"define":"fCompanyName","name":"fCompanyName","relation":"fCompanyName","type":"String"},"fContact":{"define":"fContact","name":"fContact","relation":"fContact","type":"String"},"fContactName":{"define":"fContactName","name":"fContactName","relation":"fContactName","type":"String"},"fContactTitle":{"define":"fContactTitle","name":"fContactTitle","relation":"fContactTitle","type":"String"},"fCountry":{"define":"fCountry","name":"fCountry","relation":"fCountry","type":"String"},"fCustomerID":{"define":"fCustomerID","name":"fCustomerID","relation":"fCustomerID","type":"String"},"fDate":{"define":"fDate","name":"fDate","relation":"fDate","type":"String"},"fDay":{"define":"fDay","name":"fDay","relation":"fDay","type":"String"},"fFax":{"define":"fFax","name":"fFax","relation":"fFax","type":"String"},"fFaxNumber":{"define":"fFaxNumber","name":"fFaxNumber","relation":"fFaxNumber","type":"String"},"fGuid":{"define":"fGuid","name":"fGuid","relation":"fGuid","type":"String"},"fID":{"define":"fID","name":"fID","relation":"fID","type":"String"},"fMonth":{"define":"fMonth","name":"fMonth","relation":"fMonth","type":"String"},"fOrderCount":{"define":"fOrderCount","name":"fOrderCount","relation":"fOrderCount","type":"String"},"fOrderDate":{"define":"fOrderDate","name":"fOrderDate","relation":"fOrderDate","type":"String"},"fOrderID":{"define":"fOrderID","name":"fOrderID","relation":"fOrderID","type":"String"},"fOrderNumber":{"define":"fOrderNumber","name":"fOrderNumber","relation":"fOrderNumber","type":"String"},"fPhone":{"define":"fPhone","name":"fPhone","relation":"fPhone","type":"String"},"fPhoneNumber":{"define":"fPhoneNumber","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"},"fPostalCode":{"define":"fPostalCode","name":"fPostalCode","relation":"fPostalCode","type":"String"},"fRegion":{"define":"fRegion","name":"fRegion","relation":"fRegion","type":"String"},"fStatus":{"define":"fStatus","name":"fStatus","relation":"fStatus","type":"String"},"fStatusText":{"define":"fStatusText","name":"fStatusText","relation":"fStatusText","type":"String"},"fType":{"define":"fType","name":"fType","relation":"fType","type":"String"},"fYear":{"define":"fYear","name":"fYear","relation":"fYear","type":"String"},"o":{"define":"o","name":"o","relation":"o","type":"String"},"regionCount":{"define":"regionCount","name":"regionCount","relation":"regionCount","type":"String"},"version":{"define":"version","name":"version","relation":"version","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"xid":"dResult"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","name":"fName","relation":"fName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fName","initData":"[{\"fName\":\"KSQL\"},{\"fName\":\"SQL\"}]","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fValue":{"define":"fValue","name":"fValue","relation":"fValue","type":"String"}},"directDelete":false,"events":{},"idColumn":"fValue","initData":"[{\"fValue\":\"KSQL\"}]","limit":20,"xid":"data2"});
}}); 
return __result;});