import {Model} from 'common'
Model.define('basedoc.priceTemplate', {
  proxy: {},
  meta: {
    pricetemplatepk: '',
    templatecode: '',
    templatename: '',
    templateclass: ''
  }
})


export default Model.create('basedoc.priceTemplate')