import {Model} from 'common'
Model.define('basedoc.bdSupplierDoc', {
  proxy: {},
//   CREATE TABLE `sg_bd_supplier` (
//   `id` bigint(20) DEFAULT NULL COMMENT '主键',
//   `code` varchar(50) DEFAULT NULL COMMENT '供应商编码',
//   `name` varchar(200) DEFAULT NULL COMMENT '供应商名称',
//   `org_id` decimal(20,8) DEFAULT NULL COMMENT '所属组织',
//   `shortname` varchar(200) DEFAULT NULL COMMENT '供应商简称',
//   `mnecode` char(50) DEFAULT NULL COMMENT '助记码',
//   `supstate` smallint(6) DEFAULT NULL COMMENT '0=潜在，1=核准',
//   `iscustomer` tinyint(1) DEFAULT NULL COMMENT '是否客户',
//   `supprop` int(11) DEFAULT NULL COMMENT '0=外部单位，1=内部单位',
//   `org_pk` bigint(20) DEFAULT NULL COMMENT '对应财务组织',
//   `organizing_code` varchar(200) DEFAULT NULL COMMENT '组织机构代码',
//   `suplinkman_id` bigint(20) DEFAULT NULL COMMENT '供应商联系人子表',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\n            0:保留\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间'
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='供应商档案：供应商基本信息 (bd_supplier) ';
  meta: {
    id: '',
    code: '',
    name: '',
    orgId: '',
    orgCode: '',
    orgName: '',
    shortname: '',
    supplierclassId: '',
    supplierclassCode: '',
    supplierclassName: '',
    iscustomer: '',
    enablestate: '',
    supstate: '',
    supprop: '',
    orgPk: '',
    orgfCode: '',
    orgfName: '',
    financialOrgCode: '',
    financialOrgName: '',
    organizingCode: '',
    suplinkmanId: '',
    suplinkmanCode: '',
    suplinkmanName: ''
  }
})


export default Model.create('basedoc.bdSupplierDoc')