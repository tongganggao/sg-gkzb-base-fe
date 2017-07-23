import { Collection } from 'common'
import 'model/bdPersonCat' 

Collection.define('basedoc.bdPersonCatList', {
  model: 'basedoc.bdPersonCat',
  proxy: {
  	get: "/sg-basedoc-basedata/psncl/queryPage"
  }
})

export default Collection.create('basedoc.bdPersonCatList')
