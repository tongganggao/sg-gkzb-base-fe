// 部门人员参照
/* global $ u */
import Collection from 'common/vo/collection'
/* eslint-disable no-unused-vars */
import 'collection/bdMaterialCat'
import 'collection/bdMaterial'
/* eslint-disable no-unused-vars */
import {Post} from 'common'

async function init (refer) {
  // 树形控件加载有误,所以需要每次都重新加载
  let collection = Collection.create('basedoc.bdMaterialList')
  let tree = Collection.create('basedoc.bdMaterialCatList')
 	initTenRow(collection);
  //树形
  let params = {pageSize:100}
  let levelOne,levelTwo,levelThree = null;
  await tree.load(params);
  let selectedCat = {}
  let vm = {
    treemodel: tree.datatable,
    treeOption: {
      callback: {

        beforeClick: async function (id, obj) {
        	//分级加载 ？
          // if (!obj.flag) {
          //   var {result} = await Post('/cpu-basedocrefer/basedocrefer/orgdept/getorgbyparentid', {
          //     enterpriseId: enterpriseId,
          //     parentId: obj.id
          //   })
          //   tree.datatable.addSimpleData(result)
          //   obj.flag = true
          // }

          switch(obj.level){
          	case 2 :
          	debugger
          		levelThree = {
          			code:obj.code,
          			name:obj.name,
          			id:obj.id
          		};
          		let data = vm.treemodel.getSimpleData();
          		for(let item of data){
          			if(item.id == obj.pid){
          				levelTwo={
          					code:item.code,
          					name:item.name,
          					id:item.id
          				}
          				for(let dt of data){
          					if(item.pid == dt.id){
          						levelOne={
          							code:dt.code,
          							name:dt.name,
          							id:dt.id
          						}

          						break;
          					}
          				}

          				break;
          			}
          		}

          		 
          		debugger
          		selectedCat = obj
          		collection.datatable.removeAllRows()
          		collection.load({
          		  pageIndex: 0,
          		  pageSize: 10,
          		  marbasclassId:selectedCat.id
          		})

          	break; 
          }
         
        }
      }
    },
    config: {
      'id': 'grid',
      'data': collection,
      'type': 'grid',
      'multiSelect': false,
      'editable': false,
      pagination: true,
      fields: [{
        'field': 'code',
        'dataType': 'String',
        'title': '物料编码',
        'width': '50%'
      }, {
        'field': 'name',
        'dataType': 'String',
        'title': '物料名称',
        'width': '50%'
      }]
    }
  }
  let app = u.createApp()
  app.init(vm, $('#materialsRefer')[0])
  refer.registerSubmitFunc(() => {

    let selectData = collection.datatable.getCurrentRow().getSimpleData()
    // let material = selectData.
    return {
      material:selectData,
      materialcat:[levelOne,levelTwo,levelThree]
    }
  })



  collection.datatable.on('select', function (obj) {
    refer.submit()
  })
}

const initTenRow = (collection)=>{
	 // 初始化十行空数据
	for(let i=0;i<10;i++){
	  collection.datatable.createEmptyRow()
	}
	collection.datatable.setRowUnSelect(0)
}

let template = require('./index.html')
export default {
  init,
  template
}
