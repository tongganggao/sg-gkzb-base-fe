import { Collection } from 'common'
import 'model/bdExpertArchive' 

Collection.define('basedoc.bdExpertArchiveList', {
  model: 'basedoc.bdExpertArchive',
  proxy: {
  }
})

export default Collection.create('basedoc.bdExpertArchiveList')
