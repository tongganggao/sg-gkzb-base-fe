import { Collection } from 'common'
import 'model/bdSupplierCat' 

Collection.define('basedoc.bdSupplierCatList', {
  model: 'basedoc.bdSupplierCat',
  proxy: {
  	get: "/sg-basedoc-supplier/supplierclass/query/page"
  }
})

export default Collection.create('basedoc.bdSupplierCatList')
