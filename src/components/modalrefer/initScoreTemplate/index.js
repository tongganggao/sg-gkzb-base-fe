// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/initScoreTemplate'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let initScoreTemplateList = Collection.create('basedoc.initScoreTemplateList');
  debugger
  let params = {pageIndex:0, pageSize:10};
  initScoreTemplateList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'initScoreTemplateList',
      'data': initScoreTemplateList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'templateno',
        'dataType': 'String',
        'title': '模板编码',
        'width': '33%'
      }, {
        'field': 'templatename',
        'dataType': 'String',
        'title': '模板名称',
        'width': '33%'
      }, {
        'field': 'templatetype',
        'dataType': 'String',
        'title': '模板分类',
        'width': '33%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#initScoreTemplateRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = initScoreTemplateList.datatable.getCurrentRow().data;
    return {
      id: selectData.inittemplatepk.value,
      code: selectData.templateno.value,
      name: selectData.templatename.value
    }
  })
  initScoreTemplateList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
