import { Collection } from 'common'
import 'model/bdProTechSeries' 

Collection.define('basedoc.bdProTechSeriesList', {
  model: 'basedoc.bdProTechSeries',
  proxy: {
  	get: "/sg-basedoc-basedata/professionalSeries/query/page"
  }
})

export default Collection.create('basedoc.bdProTechSeriesList')
