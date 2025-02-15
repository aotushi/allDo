const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoInit = require('./config/mongo')
const routerInit = require('./config/router')
const {verifyJwt} = require('./utils/jwt')



app.use(mongoInit)
app.use(bodyParser.json())
app.use(
  verifyJwt().unless({
    path: ['/users/create', '/users/login']
  })
)


routerInit(app)




app.use((req, res, next) => {
  res.status(404).send('404 找不到页面')
})
app.use((err, req, res, next) => {
  let err400 = ['ValidationError', 'CastError', 'BSONError', 'MulterError']
  let code = err400.includes(err.name) ? 400 : err.status || 500
  if (err.name == 'BSONError') {
    err.message = 'ID错误'
  }
  res.status(code).send({
    name: err.name,
    message: err.message,
  })
})

app.listen(9000, () => {
  console.log('启动成功>')
})