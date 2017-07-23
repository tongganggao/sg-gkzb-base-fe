import {Model} from 'common'
Model.define('basedoc.bdExpertMajor', {
  proxy: {},
  meta: {
   id : "",
   expertsRecordId:"",
   expertsRecordCode :"",
   expertsRecordName :"",
   majorId :"",
   majorCode :"",
   majorName:"",
   fristMajorId:"",
   firstMajorCode :"",
   firstMajorName :"",
   secondMajorId :"",
   secondMajorCode :"",
   secondMajorName :"",
   thirdMajorId :"",
   thirdMajorCode:"",
   thirdMajorName:"",
   forthMajorId :"",
   forthMajorCode :"",
   forthMajorName :"",
   fifthMajorId:"",
   fifthMajorCode :"",
   fifthMajorName :"",
  }
})


export default Model.create('basedoc.bdExpertMajor')