// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdJob'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let JobList = Collection.create('basedoc.bdJobList');
  let params = {pageSize:10};
  JobList.load(null,{url:'/sg-basedoc-basedata/post/queryAll'});
  let selectItem = {};
  /*let vm = {
    config: {
      'id': 'gridJob',
      'data': JobList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'postCode',
        'dataType': 'String',
        'title': '岗位编码',
        'width': '50%'
      }, {
        'field': 'postName',
        'dataType': 'String',
        'title': '岗位名称',
        'width': '50%'
      }]
    }
  }*/
  let vm = {
    treemodel: JobList.datatable,
    treeOption: {
      callback: {
        beforeClick: async function (id, obj) {
          selectItem = obj
        }
      }
    }
  }
  let app = u.createApp()
  app.init(vm, $('#jobRefer')[0])
  refer.registerSubmitFunc(() => {

    let selectData = JobList.datatable.getCurrentRow().data;
    return {
      id: selectData.id.value,
      code: selectData.postCode.value,
      name: selectData.postName.value
    }

  })
/*  JobList.datatable.on('select', function (obj) {
    refer.submit()
  })*/
}
let template = require('./index.html')
export default {
  init,
  template
}
