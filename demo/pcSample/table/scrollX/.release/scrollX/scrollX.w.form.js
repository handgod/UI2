define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/dataTables/dataTables');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/table/scrollX/scrollX'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNnMBBz';
	this._flag_='124b91bb9a1bc7be27ffc3430ef77e3f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"tAddress":{"define":"tAddress","label":"地址","name":"tAddress","relation":"tAddress","type":"String"},"tAge":{"define":"tAge","label":"年龄","name":"tAge","relation":"tAge","rules":{"number":true},"type":"Float"},"tID":{"define":"tID","label":"ID","name":"tID","relation":"tID","type":"String"},"tJob":{"define":"tJob","label":"职业","name":"tJob","relation":"tJob","type":"String"},"tName":{"define":"tName","label":"姓名","name":"tName","relation":"tName","type":"String"},"tPhone":{"define":"tPhone","label":"手机","name":"tPhone","relation":"tPhone","type":"String"},"tRemark":{"define":"tRemark","label":"备注","name":"tRemark","relation":"tRemark","type":"String"},"tSex":{"define":"tSex","label":"性别","name":"tSex","relation":"tSex","type":"String"}},"directDelete":false,"events":{},"idColumn":"tID","initData":"[{\"tID\":\"1\",\"tName\":\"张小三\",\"tSex\":\"男\",\"tAge\":21,\"tJob\":\"Java开发工程师\",\"tPhone\":\"18888888889\",\"tAddress\":\"北京市东城区西长安街\",\"tRemark\":\"北京市东城区西长安街天安门广场\"},{\"tID\":\"2\",\"tName\":\"李小四\",\"tSex\":\"女\",\"tAge\":20,\"tJob\":\"平面设计工程师\",\"tPhone\":\"13264987091\",\"tAddress\":\"北京市朝阳区十里河\",\"tRemark\":\"十里河万家灯火欢乐无限,万家灯火欢乐无限\"},{\"tID\":\"3\",\"tName\":\"张三\",\"tSex\":\"男\",\"tAge\":41,\"tJob\":\"中层领导\",\"tPhone\":\"18888888888\",\"tAddress\":\"北京市东城区西长安街\",\"tRemark\":\"北京市东城区西长安街\"},{\"tID\":\"4\",\"tName\":\"张三\",\"tSex\":\"男\",\"tAge\":38,\"tJob\":\"经理\",\"tPhone\":\"17036985429\",\"tAddress\":\"北京市东城区西长安街\",\"tRemark\":\"北京市东城区西长安街\"},{\"tID\":\"5\",\"tName\":\"张三\",\"tSex\":\"男\",\"tAge\":38,\"tJob\":\"总监\",\"tPhone\":\"15298476324\",\"tAddress\":\"北京市东城区西长安街\",\"tRemark\":\"北京市东城区西长安街\"},{\"tID\":\"6\",\"tName\":\"李四\",\"tSex\":\"女\",\"tAge\":21,\"tJob\":\"销售员\",\"tPhone\":\"15298476324\",\"tAddress\":\"上海新东方东方明珠之城\",\"tRemark\":\"香港九龙岛环线\"},{\"tID\":\"7\",\"tName\":\"肖红\",\"tSex\":\"女\",\"tAge\":22,\"tJob\":\"销售员\",\"tPhone\":\"13596487298\",\"tAddress\":\"西藏布达拉宫旁边\",\"tRemark\":\"上海新东方东方明珠之城\"},{\"tID\":\"8\",\"tName\":\"李四\",\"tSex\":\"男\",\"tAge\":26,\"tJob\":\"业务员\",\"tPhone\":\"15896324719\",\"tAddress\":\"香港九龙岛环线\",\"tRemark\":\"香港九龙岛环线\"},{\"tID\":\"9\",\"tName\":\"王五\",\"tSex\":\"女\",\"tAge\":28,\"tJob\":\"销售员\",\"tPhone\":\"15298476324\",\"tAddress\":\"上海新东方东方明珠之城\",\"tRemark\":\"西藏布达拉宫旁边\"},{\"tID\":\"10\",\"tName\":\"小明\",\"tSex\":\"男\",\"tAge\":7,\"tJob\":\"小学生\",\"tPhone\":\"13529976320\",\"tAddress\":\"太阳系地球村\",\"tRemark\":\"地址不详\"},{\"tID\":\"11\",\"tName\":\"小红\",\"tSex\":\"女\",\"tAge\":13,\"tJob\":\"初中生\",\"tPhone\":\"15198676324\",\"tAddress\":\"新疆维吾尔族自治区\",\"tRemark\":\"太阳当空照，花儿对我笑\"},{\"tID\":\"12\",\"tName\":\"小白\",\"tSex\":\"男\",\"tAge\":18,\"tJob\":\"高中生\",\"tPhone\":\"18520763209\",\"tAddress\":\"局部地区\",\"tRemark\":\"小鸟说：早早早，再不起床就要迟到了\"}]","limit":20,"xid":"tableData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"sName":{"define":"sName","label":"名称","name":"sName","relation":"sName","type":"String"}},"directDelete":false,"events":{},"idColumn":"sName","initData":"[{\"sName\":\"院系一\"},{\"sName\":\"院系二\"},{\"sName\":\"院系三\"},{\"sName\":\"院系四\"},{\"sName\":\"院系五\"}]","limit":20,"xid":"selectData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});