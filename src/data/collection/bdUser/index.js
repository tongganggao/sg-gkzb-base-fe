import { Collection } from 'common'
import 'model/bdUser' 

Collection.define('basedoc.bdUserList', {
  model: 'basedoc.bdUser',
  proxy: {
  	get: "/sg-basedoc-orgrights/user/userlist",
  	loadmethod: 'post'
  }
 

})

export default Collection.create('basedoc.bdUserList')
