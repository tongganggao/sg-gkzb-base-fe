import { Collection ,context} from 'common'
import 'model/bdMaterialCat' 

Collection.define('basedoc.bdMaterialCatList', {
  model: 'basedoc.bdMaterialCat',
  proxy: {
  	get: context.sgBasedocMaterial+"/marbasclass/query/page",
  	saveList: context.sgBasedocMaterial+"/marbasclass/saveList",
  	updateList: context.sgBasedocMaterial+"/marbasclass/updateList",
  	delList: context.sgBasedocMaterial+"/marbasclass/delList",
  	enableList: context.sgBasedocMaterial+"/marbasclass/enableList",
  	disableList: context.sgBasedocMaterial+"/marbasclass/disableList",
  }
})

export default Collection.create('basedoc.bdMaterialCatList')
