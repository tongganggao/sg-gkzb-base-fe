// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdMeasureUnit'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let measureUnitList = Collection.create('basedoc.bdMeasureUnitList');
  let params = {pageSize:10};
  measureUnitList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridUnit',
      'data': measureUnitList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'code',
        'dataType': 'String',
        'title': '计量单位编码',
        'width': '50%'
      }, {
        'field': 'name',
        'dataType': 'String',
        'title': '计量单位名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#measureUnitRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = measureUnitList.datatable.getCurrentRow().data
    return {
      id: selectData.id.value,
      code: selectData.code.value,
      name: selectData.name.value
    }
  })
  measureUnitList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
