import { Collection } from 'common'
import 'model/bdExpertDoc' 

Collection.define('basedoc.bdExpertDocList', {
  model: 'basedoc.bdExpertDoc',
  proxy: {
  	get: "/sg-basedoc-basedata/expertsRecord/query/page"
  }
})

export default Collection.create('basedoc.bdExpertDocList')
