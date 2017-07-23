import {Model} from 'common'
Model.define('basedoc.bdMaterialCat', {
  proxy: {},
  meta: {
    id: '',
    code: {type: 'string', required: true, nullMsg: '请输入物料分类编码'},
    name: {type: 'string', required: true, nullMsg: '请输入物料分类名称'},
    orgId: {type: 'string', required: true, nullMsg: '请选择所属组织'},
    orgCode: '',
    orgName: '',
    pid: '',
    parentCode: '',
    parentName: '',
    enablestate: ''
  }
})


export default Model.create('basedoc.bdMaterialCat')