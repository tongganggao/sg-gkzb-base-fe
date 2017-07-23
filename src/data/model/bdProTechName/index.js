import {Model} from 'common'
Model.define('basedoc.bdProTechName', {
  proxy: {},

  meta: {
  	id:'',
    professionalMappingCode: '',//批次编码
    professionalMappingName: '',//批次名称
    professionalSeriesId:'',
    professionalSeriesName:'',
    professionalLevelId:'',
    professionalLevelName:''
  }
})


export default Model.create('basedoc.bdProTechName')