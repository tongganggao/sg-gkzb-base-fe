import { Collection } from 'common'
import 'model/bdJobCat' 

Collection.define('basedoc.bdJobCatList', {
  model: 'basedoc.bdJobCat',
  proxy: {
  	get: "/sg-basedoc-basedata/postClassify/queryPage"
  }
})

export default Collection.create('basedoc.bdJobCatList')
