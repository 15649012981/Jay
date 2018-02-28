const request = (url = '', type = '', data = {}, async = true) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase()
    let obj = new XMLHttpRequest()
    if (type === 'GET') { // 判断请求方式
      let dataStr // get请求键值对存储
      Object.keys(data).forEach(key => {
        dataStr += `${key}=${data[key]}&`
      })
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      obj.open(type, url + '?' + dataStr, async)
      obj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      obj.send()
    } else if (type === 'POST') {
      obj.open(type, url, async)
      obj.setRequestHeader('Content-type', 'application/json')
      obj.send(JSON.stringify(data))
    } else {
      return reject
    }

    obj.onreadystatechange = () => {
      if (obj.readyState === 4 && (obj.status === 200 || obj.status === 304)) { // readyState == 4说明请求已完成
        let dataObj = obj.responseText  // 从服务器获得数据
        if (typeof dataObj !== 'object') {
          dataObj = JSON.parse(dataObj)
        }
        resolve(dataObj)
      } else {
        reject(obj.status)
      }
    }
  })
}

export default request
