import {Model} from 'common'
Model.define('basedoc.bdpositionInfo', {
  proxy: {},
   //  id                   bigint not null comment '主键',
   // psn_id               bigint comment '人员主键',
   // psn_code             varchar(50) comment '人员编码',
   // psn_name             varchar(100) comment '人员名称',
   // org_name             varchar(100) comment '任职业务单元名称',
   // pk_org               bigint comment '任职业务单元',
   // psncat_id            bigint comment '人员类别主键',
   // psncat_name          varchar(100) comment '人员类别名称',
   // psncat_code          varchar(50) comment '人员类别编码',
   // dept_name            varchar(100) comment '部门名称',
   // dept_id              bigint comment '部门主键',
   // dept_code            varchar(50) comment '部门编码',
   // main_flag            bigint comment '1-是
   //          2-不是',
   // startdata            datetime comment '到职日期',
   // postseries_id        bigint comment '岗位序列主键',
   // postseries_name      varchar(100) comment '岗位序列名称',
   // job_id               bigint comment '岗位主键',
   // job_name             varchar(100) comment '岗位名称',
   // enterprise_id        bigint comment '租户主键',
   // enterprise_name      varchar(200) comment '租户名',
   // ts                   datetime comment '时间戳',
   // dr                   int default 0 comment '删除标志位
   //          0:保留
   //          1:已删除',
   // creator              varchar(64) comment '创建者',
   // create_time          datetime comment '创建时间',
   // modifier             varchar(64) comment '修改者',
   // modified_time        datetime comment '修改时间',
  meta: {
    id: '',
    psnId: '',
    psnCode: '',
    psnName: '',
    orgName: '',
    pkOrg: '',
    psncatId: '',
    psncatName: '',
    psncatCode: '',
    deptName: '',
    deptId: '',
    deptCode: '',
    mainFlag: '',
    startdata: '',
    postseriesId: '',
    postseriesName: '',
    jobId: '',
    jobName:'',
    enterpriseId: '',
    enterpriseName: '',
    ts: '',
    dr: '',
    creator:'',
    createTime: '',
    modifier: '',
    modifiedTime: ''
  }
})


export default Model.create('basedoc.bdpositionInfo')