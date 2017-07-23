// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import JobCatList from 'collection/bdJobCat'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  // let collection = Collection.create('basedoc.bdJobCatList');
  let params = {pageSize:10};
  JobCatList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridExpert',
      'data': JobCatList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'quartersclsCode',
        'dataType': 'String',
        'title': '岗位分类编码',
        'width': '50%'
      }, {
        'field': 'quartersclsName',
        'dataType': 'String',
        'title': '岗位分类名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#jobCatRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = JobCatList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.quartersclsCode.value,
      name: selectData.quartersclsName.value
    }
  })
  JobCatList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
