import { Collection } from 'common'
import 'model/divideBidTemplate'

Collection.define('basedoc.divideBidTemplateList', {
  model: 'basedoc.divideBidTemplate',
  proxy: {
    get: "/sg-basedoc-basedata/dividetemplatemanage/qryinfo",
  	loadmethod: 'get'
  }
})

export default Collection.create('basedoc.divideBidTemplateList')
