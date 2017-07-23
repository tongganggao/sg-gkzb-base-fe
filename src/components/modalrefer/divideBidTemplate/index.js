// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/divideBidTemplate'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
   let divideBidTemplateList = Collection.create('basedoc.divideBidTemplateList');
  debugger
  let params = {pageIndex:0, pageSize:10};
  divideBidTemplateList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'divideBidTemplateList',
      'data': divideBidTemplateList,
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
        'field': 'dividebidclass',
        'dataType': 'String',
        'title': '模板分类',
        'width': '33%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#divideBidTemplateRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = divideBidTemplateList.datatable.getCurrentRow().data;
    return {
      id: selectData.dividetemplatepk.value,
      code: selectData.templatecode.value,
      name: selectData.templatename.value
    }
  })
  divideBidTemplateList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
