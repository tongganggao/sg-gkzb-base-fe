import { Collection } from 'common'
import 'model/bdDepartmentDoc' 

Collection.define('basedoc.bdDepartmentDocList', {
  model: 'basedoc.bdDepartmentDoc',
  proxy: {
  	get: "/sg-basedoc-orgrights/dept/queryPageAll"
  }
})

export default Collection.create('basedoc.bdDepartmentDocList')
