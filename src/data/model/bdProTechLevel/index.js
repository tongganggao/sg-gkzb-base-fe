import {Model} from 'common'
Model.define('basedoc.bdProTechLevel', {
  proxy: {},
//   CREATE TABLE `sg_bd_professional_level` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `professional_level_code` varchar(50) DEFAULT NULL COMMENT '专业技术资格等级编码',
//   `professional_level_name` varchar(100) DEFAULT NULL COMMENT '专业技术资格等级名称',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\n            0:保留\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='专业技术资格等级';
  meta: {
    id: '',
    professionalLevelCode: '',
    professionalLevelName: ''
  }
})


export default Model.create('basedoc.bdProTechLevel')