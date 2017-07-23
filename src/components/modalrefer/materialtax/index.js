// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdMaterialTax'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let materialTaxList = Collection.create('basedoc.bdMaterialTaxList');
  let params = {pageSize:10};
  materialTaxList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridmaterialtax',
      'data': materialTaxList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'mattaxescode',
        'dataType': 'String',
        'title': '税类编码',
        'width': '50%'
      }, {
        'field': 'mattaxesname',
        'dataType': 'String',
        'title': '税类名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#materialTaxRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = materialTaxList.datatable.getCurrentRow().data
    return {
      id: selectData.id.value,
      code: selectData.mattaxescode.value,
      name: selectData.mattaxesname.value
    }
  })
  materialTaxList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
