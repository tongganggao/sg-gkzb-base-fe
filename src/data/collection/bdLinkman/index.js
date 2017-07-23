import { Collection } from 'common'
import 'model/bdLinkman' 

Collection.define('basedoc.bdLinkman', {
  model: 'basedoc.bdLinkman',
  proxy: {
  	get: "/sg-basedoc-supplier/linkman/query/page"
  }
})

export default Collection.create('basedoc.bdLinkman')
