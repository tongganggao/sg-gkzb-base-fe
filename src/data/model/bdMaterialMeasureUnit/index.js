import {Model} from 'common'
Model.define('basedoc.bdMaterialMeasureUnit', {
  proxy: {},
  meta: {
   id: '',//主键
   materialId: '',//物料主键
   name: {type: 'string', required: true, nullMsg: '请输入计量单位名称'},//计量单位名称
   measureId: {type: 'string', required: true, nullMsg: '请选择主单位/辅单位'},//计量单位主键
   measureCode: '',
   measureName: '',
   fixedConversion: '',//固定换算
   balance: '',//结存
   purchasedDefaultUnits: '',//采购默认单位
   numberOfManagement: '',//件数管理
   enterpriseId :'',
   enterpriseName :'',
   ts :'',
   dr :'',
   creator:'',
   createTime :'',
   modifier :'',
   modifiedTime:''
  }
})

export default Model.create('basedoc.bdMaterialMeasureUnit')