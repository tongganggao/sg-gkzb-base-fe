import { Collection } from 'common'
import 'model/bdpositionInfo' 

Collection.define('basedoc.bdpositionInfoList', {
  model: 'basedoc.bdpositionInfo',
  proxy: {
  	get: ""
  }
})

export default Collection.create('basedoc.bdpositionInfoList')
