import { Collection } from 'common'
import 'model/bdJobSeq' 

Collection.define('basedoc.bdJobSeqList', {
  model: 'basedoc.bdJobSeq',
  proxy: {
  	get: "/sg-basedoc-basedata/postseries/queryPage"
  }
})

export default Collection.create('basedoc.bdJobSeqList')
