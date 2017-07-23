import {Model} from 'common'
Model.define('basedoc.bdDepartmentDoc', {
  proxy: {},
//   CREATE TABLE sg_bd_dept (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `dept_code` varchar(50) DEFAULT NULL COMMENT '部门编码',
//   `area_name` varchar(100) DEFAULT NULL COMMENT '部门名称',
//   `shortname` varchar(200) DEFAULT NULL COMMENT '简称',
//   `pid` bigint(20) DEFAULT NULL COMMENT '上级部门',
//   `depttype` int(11) DEFAULT NULL COMMENT '部门类型 0=普通部门，1=虚拟部门，',
//   `pk_deptlev` bigint(20) DEFAULT NULL COMMENT '部门级别',
//   `createdate` datetime DEFAULT NULL COMMENT '成立时间',
//   `mnecode` varchar(50) DEFAULT NULL COMMENT '助记码',
//   `tel` varchar(100) DEFAULT NULL COMMENT '电话',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态',
//   `pk_psndoc` bigint(20) DEFAULT NULL COMMENT '负责人',
//   `innercode` varchar(60) DEFAULT NULL COMMENT '内部码',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='部门';
  meta: {
   id :'',
   pkOrg:'',
   orgName:'',
   orgCode:'',
   name:'',
   deptCode :'',
   deptName :'',
   shortname :'',
   pid :'',
   pCode:'',
   pName:'',
   depttype :'',
   pkDeptlev :'',
   deptlevName :'',
   deptlevCode :'',
   createdate :'',
   mnecode:'',
   tel :'',
   enable :'',
   pkPsndoc :'',
   psndoc :'',
   innercode :'',
   
  }
})


export default Model.create('basedoc.bdDepartmentDoc')