import axios from 'axios'

function checkStatus (response) {
  if (response.status === 200) {
    return response
  } else {
    console.log(response)
  }
}
// 共通请求头部
function requestHeader (opt) {
  let myHeaders = opt.headers
  if (!myHeaders) {
    myHeaders = {
    }
    myHeaders['Content-Type'] = 'application/json;charset=UTF-8'
  }
  return myHeaders
}

export function request (options) {
  return axios({
    method: options.method,
    url: options.url ? options.url : undefined,
    data: options.data,
    params: options.params,
    headers: requestHeader(options)
  })
    .then(checkStatus)
    .then(res => {
      if (options.method.toUpperCase() === 'HEAD') {
        console.log(3)
        return {success: true}
      } else {
        console.log(4)
        return res.data
      }
    })
    .catch(erwonar => {
      if (options.method.toUpperCase() === 'HEAD') {
        console.log(2)
        return {success: false}
      } else {
        return{
          code:-1
        }

      }
    })
}
