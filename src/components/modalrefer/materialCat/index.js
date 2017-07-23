// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
import 'collection/bdMaterialCat'

 
/* eslint-disable no-unused-vars */
import {Post,Get} from 'common'

async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let trees = Collection.create('basedoc.bdMaterialCatList')
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
  app.init(vm, $('#materialCatRefer')[0])
  refer.registerSubmitFunc(function () {
          debugger
  	 let data = {
  	 	 id:selectItem.id,
  	 	 code:selectItem.code,
  	 	 name:selectItem.name,
       //返回树形参照当前级别 0：一级 1: 二级 以此类推
       //物料分类不能超过三级，判断使用
       //add by ck 20170628
       level: selectItem.level
  	 	}
    return data
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
