/* global $ u */
import Collection from 'common/vo/collection'
import expertCatList from 'collection/bdExpertCat'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let expertCatList = Collection.create('basedoc.bdExpertCatList');
  let params = {pageSize:10};
  expertCatList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridExpertCat',
      'data': expertCatList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'expertsCategoryCode',
        'dataType': 'String',
        'title': '专家类别编码',
        'width': '50%'
      }, {
        'field': 'expertsCategoryName',
        'dataType': 'String',
        'title': '专家类别名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#expertCatRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = expertCatList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.expertsCategoryCode.value,
      name: selectData.expertsCategoryName.value
    }
  })
  expertCatList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
