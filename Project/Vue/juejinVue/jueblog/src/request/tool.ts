import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'

const handleChangeRequestHeader = config => {
  config.headers['Content-Type'] = 'application/json'
  return config
}

const handleRequestHeaderAuth = config => {
  config.headers.Authorization =
    'Bearer ' + localStorage.getItem('jueblog_token')
  // config.headers.Authorization =
  //   'Bearer ' +
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2Y4N2IzNTg2MGFhNmEzMGI1ZDAwYiIsInVzZXJuYW1lIjoiYWJjMiIsImlhdCI6MTczNjQxMTY5NiwiZXhwIjoxNzM3MDE2NDk2fQ.Lo8IRjgNWRv8Ouar0KJ6y0w4cIVRZUCEu0-z36MCpxA0'
  return config
}

const handleNetworkError = (errStatus: number) => {
  let errMsg = '未知错误'
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMsg = '请求错误'
        break
      case 401:
        errMsg = '未授权'
        localStorage.removeItem('jueblog_token')
        useUserStore().showLogin() //显示登录框
        break
      case 403:
        errMsg = '拒绝访问'
        break
      case 404:
        errMsg = '请求地址出错'
        break
      case 405:
        errMsg = '请求方法未允许'
        break
      case 408:
        errMsg = '请求超时'
        break
      case 500:
        errMsg = '服务器内部错误'
        break
      case 501:
        errMsg = '网络未实现'
        break
      case 502:
        errMsg = '网络错误'
        break
      case 503:
        errMsg = '服务不可用'
        break
      case 504:
        errMsg = '网络超时'
        break
      case 505:
        errMsg = 'http版本不支持该请求'
        break
      default:
        errMsg = `其它连接错误 + ${errStatus}`
    }
  } else {
    errMsg = '连接到服务器失败'
  }

  ElMessage.error(errMsg)
}

type AuthErrCode =
  | '10031'
  | '10032'
  | '10033'
  | '10034'
  | '10035'
  | '10036'
  | '10037'
  | '10038'
const handleAuthError = (errno: AuthErrCode) => {
  if (!errno) {
    return
  }
  const authErrMap = {
    '10031': '登录失效，需要重新登录', // token 失效
    '10032': '您太久没登录，请重新登录~', // token 过期
    '10033': '账户未绑定角色，请联系管理员绑定角色',
    '10034': '该用户未注册，请联系管理员注册用户',
    '10035': 'code 无法获取对应第三方平台用户',
    '10036': '该账户未关联员工，请联系管理员做关联',
    '10037': '账号已无效',
    '10038': '账号未找到',
  }

  if (Object.hasOwn(authErrMap, errno)) {
    ElMessage.error(authErrMap[errno])
    // logout()
    // return false
  }
  // return true
}

const handleGeneralError = (errno: string, errmsg: string) => {
  if (!errno || !errmsg) {
    return
  }
  if (errno !== '0') {
    ElMessage.error(errmsg)
    return false
  }
  return true
}

export {
  handleChangeRequestHeader,
  handleRequestHeaderAuth,
  handleAuthError,
  handleNetworkError,
  handleGeneralError,
}
