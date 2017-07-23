import { Collection } from 'common'
import 'model/bdRole' 

Collection.define('basedoc.bdRoleList', {
  model: 'basedoc.bdRole',
  proxy: {
  	get: "/sg-basedoc-orgrights/role/queryPage"
  }
})

export default Collection.create('basedoc.bdRoleList')
