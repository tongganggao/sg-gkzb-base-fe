// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
import 'collection/bdDepartmentDoc'
import {Post,Get} from 'common'


async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let trees = Collection.create('basedoc.bdDepartmentDocList');
  let orgId = refer.options.orgId;
  let params = {};
  let url = trees.proxy.get;
  params.pkOrg = orgId;
  let response = await Post(url,params);
  
  trees.setData(response.data);
  // let enterpriseId = refer.options.enterpriseId || window.global.user.enterpriseId
  
 
  // let response = await Get(url,params)
  // trees.load({}, { localData: { data: { result: response.data.result} } });
  // trees.load(params)
  let selectItem = {}
  let vm = {
    treemodel: trees.datatable,
    treeOption: {
      callback: {
        beforeClick: async function (id, obj) {
          selectItem = obj
        }
      }
    }
  }
  let app = u.createApp()
  app.init(vm, $('#deptRefer')[0])
  refer.registerSubmitFunc(function () {
  	 let data = {
  	 	 id:selectItem.id,
  	 	 deptCode:selectItem.deptCode,
  	 	 deptName:selectItem.deptName
  	 	}
    return data
  })

}
let template = require('./index.html')
export default {
  init,
  template
}
