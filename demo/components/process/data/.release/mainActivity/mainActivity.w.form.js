define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/pagerBar/pagerBar');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/cellLayout/cellLayout');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/toolBar/toolBar');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/bootstrap/tabs/tab');
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/gridSelect/gridSelect');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/tabs/tabs');
require('$model/UI2/system/components/justep/excelLayout/excelLayout');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/components/process/data/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cRBNf2y';
	this._flag_='6f37af5c2b9519e49cc853f02f0501e8';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"key":{"define":"key","name":"key","relation":"key","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"key","initData":"[{\"key\":\"fOrderNumber\",\"value\":\"订单号\"},{\"key\":\"fFreght\",\"value\":\"运费\"},{\"key\":\"fOrderDate\",\"value\":\"订单日期\"},{\"key\":\"fRequiredDate\",\"value\":\"需求日期\"},{\"key\":\"fShippedDate\",\"value\":\"发货日期\"}]","limit":20,"xid":"dOrderBy_Fields"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"key":{"define":"key","name":"key","relation":"key","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"key","initData":"[{\"key\":\"0\",\"value\":\"降序\"},{\"key\":\"1\",\"value\":\"升序\"}]","limit":20,"xid":"dOrderBy_Type"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"key":{"define":"key","name":"key","relation":"key","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"key","initData":"[{\"key\":\"checking\",\"value\":\"审批中\"},{\"key\":\"checked\",\"value\":\"已审批\"},{\"key\":\"shipped\",\"value\":\"已发货\"}]","limit":20,"xid":"dRule_Status"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"field":{"define":"field","name":"field","relation":"field","type":"String"},"fieldLabel":{"define":"fieldLabel","name":"fieldLabel","relation":"fieldLabel","type":"String"},"isValid":{"define":"isValid","name":"isValid","relation":"isValid","type":"String"},"treeSelectKey":{"define":"treeSelectKey","name":"treeSelectKey","relation":"treeSelectKey","type":"String"},"treeSelectValue":{"define":"treeSelectValue","name":"treeSelectValue","relation":"treeSelectValue","type":"String"},"type":{"define":"type","name":"type","relation":"type","type":"String"},"typeLabel":{"define":"typeLabel","name":"typeLabel","relation":"typeLabel","type":"String"}},"directDelete":false,"events":{},"idColumn":"field","limit":20,"xid":"dTemp"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"sFID":{"define":"sFID","label":"sFID","name":"sFID","relation":"sFID","type":"String"},"sFName":{"define":"sFName","label":"sFName","name":"sFName","relation":"sFName","type":"String"},"sName":{"define":"sName","label":"sName","name":"sName","relation":"sName","type":"String"},"sNodeKind":{"define":"sNodeKind","label":"sNodeKind","name":"sNodeKind","relation":"sNodeKind","type":"String"},"sOrgKindID":{"define":"sOrgKindID","label":"sOrgKindID","name":"sOrgKindID","relation":"sOrgKindID","type":"String"},"sParent":{"define":"sParent","label":"sParent","name":"sParent","relation":"sParent","type":"String"},"sPersonID":{"define":"sPersonID","label":"sPersonID","name":"sPersonID","relation":"sPersonID","type":"String"},"sSequence":{"define":"sSequence","label":"sSequence","name":"sSequence","relation":"sSequence","type":"String"}},"directDelete":false,"events":{},"idColumn":"sFID","initData":"[{\"sFID\":\"/F92C257AEA094865A96DCB617482B37C.ogn\",\"sName\":\"阳光集团（演示数据）\",\"sFName\":\"/阳光集团（演示数据）\",\"sOrgKindID\":\"ogn\",\"sSequence\":\"/003\"},{\"sFID\":\"/F92C257AEA094865A96DCB617482B37C.ogn/4830B1B9A8204D23A7D5D5F3338605DC.ogn\",\"sName\":\"广东分公司\",\"sFName\":\"/阳光集团（演示数据）/广东分公司\",\"sOrgKindID\":\"ogn\",\"sSequence\":\"/003/014\",\"sParent\":\"F92C257AEA094865A96DCB617482B37C\"},{\"sFID\":\"/F92C257AEA094865A96DCB617482B37C.ogn/4830B1B9A8204D23A7D5D5F3338605DC.ogn/C5974B908942488C991D425143DDCA00.dpt\",\"sName\":\"销售部\",\"sFName\":\"/阳光集团（演示数据）/广东分公司/销售部\",\"sOrgKindID\":\"dpt\",\"sSequence\":\"/003/014/004\",\"sParent\":\"4830B1B9A8204D23A7D5D5F3338605DC\"}]","limit":20,"xid":"orgData"});
}}); 
return __result;});