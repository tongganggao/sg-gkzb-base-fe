import { Collection ,context} from 'common'
import 'model/bdMaterialMeasureUnit' 

Collection.define('basedoc.bdMaterialMeasureUnit', {
  model: 'basedoc.bdMaterialMeasureUnit',
  proxy: {
  	get: context.sgBasedocMaterial+"/material/query/pageMeasureUnit",
  	deleteMeasureUnit: context.sgBasedocMaterial+"/material/deleteMeasureUnit"
  }
})

export default Collection.create('basedoc.bdMaterialMeasureUnit')
