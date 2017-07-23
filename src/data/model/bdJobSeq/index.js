import {Model} from 'common'
Model.define('basedoc.bdJobSeq', {
  proxy: {},

//   CREATE TABLE `sg_bd_postseries` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `postseries_code` varchar(50) DEFAULT NULL COMMENT '岗位序列编码',
//   `postseries_name` varchar(100) DEFAULT NULL COMMENT '岗位序列名称',
//   `pk_parent` bigint(20) DEFAULT NULL COMMENT '上级序列',
//   `innercode` varchar(60) DEFAULT NULL COMMENT '内部码',
//   `pk_org` bigint(20) DEFAULT NULL COMMENT '所属组织',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态 1=未启用，2=已启用，3=已停用， ',
//   `postseries_desc` varchar(1024) DEFAULT NULL COMMENT '岗位序列概要/描述',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='岗位序列';
  meta: {
    id: '',//批次编码
    postseriesCode: '',
    postseriesName: '',
    pkParent: '',
    parentCode: '',
    parentName: '',
    innercode: '',
    pkOrg: '',
    orgName: '',
    enable: '',
    postseriesDesc: ''
  }
})


export default Model.create('basedoc.bdJobSeq')