import { Collection } from 'common'
import 'model/priceTemplate'

Collection.define('basedoc.priceTemplateList', {
  model: 'basedoc.priceTemplate',
  proxy: {
    get: "/sg-basedoc-basedata/priceTemplateManage/qryinfo",
  	loadmethod: 'get'
  }
})

export default Collection.create('basedoc.priceTemplateList')
