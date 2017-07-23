import {Model} from 'common'
Model.define('basedoc.bdProTechSeries', {
  proxy: {},

  meta: {
    id: '',//批次编码
    professionalSeriesCode: '',//批次名称
    professionalSeriesName: '',//批次名称
  }
})


export default Model.create('basedoc.bdProTechSeries')