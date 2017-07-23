// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'collection/bdRegion'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let regionList = Collection.create('basedoc.bdRegionList');
  let params = {pageSize:10};
  regionList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridEdu',
      'data': regionList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'areaCode',
        'dataType': 'String',
        'title': '地区编码',
        'width': '50%'
      }, {
        'field': 'areaName',
        'dataType': 'String',
        'title': '地区名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#regionRefer')[0])
  refer.registerSubmitFunc(() => {
    let row = regionList.datatable.getCurrentRow();
    if(row == null){
      return {
      id: '',
      code: '',
      name: ''
      }
    }else{
      let selectData = row.data;
      return {
      id: selectData.id.value,
      code: selectData.areaCode.value,
      name: selectData.areaName.value
      }
    }
   
    
  })
  regionList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
