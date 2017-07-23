import {Model} from 'common'
Model.define('basedoc.bdUser', {
  proxy: {},
  meta: {
   id :'',
   orgId:'',
   orgName:'',
   deptId :'',
   deptName :'',
   userType   :'',      
   enterpriseId :'',
   enterpriseName :'',
   userGroup:'',
   userCode :'',
   userName :'',
   password :'',
   plainPassword :'',
   identityType :'',
   identity :'',
   identityName :'',
   passwordCode :'',
   enableDate :'',
   disableDate:'',
   enableStatus :'',
   locked :'',
   causer:'',
   remark :'',
   loginName :'',
   registerDate :'',
   authType :'',
   passwordLength :'',
   passwordType :''
  }
})


export default Model.create('basedoc.bdUser')