import {Model} from 'common'
Model.define('basedoc.bdPersonCat', {
  proxy: {},
//   CREATE TABLE `sg_bd_psncl` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `psncl_code` varchar(50) DEFAULT NULL COMMENT '人员分类编码',
//   `psncl_name` varchar(100) DEFAULT NULL COMMENT '人员分类名称',
//   `pid` bigint(20) DEFAULT NULL COMMENT '上级人员分类',
//   `innercode` varchar(200) DEFAULT NULL COMMENT '内部码',
//   `pk_org` bigint(20) DEFAULT NULL COMMENT '所属组织',
//   `enable` int(11) DEFAULT NULL COMMENT '启用状态 1=未启用，2=已启用，3=已停用， ',
//   `memo` varchar(100) DEFAULT NULL COMMENT '备注',
//   `enterprise_id` bigint(20) DEFAULT NULL COMMENT '租户主键',
//   `enterprise_name` varchar(200) DEFAULT NULL COMMENT '租户名',
//   `ts` datetime DEFAULT NULL COMMENT '时间戳',
//   `dr` int(11) DEFAULT '0' COMMENT '删除标志位\r\n            0:保留\r\n            1:已删除',
//   `creator` varchar(64) DEFAULT NULL COMMENT '创建者',
//   `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//   `modifier` varchar(64) DEFAULT NULL COMMENT '修改者',
//   `modified_time` datetime DEFAULT NULL COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='人员分类';
  meta: {
    id: '',
    psnclCode: '',
    psnclName: '',
    pid: '',
    pname: '',
    innercode: '',
    pkOrg: '',
    orgname: '',
    orgcode: '',
    enable: '',
    memo: '',
    name:''
    
  }
})


export default Model.create('basedoc.bdPersonCat')