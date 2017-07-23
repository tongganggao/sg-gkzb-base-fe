// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
import department from 'collection/department'
/* eslint-disable no-unused-vars */
import {Post} from 'common'
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

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let trees = Collection.create('collection.department')
  let enterpriseId = refer.options.enterpriseId || window.global.user.enterpriseId
  trees.load({enterpriseId: enterpriseId})
  let selectItem = {}
  let vm = {
    treemodel: trees.datatable,
    treeOption: {
      callback: {
        beforeClick: async function (id, obj) {
          if (!obj.flag) {
            var {result} = await Post('/cpu-basedocrefer/basedocrefer/orgdept/getorgbyparentid', {
              enterpriseId: enterpriseId,
              parentId: obj.id
            })
            trees.datatable.addSimpleData(testdata)
            obj.flag = true
          }
          selectItem = obj
        }
      }
    }
  }
  let app = u.createApp()
  app.init(vm, $('#orgrefer')[0])
  refer.registerSubmitFunc(function () {
    return selectItem
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
