// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import  'collection/priceTemplate'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let priceTemplateList = Collection.create('basedoc.priceTemplateList');
  debugger
  let params = {pageIndex:0, pageSize:10};
  priceTemplateList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'priceTemplateList',
      'data': priceTemplateList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'templatecode',
        'dataType': 'String',
        'title': '模板编码',
        'width': '33%'
      }, {
        'field': 'templatename',
        'dataType': 'String',
        'title': '模板名称',
        'width': '33%'
      }, {
        'field': 'templateclass',
        'dataType': 'String',
        'title': '模板类别',
        'width': '33%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#priceTemplateRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = priceTemplateList.datatable.getCurrentRow().data;
    return {
      id: selectData.pricetemplatepk.value,
      code: selectData.templatecode.value,
      name: selectData.templatename.value
    }
  })
  priceTemplateList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
