import { Collection } from 'common'
import 'model/initScoreTemplate'

Collection.define('basedoc.initScoreTemplateList', {
  model: 'basedoc.initScoreTemplate',
  proxy: {
    get: "/sg-basedoc-basedata/initcommenttemplatemanage/qryinfo",
  	loadmethod: 'get'
  }
})

export default Collection.create('basedoc.initScoreTemplateList')
