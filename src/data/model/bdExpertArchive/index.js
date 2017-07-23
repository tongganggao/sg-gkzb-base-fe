import {Model} from 'common'
Model.define('basedoc.bdExpertArchive', {
  proxy: {},
  meta: {
   id : "",
   expertsRecordId:"",
   expertsRecordCode :"",
   expertsRecordName :"",
   archiveLevel :"",
   archiveRole :"",
   archiveContent:"",
   completeTime:{type : 'date'},
  }
})


export default Model.create('basedoc.bdExpertArchive')