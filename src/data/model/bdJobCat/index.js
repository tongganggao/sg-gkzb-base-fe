import {Model} from 'common'
Model.define('basedoc.bdJobCat', {
  proxy: {},
//   CREATE TABLE `sg_bd_post_classify` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `quarterscls_code` varchar(64) DEFAULT NULL COMMENT '岗位分类编码',
//   `quarterscls_name` varchar(64) DEFAULT NULL COMMENT '岗位分类名称',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='岗位分类';
  meta: {
    id: '',
    quartersclsCode: '',
    quartersclsName: ''
  }
})


export default Model.create('basedoc.bdJobCat')