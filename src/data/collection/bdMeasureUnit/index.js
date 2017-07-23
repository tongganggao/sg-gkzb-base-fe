import { Collection,context } from 'common'
import 'model/bdMeasureUnit' 

Collection.define('basedoc.bdMeasureUnitList', {
  model: 'basedoc.bdMeasureUnit',
  proxy: {
  	get: context.sgBasedocMaterial+"/measdoc/query/page",
  	saveList: context.sgBasedocMaterial+"/measdoc/saveList",
  	updateList: context.sgBasedocMaterial+"/measdoc/updateList",
  	delList: context.sgBasedocMaterial+"/measdoc/delList"
  }
})

export default Collection.create('basedoc.bdMeasureUnitList')
