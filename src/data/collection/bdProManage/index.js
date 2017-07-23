import { Collection } from 'common'
import 'model/bdProManage' 

Collection.define('basedoc.bdProManageList', {
  model: 'basedoc.bdProManage',
  proxy: {
  	get: "/sg-basedoc-basedata/major/query/page"
  }
})

export default Collection.create('basedoc.bdProManageList')
