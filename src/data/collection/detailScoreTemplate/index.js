import { Collection } from 'common'
import 'model/detailScoreTemplate'

Collection.define('basedoc.detailScoreTemplateList', {
  model: 'basedoc.detailScoreTemplate',
  proxy: {
    get: "/sg-basedoc-basedata/detailetemplatemanage/qryinfo",
  	loadmethod: 'get'
  }
})

export default Collection.create('basedoc.detailScoreTemplateList')
