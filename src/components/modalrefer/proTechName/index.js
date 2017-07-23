// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdProTechName'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let proTechNameList = Collection.create('basedoc.bdProTechNameList');
  let params = {pageSize:10};
  proTechNameList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridProTechName',
      'data': proTechNameList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'professionalMappingCode',
        'dataType': 'String',
        'title': '专业技术资格编码',
        'width': '50%'
      }, {
        'field': 'professionalMappingName',
        'dataType': 'String',
        'title': '专业技术资格名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#proTechNameRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = proTechNameList.datatable.getCurrentRow().data
    // id: '',
    // professionalMappingCode: '',//批次编码
    // professionalMappingName: 
    return {
      id: selectData.id.value,
      code: selectData.professionalMappingCode.value,
      name: selectData.professionalMappingName.value
    }
  })
  proTechNameList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
