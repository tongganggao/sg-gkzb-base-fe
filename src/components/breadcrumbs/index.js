// edit: zhangmyh 2017-3-13 3:18 PM
import { map } from 'lodash'
import urllist from './urllist'

function getURLItem (items) {
  return items.map(function (item, i) {
    let title, url
    if (typeof item == 'string') {
      let urlobj = urllist[item]
      title = urlobj.title
      url = `../${urlobj.url}/index.html`
    } else if (typeof item == 'object') {
      let urlobj = urllist[item.id]
      title = urlobj.title
      url = `../${urlobj.url}/index.html`
      if (item.params) {
        let l = []
        map(item.params, function (v, k) {
          l.push(k + '=' + v)
        })
        if (l.length) {
          let p = l.join('&')
          url += '?' + p
        }
      }
    }
    return {
      text: title,
      url: (i) ? url : '',
      level: i
    }
  })
}

function breadcrumb (params) {
  this.titleList = getURLItem(params.path).reverse()
  // /yuncai/workbench#/pages/home/home
  this.home = '#/pages/home/home'
  this.homeText = '首页'
}

export default breadcrumb
