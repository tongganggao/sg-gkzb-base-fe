// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdMaterial'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  debugger
  
  let materialList = Collection.create('basedoc.bdMaterialList');
  let params = {pageSize:10};
  materialList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridMaterial',
      'data': materialList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'code',
        'dataType': 'String',
        'title': '物料编码',
        'width': '50%'
      }, {
        'field': 'name',
        'dataType': 'String',
        'title': '物料名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#materialRefer')[0])
  refer.registerSubmitFunc(() => {
  	debugger
    let dt = materialList.datatable
    let selectData = dt.getCurrentRow().getSimpleData();
    // return {
    //   id: selectData.id.value,
    //   code: selectData.code.value,
    //   name: selectData.name.value
    // }

    return selectData;
  })
  materialList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
