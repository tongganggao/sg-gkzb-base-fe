import {Model} from 'common'
Model.define('basedoc.bdRegion', {
  proxy: {},
//   CREATE TABLE `sg_bd_area` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
//   `area_code` varchar(50) DEFAULT NULL COMMENT '地区编码',
//   `area_name` varchar(100) DEFAULT NULL COMMENT '地区编码',
//   `pk_fatherarea` varchar(100) DEFAULT NULL COMMENT '上级地区',
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
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区';
  meta: {
    id: '',
    areaCode: '',
    areaName: '',
    pkFatherarea: '',
    fatherAreaName: '',
    fatherAreaCode: '',
    innercode: '',
    enterpriseId:'',
    enterpriseName:'',
    ts:'',
    dr:'',
    creator:'',
    createTime:'',
    modifier:'',
    modifiedTime:''
  }
})


export default Model.create('basedoc.bdRegion')