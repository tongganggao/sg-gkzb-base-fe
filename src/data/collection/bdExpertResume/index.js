import { Collection } from 'common'
import 'model/bdExpertResume' 

Collection.define('basedoc.bdExpertResumeList', {
  model: 'basedoc.bdExpertResume',
  proxy: {
  }
})

export default Collection.create('basedoc.bdExpertResumeList')
