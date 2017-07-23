// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdPerson'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let collection = Collection.create('basedoc.bdPersonList');
  let params = {pageSize:10};
  collection.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridPerson',
      'data': collection,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'psnCode',
        'dataType': 'String',
        'title': '人员编码',
        'width': '50%'
      }, {
        'field': 'psnName',
        'dataType': 'String',
        'title': '人员名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#personRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = collection.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.psnCode.value,
      name: selectData.psnName.value,
      mobile: selectData.mobile.value
    }
  })

  
  collection.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
