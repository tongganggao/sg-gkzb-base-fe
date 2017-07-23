import { Collection } from 'common'
import 'model/bdSupplierDoc' 

Collection.define('basedoc.bdSupplierDocList', {
  model: 'basedoc.bdSupplierDoc',
  proxy: {
  	get: "/sg-basedoc-supplier/supplier/query/page"
  }
})

export default Collection.create('basedoc.bdSupplierDocList')
