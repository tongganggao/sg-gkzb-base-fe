import {Model} from 'common'
Model.define('basedoc.bdMaterialTax', {
  proxy: {},
  meta: {
		id: '',
		mattaxescode: {type: 'string', required: true, nullMsg: '请输入物料税类编码'},
		mattaxesname: {type: 'string', required: true, nullMsg: '请输入物料税类名称'},
		modifier: '',
		sortItemMap: '',
		enterpriseName: '',
		sysVersion: '',
		remarks: '',
	 	creator:'',
		ts: '',
		createTime:  {type: 'datetime'},
		taxrate: {type: 'string', required: true, nullMsg: '请输入税率'},
		modifiedTime:  {type: 'datetime'},
		enterpriseId: '',
		dr: ''
  }
})


export default Model.create('basedoc.bdMaterialTax')