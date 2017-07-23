// 部门人员参照
/* global $ u */
import { Collection } from 'common'
/* eslint-disable no-unused-vars */
import trees from 'collection/bdProManage'
 
import {Post,Get} from 'common'
async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  trees.datatable.removeAllRows();
	// let trees = Collection.create('basedoc.bdProManageList')
  // let enterpriseId = refer.options.enterpriseId || window.global.user.enterpriseId
  // let url = trees.proxy.get;
  let params = {pageSize:100,pageIndex:0}
  // let response = await Get(url,params)
  // trees.load({}, { localData: { data: { result: response.data.result} } });
  trees.load(params)
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
  app.init(vm, $('#proManageRefer')[0])
  refer.registerSubmitFunc(function () {
  	 let data = {
  	 	 id:selectItem.id,
  	 	 code:selectItem.majorCode,
  	 	 name:selectItem.majorName,
       innercode:selectItem.innercode,
       level:selectItem.level,
  	 	}
    return data
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
