import { Collection } from 'common'
import 'model/bdEducation' 

Collection.define('basedoc.bdEducationList', {
  model: 'basedoc.bdEducation',
  proxy:{
		get: '/sg-basedoc-basedata/education/queryPage',
		loadmethod: 'get'
	}
})

export default Collection.create('basedoc.bdEducationList')
