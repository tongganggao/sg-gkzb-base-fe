import {Model} from 'common'
Model.define('basedoc.bdLinkman', {
  proxy: {},
  meta: {
    id: '',
    cell: '',//手机
    phone: '',//电话
    orgId: '',//所属组织
    orgCode: '',
    orgName: '',
    isdefault: '',//是否默认
    sex: '',//性别
    vjob: '',//职务
    name: '',//联系人名字
    code: '',//编码
    supplerId: ''//供应商主键
  }
})


export default Model.create('basedoc.bdLinkman')