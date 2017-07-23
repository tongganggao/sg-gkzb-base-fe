// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdExpertLevel'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let expertLevelList = Collection.create('basedoc.bdExpertLevelList');
  let params = {pageSize:10};
  expertLevelList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridExpert',
      'data': expertLevelList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'expertsLevelCode',
        'dataType': 'String',
        'title': '专家等级编码',
        'width': '50%'
      }, {
        'field': 'expertsLevelName',
        'dataType': 'String',
        'title': '专家等级名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#expertLevelRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = expertLevelList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      expertsCode: selectData.expertsLevelCode.value,
      expertsName: selectData.expertsLevelName.value
    }
   
  })
  expertLevelList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
