import { Collection } from 'common'
import 'model/bdExpertLevel' 

Collection.define('basedoc.bdExpertLevelList', {
  model: 'basedoc.bdExpertLevel',
  proxy: {
  	get: "/sg-basedoc-basedata/expertsLevel/query/page"
  }
})

export default Collection.create('basedoc.bdExpertLevelList')
