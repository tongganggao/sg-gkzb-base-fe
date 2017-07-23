// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdPersonCat'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let personCatList = Collection.create('basedoc.bdPersonCatList');
  let params = {pageSize:10};
  personCatList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridPersonCat',
      'data': personCatList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'psnclCode',
        'dataType': 'String',
        'title': '人员分类编码',
        'width': '50%'
      }, {
        'field': 'psnclName',
        'dataType': 'String',
        'title': '人员分类名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#personCatRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = personCatList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.psnclCode.value,
      name: selectData.psnclName.value
    }
  })

  // id: '',
  //   psnclCode: '',
  //   psnclName: '',
  personCatList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
