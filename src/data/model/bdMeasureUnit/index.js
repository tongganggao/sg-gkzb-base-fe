import {Model} from 'common'
Model.define('basedoc.bdMeasureUnit', {
  proxy: {},
  meta: {
    id: '',
    code: {type: 'string', required: true, nullMsg: '请输入计量单位编码'},
    name: {type: 'string', required: true, nullMsg: '请输入计量单位名称'},
    ename: '',
    oppdimen: {type: 'string', required: true, nullMsg: '请选择所属量纲'},
    basecodeflag: {type: 'string', required: true, nullMsg: '请选择是否基本单位'},
    scalefactor: {type: 'string', required: true, nullMsg: '请输入换算系数'},
    bitnumber: {type: 'string', required: true, nullMsg: '请输入小数位数'},
    creator: '',
    createTime: {type: 'date'},
    modifier: '',
    modifiedTime: {type: 'date'}
  }
})


export default Model.create('basedoc.bdMeasureUnit')