import { Collection } from 'common'
import 'model/bdBusinessUnit' 

Collection.define('basedoc.bdBusinessUnitList', {
  model: 'basedoc.bdBusinessUnit',
  proxy: {
  	get: "/sg-basedoc-orgrights/org/queryPage"
  }
})

export default Collection.create('basedoc.bdBusinessUnitList')
