// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdUser'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let userList = Collection.create('basedoc.bdUserList');
  let params = {pageSize:10};
  userList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridUser',
      'data': userList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'userCode',
        'dataType': 'String',
        'title': '用户编码',
        'width': '50%'
      }, {
        'field': 'userName',
        'dataType': 'String',
        'title': '用户名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#userRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = userList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.userCode.value,
      name: selectData.userName.value
    }
  })
  userList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
