import {Model} from 'common'
Model.define('basedoc.divideBidTemplate', {
  proxy: {},
  meta: {
    dividetemplatepk: '',
    templatecode: '',
    templatename: '',
    dividebidclass: ''
  }
})


export default Model.create('basedoc.divideBidTemplate')
