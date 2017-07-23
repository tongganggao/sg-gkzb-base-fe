import { Collection } from 'common'
import 'model/bdProTechLevel' 

Collection.define('basedoc.bdProTechLevelList', {
  model: 'basedoc.bdProTechLevel',
  proxy: {
  	get: "/sg-basedoc-basedata/professionalLevel/query/page"
  }
})

export default Collection.create('basedoc.bdProTechLevelList')
