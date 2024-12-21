
const crypto = require('crypto')
const SECRET_KEY = 'my_custom_8848'

function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex') // 把输出变成16进制的格式
}

function encrypt(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = encrypt