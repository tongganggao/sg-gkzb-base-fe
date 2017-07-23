// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/detailScoreTemplate'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
   let detailScoreTemplateList = Collection.create('basedoc.detailScoreTemplateList');
  debugger
  let params = {pageIndex:0, pageSize:10};
  detailScoreTemplateList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'detailScoreTemplateList',
      'data': detailScoreTemplateList,
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
        'title': '模板分类',
        'width': '33%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#detailScoreTemplateRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = detailScoreTemplateList.datatable.getCurrentRow().data;
    return {
      id: selectData.detailtempmanagpk.value,
      code: selectData.templatecode.value,
      name: selectData.templatename.value
    }
  })
  detailScoreTemplateList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
