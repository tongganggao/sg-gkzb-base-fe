import {Model} from 'common'
Model.define('basedoc.bdExpertResume', {
  proxy: {},
  meta: {
   id : "",
   expertsRecordId:"",
   expertsRecordCode :"",
   expertsRecordName :"",
   startTime :{type : 'date'},
   endTime :"",
   workUnit:"",
   workPost:"",
  }
})


export default Model.create('basedoc.bdExpertResume')