import {Model} from 'common'
Model.define('bdDepartmentDoc.ref.bdBusinessUnit', {
  proxy: {},
//   CREATE TABLE sg_bd_org` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `org_code` varchar(50) DEFAULT NULL COMMENT '业务单元编码',
//   `org_name` varchar(100) DEFAULT NULL COMMENT '业务单元名称',
//   `shortname` varchar(200) DEFAULT NULL COMMENT '简称',
//   `mnecode` varchar(50) DEFAULT NULL COMMENT '助记码',
//   `pid` bigint(20) DEFAULT NULL COMMENT '上级业务单元',
//   `pk_entitypro` bigint(20) DEFAULT NULL COMMENT '实体属性',
//   `pk_currency` bigint(20) DEFAULT NULL COMMENT '本位币',
//   `pk_zone` bigint(20) DEFAULT NULL COMMENT '国家地区',
//   `pk_timezone` bigint(20) DEFAULT NULL COMMENT '时区',
//   `orgcode` varchar(50) DEFAULT NULL COMMENT '组织机构码',
//   `innercode` varchar(200) DEFAULT NULL COMMENT '内部码',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `ispurchase` varchar(20) DEFAULT NULL COMMENT '采购',
//   `vno` varchar(200) DEFAULT NULL COMMENT '版本号',
//   `vname` varchar(200) DEFAULT NULL COMMENT '版本名称',
//   `vstartdate` datetime DEFAULT NULL COMMENT '版本生效日期',
//   `venddate` datetime DEFAULT NULL COMMENT '版本失效日期',
//   `ispublic` int(11) DEFAULT NULL COMMENT '是否公开招标',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态 1=未启用，2=已启用，3=已停用， ',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='业务单元';
  meta: {
    id: '',
    orgCode: '',
    orgName: '',
    shortname :'',
    mnecode :'',
    pid :'',
    pName :'',
    pCode :'',
    pkEntitypro :'',
    entityproName :'',
    pkCurrency :'',
    currencyName :'',
    pkZone :'',
    zoneName :'',
    pkTimezone :'',
    timezoneName :'',
    orgcode :'',
    innercode :'',
    ispurchase :'',
    vno :'',
    vname :'',
    vstartdate :'',
    venddate :'',
    ispublic :'',
    creator :'',
    createTime :'',
    modifier :'',
    modifiedTime :'',
    enable :'',
    name:''
  }
})


export default Model.create('bdDepartmentDoc.ref.bdBusinessUnit')