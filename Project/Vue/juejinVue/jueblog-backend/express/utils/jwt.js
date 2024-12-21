let {expressjwt: exjwt} = require('express-jwt')
let jwt = require('jsonwebtoken')

//密钥
const SECRET_KEY = 'alifn_jueblog_jwt_8765'
//生成jwt
function geneJwt(data) {
  let token = jwt.sign(data, SECRET_KEY, {expiresIn: '7d'})
  return token
}

//验证jwt
function verifyJwt() {
  return exjwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'],
    requestProperty: 'auth'
  })
}

module.exports = {
  geneJwt, verifyJwt
}