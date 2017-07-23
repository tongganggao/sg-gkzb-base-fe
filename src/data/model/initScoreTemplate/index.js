import {Model} from 'common'
Model.define('basedoc.initScoreTemplate', {
  proxy: {},
  meta: {
    inittemplatepk: '',
    templatename: '',
    templateno: '',
    templatetype: ''
  }
})


export default Model.create('basedoc.initScoreTemplate')