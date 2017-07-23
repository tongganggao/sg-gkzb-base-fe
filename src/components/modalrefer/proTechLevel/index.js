// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdProTechLevel'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let proTechLevelList = Collection.create('basedoc.bdProTechLevelList');
  let params = {pageSize:10};
  proTechLevelList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridPro',
      'data': proTechLevelList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'professionalLevelCode',
        'dataType': 'String',
        'title': '专业技术等级编码',
        'width': '50%'
      }, {
        'field': 'professionalLevelName',
        'dataType': 'String',
        'title': '专业技术等级名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#proTechLevelRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = proTechLevelList.datatable.getCurrentRow().data
    // id: '',
    // professionalLevelCode: '',
    // professionalLevelName: ''
    return {
      id: selectData.id.value,
      code: selectData.professionalLevelCode.value,
      name: selectData.professionalLevelName.value
    }
  })
  proTechLevelList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
