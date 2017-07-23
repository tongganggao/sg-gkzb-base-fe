// latest: zhangmyh 2017-4-6 7:56 PM
import { cloneDeep, findIndex } from 'lodash'
/* global $ ko u */

let vm
function init (refer) {
  let optionlist = refer.options.list
  let list
  let textField = refer.options.text || 'text'
  let valueField = refer.options.value || 'value'
  if (optionlist) {
    list = optionlist.map(function (o, i) {
      let value = o[valueField]
      if (!value && value !== '') {
        valueField = 'id'
        value = o[valueField]
        if (!value && value !== '') {
          valueField = ''
          value = i
        }
      }

      let text = o[textField]
      if (!text && text !== '') {
        textField = 'name'
        text = o[textField]
        if (!text && text !== '') {
          textField = valueField
          text = value
        }
      }

      let checked = false
      if (o.checked) {
        checked = true
      }
      return { value, text, checked }
    })
  } else {
    optionlist = list = []
  }

  let editable = (refer.options.editable === 'editonly')
  vm = {
    editable: ko.observable(editable),
    list: ko.observableArray(list),
    select: function (v) {
      if (valueField) {
        let list = cloneDeep(vm.list())
        let idx = findIndex(list, [valueField, v])
        if (idx > -1) {
          list[idx].checked = !list[idx].checked
          vm.list(list)
        }
      }
    }
  }

  u.createApp().init(vm, $('#multi_select')[0])
  refer.registerSubmitFunc(function () {
    let rs = []
    vm.list().forEach(function (o, i) {
      if (o.checked) {
        let idx = findIndex(optionlist, [valueField, o.value])
        if (idx > -1) {
          rs.push(optionlist[idx])
        }
      }
    })
    return rs
  })
}

let template = require('./index.html')

export default function (option) {
  u.refer(Object.assign({
    isPOPMode: true,
    module: {
      init,
      template
    },
    contentId: 'multirefer',
    width: '800px',
    title: '多项选择',
    onOk: function () {},
    onCancel: function () {}
  }, option))

  // 先不添加可编辑状态
  option.editable = false
  if (option.editable) {
    let editButton = $('<button class="u-msg-edit u-button">编辑<span class="u-button-container"><span class="u-ripple"></span></span></button>')
    editButton.click(function () {
      if (vm.editable()) {
        vm.editable(false)
        $(this).text('编辑')
      } else {
        vm.editable(true)
        $(this).text('还原')
      }
    })

    $('.u-msg-dialog .u-msg-cancel').after(editButton)
  }
}
