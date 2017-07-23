import {Model} from 'common'
Model.define('basedoc.bdJob', {
  proxy: {
  	save:"/sg-basedoc-basedata/post/saveEntity"
  },
//   CREATE TABLE `sg_bd_post` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `post_code` varchar(50) DEFAULT NULL COMMENT '岗位编码',
//   `post_name` varchar(200) DEFAULT NULL COMMENT '岗位名称',
//   `pk_parent` bigint(20) DEFAULT NULL COMMENT '上级岗位',
//   `innercode` varchar(60) DEFAULT NULL COMMENT '内部码',
//   `pk_org` bigint(20) DEFAULT NULL COMMENT '所属组织',

//   `pk_dept` bigint(20) DEFAULT NULL COMMENT '所属部门',
//   `pk_postseries` bigint(20) DEFAULT NULL COMMENT '岗位序列',
//   `builddate` datetime DEFAULT NULL COMMENT '成立日期',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='岗位';
  meta: {
     id:"",
	   postCode :"",
	   postName :"",
	   pkParent :"",
	   parentName :"",
	   innercode :"",
	   pkOrg :"",
	   orgName:"",
	   enable :"",
	   pkDept :"",
	   deptName:"",
	   pkPostseries :"",
	   postseriesName :"",
	   builddate :{type:'datetime'}
	 }

	})


export default Model.create('basedoc.bdJob')