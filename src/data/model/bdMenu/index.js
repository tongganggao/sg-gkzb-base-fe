import {Model} from 'common'
Model.define('basedoc.bdMenu', {
  proxy: {},
//   CREATE TABLE sg_bd_menu` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `pid` bigint(20) DEFAULT NULL COMMENT '父主键',
//   `menu_code` varchar(50) DEFAULT NULL COMMENT '功能编码',
//   `menu_name` varchar(100) DEFAULT NULL COMMENT '功能名称',
//   `helpdoc` varchar(300) DEFAULT NULL COMMENT '帮助文件名',
//   `role_memo` varchar(200) DEFAULT NULL COMMENT '功能描述',
//   `pk_org` bigint(20) DEFAULT NULL COMMENT '所属组织',
//   `innercode` varchar(60) DEFAULT NULL COMMENT '内部码',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态',
//   `isca` int(11) DEFAULT NULL COMMENT '是否 CA用户可用',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='菜单';
  meta: {
   id :'', 
   pid :'',
   pCode :'',
   pName:'',
   menuCode :'',
   menuName :'',
   helpdoc :'',
   roleMemo :'',
   pkOrg :'',
   orgName :'',
   orgCode :'',
   innercode :'',
   enable :'',
   isca :'',
   name:''
  }
})


export default Model.create('basedoc.bdMenu')