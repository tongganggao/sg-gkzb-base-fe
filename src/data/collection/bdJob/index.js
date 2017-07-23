import { Collection } from 'common'
import 'model/bdJob' 

Collection.define('basedoc.bdJobList', {
  model: 'basedoc.bdJob',
  proxy: {
  	get: "/sg-basedoc-basedata/post/queryPage"
  }
})

export default Collection.create('basedoc.bdJobList')
