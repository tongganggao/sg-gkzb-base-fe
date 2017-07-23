import { Collection } from 'common'
import 'model/bdJobSeqCopy' 

Collection.define('basedoc.bdJobSeqTree', {
  model: 'basedoc.bdJobSeqCopy',
  proxy: {
  	get: "/sg-basedoc-basedata/postseries/queryPage"
  }
})

export default Collection.create('basedoc.bdJobSeqTree')
