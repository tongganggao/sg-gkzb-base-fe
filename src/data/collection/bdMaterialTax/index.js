import { Collection,context } from 'common'
import 'model/bdMaterialTax' 

Collection.define('basedoc.bdMaterialTaxList', {
  model: 'basedoc.bdMaterialTax',
  proxy: {
  	get: context.sgBasedocMaterial+"/mattaxes/query/page",
  	saveList: context.sgBasedocMaterial+"/mattaxes/saveList",
  	updateList: context.sgBasedocMaterial+"/mattaxes/updateList",
  	delList: context.sgBasedocMaterial+"/mattaxes/delList"
  }
})

export default Collection.create('basedoc.bdMaterialTaxList')
