import { Collection ,context} from 'common'
import 'model/bdMaterial' 

Collection.define('basedoc.bdMaterialList', {
  model: 'basedoc.bdMaterial',
  proxy: {
  	get: context.sgBasedocMaterial+"/material/query/page",  	
  	save: context.sgBasedocMaterial+"/material/save",
  	update: context.sgBasedocMaterial+"/material/update",
  	delete: context.sgBasedocMaterial+"/material/delete",
  	enableList: context.sgBasedocMaterial+"/material/enableList",
  	disableList: context.sgBasedocMaterial+"/material/disableList",
  }
})
// /sg-basedoc-material/material/query/page?marbasclassId=1
export default Collection.create('basedoc.bdMaterialList')
