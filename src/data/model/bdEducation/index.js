import {Model} from 'common'
Model.define('basedoc.bdEducation', {
  proxy: {
  	save:'/sg-business-gkzb-prewinbid/prewinbid/save',
  },
  meta: {
    id:'',
    eductionCode:'',
    educationName:'',
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


export default Model.create('basedoc.bdEducation')