// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
import bdBusinessUnitList from 'collection/bdBusinessUnit'
import  'collection/bdSupplierCat'

/* eslint-disable no-unused-vars */
import {Post,Get} from 'common'
async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let trees = Collection.create('basedoc.bdSupplierCatList')
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
  app.init(vm, $('#supplierCatRefer')[0])
  refer.registerSubmitFunc(function () {
  	 let data = {
  	 	 id:selectItem.id,
  	 	 name:selectItem.name,
  	 	 code:selectItem.code
  	 	}
    return data
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
