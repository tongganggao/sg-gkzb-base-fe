import { Collection } from 'common'
import 'model/bdPerson' 

Collection.define('basedoc.bdPersonList', {
  model: 'basedoc.bdPerson',
  proxy: {
  	get: "/sg-basedoc-basedata/psndoc/queryPage"
  }
})

export default Collection.create('basedoc.bdPersonList')
