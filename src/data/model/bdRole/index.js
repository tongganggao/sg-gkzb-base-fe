import {Model} from 'common'
Model.define('basedoc.bdRole', {
  proxy: {},
//   CREATE TABLE `sg_bd_role` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `role_code` varchar(50) DEFAULT NULL COMMENT '角色编码',
//   `role_name` varchar(100) DEFAULT NULL COMMENT '角色名称',
//   `pk_org` bigint(20) DEFAULT NULL COMMENT '所属组织',
//   `innercode` varchar(60) DEFAULT NULL COMMENT '内部码',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态',
//   `con_users` varchar(200) DEFAULT NULL COMMENT '已关联用户',
//   `con_funs` varchar(200) DEFAULT NULL COMMENT '已分配功能',
//   `con_orgs` varchar(200) DEFAULT NULL COMMENT '已分配组织',
//   `role_memo` varchar(200) DEFAULT NULL COMMENT '角色备注',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色';
  meta: {
    id  :'',
    roleCode  :'',
    roleName  :'',
    pkOrg  :'',
    orgName  :'',
    orgCode  :'',
    innercode  :'',
    enable  :'',
    conUsers  :'',
    conFuns  :'',
    conOrgs  :'',
    roleMemo  :''
  }
})


export default Model.create('basedoc.bdRole')