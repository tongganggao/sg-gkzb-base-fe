import {Model} from 'common'
Model.define('basedoc.bdMaterial', {
  proxy: {},
  meta: {
   id :'',
   code :{type: 'string', required: true, nullMsg: '请输入物料编码'},
   name :{type: 'string', required: true, nullMsg: '请输入物料名称'},
   marbasclassId : {type: 'string', required: true, nullMsg: '请选择物料分类'},
   marbasclassCode :'',
   marbasclassName:'',
   materialspec :'',
   measdocId : {type: 'string', required: true, nullMsg: '请选择计量单位'},
   measdocCode :'',
   measdocName :'',
   mattaxesId : {type: 'string', required: true, nullMsg: '请选择税类'},
   mattaxesCode :'',
   mattaxesName :'',
   orgId :{type: 'string', required: true, nullMsg: '请选择所属业务单元'},
   orgName:'',
   technicalParameters :'',
   newBidPrice :'',
   avgBidPrice:'', 
   referencePrice :'',
   version :'',
   enablestate :''
  }
})


export default Model.create('basedoc.bdMaterial')