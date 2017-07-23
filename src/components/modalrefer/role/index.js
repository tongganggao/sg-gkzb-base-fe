// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdRole'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let roleList = Collection.create('basedoc.bdRoleList');
  let params = {pageSize:10};
  roleList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridRole',
      'data': roleList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'roleCode',
        'dataType': 'String',
        'title': '角色编码',
        'width': '50%'
      }, {
        'field': 'roleName',
        'dataType': 'String',
        'title': '角色名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#roleRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = roleList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.roleCode.value,
      name: selectData.roleName.value
    }
  })
  roleList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
