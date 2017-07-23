// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
import bdBusinessUnitList from 'collection/bdBusinessUnit'

// import 'model/bdBusinessUnit' 

// Collection.define('basedoc.bdBusinessUnitList', {
//   model: 'basedoc.bdBusinessUnit',
//   proxy: {
//   	get: "/sg-basedoc-orgrights/org/queryPage"
//   }
// })
/* eslint-disable no-unused-vars */
import {Post,Get} from 'common'
let testdata = [{
    id: 1,
    status:'完成'
},{
    id: 2,
    pid:1
},{
    id: 3,
    pid:1
},{
    id: 4,
    status:'完成',

},{
    id: 5,
    pid:4
},{
    id: 6,
    pid:4
}]

async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let trees = Collection.create('basedoc.bdBusinessUnitList')
  // let enterpriseId = refer.options.enterpriseId || window.global.user.enterpriseId
  // let url = trees.proxy.get;
  let url = "/sg-basedoc-orgrights/org/queryPageAll";
  // let params = {};
  let response = await Post(url);
  // let params = {pageSize:100,pageIndex:0}
  // let response = await Get(url,params)
  // trees.load({}, { localData: { data: { result: response.data.result} } });
  trees.setData(response.data)
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
  app.init(vm, $('#orgsrefer')[0])
  refer.registerSubmitFunc(function () {
  	 let data = {
  	 	 id:selectItem.id,
  	 	 orgCode:selectItem.orgCode,
  	 	 orgName:selectItem.orgName
  	 	}
    return data
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
