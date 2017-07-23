import { Collection } from 'common'
import 'model/bdProTechName' 

Collection.define('basedoc.bdProTechNameList', {
  model: 'basedoc.bdProTechName',
  proxy: {
  	get: "/sg-basedoc-basedata/professionalMapping/query/page"
  }
})

export default Collection.create('basedoc.bdProTechNameList')
