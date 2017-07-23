// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import  'collection/bdEducation'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let eduList = Collection.create('basedoc.bdEducationList');
  let params = {pageSize:10};
  eduList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridEdu',
      'data': eduList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'eductionCode',
        'dataType': 'String',
        'title': '学历编码',
        'width': '50%'
      }, {
        'field': 'educationName',
        'dataType': 'String',
        'title': '学历名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#eduRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = eduList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.eductionCode.value,
      name: selectData.educationName.value
    }
  })
  eduList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
