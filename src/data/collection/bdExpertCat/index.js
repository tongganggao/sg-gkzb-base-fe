import { Collection } from 'common'
import 'model/bdExpertCat' 

Collection.define('basedoc.bdExpertCatList', {
  model: 'basedoc.bdExpertCat',
  proxy: {
  	get: "/sg-basedoc-basedata/expertsCategory/query/page"
  }
})

export default Collection.create('basedoc.bdExpertCatList')
