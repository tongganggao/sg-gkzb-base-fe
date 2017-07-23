import {Model} from 'common'
Model.define('basedoc.bdSupplierCat', {
  proxy: {
    get: "/sg-basedoc-supplier/supplierclass/query/page"
  },

//   CREATE TABLE `sg_bd_supplierclass` (
//   `id` bigint(20) DEFAULT NULL COMMENT '主键',
//   `code` varchar(50) DEFAULT NULL COMMENT '分类编码',
//   `name` varchar(200) DEFAULT NULL COMMENT '分类名称',
//   `org_id` decimal(20,8) DEFAULT NULL COMMENT '所属组织',
//   `parent_id` varchar(200) DEFAULT NULL COMMENT '上级分类',
//   `mnecode` char(50) DEFAULT NULL COMMENT '助记码',
//   `enablestate` int(11) DEFAULT NULL COMMENT '1=未启用，2=已启用，3=已停用，',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\n            0:保留\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间'
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='供应商分类：供应商基本分类 (bd_supplierclass)';
  meta: {
    id: '',
    code: '',
    name: '',
    orgId: '',
    orgCode: '',
    orgName: '',
    pid: '',
    pCode: '',
    pName: '',
    mnecode: '',
    enablestate: ''
    
  }
})


export default Model.create('basedoc.bdSupplierCat')