// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdExpertDoc'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let expertList = Collection.create('basedoc.bdExpertDocList');
  let params = {pageSize:10};
  expertList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridExpert',
      'data': expertList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'expertsCode',
        'dataType': 'String',
        'title': '专家编号',
        'width': '50%'
      }, {
        'field': 'expertsName',
        'dataType': 'String',
        'title': '专家名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#expertRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = expertList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.expertsCode.value,
      name: selectData.expertsName.value,
      major:selectData.majorId.value,
      workUnit:selectData.workUnit.value
    }
  })
  expertList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
