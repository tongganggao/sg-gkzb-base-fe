import { Collection } from 'common'
import 'model/bdExpertMajor' 

Collection.define('basedoc.bdExpertMajorList', {
  model: 'basedoc.bdExpertMajor',
  proxy: {
  }
})

export default Collection.create('basedoc.bdExpertMajorList')
