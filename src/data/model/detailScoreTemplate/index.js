import {Model} from 'common'
Model.define('basedoc.detailScoreTemplate', {
  proxy: {},
  meta: {
    detailtempmanagpk: '',
    templatecode: '',
    templatename: '',
    templateclass: '',
    templatetype: ''
  }
})


export default Model.create('basedoc.detailScoreTemplate')
