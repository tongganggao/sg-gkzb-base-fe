import { Collection } from 'common'
import 'model/bdDepartmentDoc/ref_org' 

Collection.define('bdDepartmentDoc.ref.bdBusinessUnitList', {
  model: 'bdDepartmentDoc.ref.bdBusinessUnit',
  proxy: {
  	get: "/sg-basedoc-orgrights/org/queryPage"
  }
})

export default Collection.create('bdDepartmentDoc.ref.bdBusinessUnitList')
