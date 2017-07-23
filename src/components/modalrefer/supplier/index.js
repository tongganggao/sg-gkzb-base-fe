// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import supplierList from 'collection/bdSupplierDoc'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  // let collection = Collection.create('basedoc.bdsupplierList');
  let params = {pageSize:10,id:null};
  supplierList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridPro',
      'data': supplierList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'code',
        'dataType': 'String',
        'title': '供应商编码',
        'width': '50%'
      }, {
        'field': 'name',
        'dataType': 'String',
        'title': '供应商名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#supplierRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = supplierList.datatable.getCurrentRow().data
    return {
      id: selectData.id.value,
      code: selectData.code.value,
      name: selectData.name.value
    }
  })
  supplierList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
