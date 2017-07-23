import { Collection } from 'common'
import 'model/bdRegion' 

Collection.define('basedoc.bdRegionList', {
  model: 'basedoc.bdRegion',
  proxy: {
  	get: "/sg-basedoc-basedata/area/queryPage"
  }
})

export default Collection.create('basedoc.bdRegionList')
