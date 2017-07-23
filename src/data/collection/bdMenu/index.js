import { Collection } from 'common'
import 'model/bdMenu' 

Collection.define('basedoc.bdMenuList', {
  model: 'basedoc.bdMenu',
  proxy: {
  	get: "/sg-basedoc-orgrights/menu/queryPage"
  }
})

export default Collection.create('basedoc.bdMenuList')
