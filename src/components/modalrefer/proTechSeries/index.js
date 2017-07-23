// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import  'collection/bdProTechSeries'
import {Post} from 'common'

function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let proTechSeriesList = Collection.create('basedoc.bdProTechSeriesList');
  let params = {pageSize:10};
  proTechSeriesList.load(params);
  let selectedItem = {};
  let vm = {
    config: {
      'id': 'gridProTechSeries',
      'data': proTechSeriesList,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'professionalSeriesCode',
        'dataType': 'String',
        'title': '专业技术资格系列编码',
        'width': '50%'
      }, {
        'field': 'professionalSeriesName',
        'dataType': 'String',
        'title': '专业技术资格系列名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#proTechSeriesRefer')[0])
  refer.registerSubmitFunc(() => {
    let selectData = proTechSeriesList.datatable.getCurrentRow().data
    // id: '',
    // professionalMappingCode: '',//批次编码
    // professionalMappingName: 
    return {
      id: selectData.id.value,
      code: selectData.professionalSeriesCode.value,
      name: selectData.professionalSeriesName.value
    }
  })
  proTechSeriesList.datatable.on('select', function (obj) {
    refer.submit()
  })
}
let template = require('./index.html')
export default {
  init,
  template
}
