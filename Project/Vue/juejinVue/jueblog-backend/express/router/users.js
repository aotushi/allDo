
let express = require('express')
let router = express.Router()
let usersModel = require('../module/users')
let encrypt = require('../utils/crypto')
let {geneJwt} = require('../utils/jwt')




router.get('/users', (req, res) => {
  
  res.send('用户管理api')
})

// 用户注册
router.post('/create', async (req, res, next) => {
  let body = req.body
  try {
    if (!body.password || body.password.length < 6) {
      return res.status(400).send({message:'密码必传且长度不小于6位'})
    }
    body.password = encrypt(body.password)
    let result = await usersModel.create(body)
    res.send(result)
  } catch(err){
    let code = err.name === 'ValidationError' ? 400 : 500
    let {name, message} = err
    res.status(code).send({name, message})
  }
})

// 用户更改
router.post('/update/:id', async(req, res) => {
  let body = req.body
  let {id} = body
  try {
    let allow_keys = [
      'username',
      'introduc',
      'avatar',
      'position',
      'position',
      'company'
    ]

    Object.keys(body).forEach(key => {
      if (!allow_keys.includes(key)) {
        delete body[key]
      }
      if (Object.keys(body).length === 0) {
        return res.status(400).send({message: '请传入要更新的数据'})
      }
    })

    let result = await usersModel.updateOne({_id: id}, body)
    if (result) {
      res.send({message: '更新成功', result})
    } else {
      res.status(400).send({message: '更新失败,用户ID错误'})
    }
  } catch(err) {
    let code = err.name === 'ValidationError' ? 400 : 500
    let {name, message} = err
    res.status(code).send({name, message})
  }
})

// 用户登录
router.post('/login', async(req, res) => {
  let body = req.body
  try {
    if (!body.phone || !body.password) {
      return res.status(400).send({message: '请输入手机号和密码'})
    }
    let {phone, password} = body
    password =  encrypt(password)

    let result = await usersModel.findOne({phone, password})
    if (result) {
      let {_id, username} = result
      let token = geneJwt({id: _id, username})
      res.send({code:200, message: result, token: token})
    } else {
      res.send({code:20001, message: '用户名或密码错误'})
    }
  } catch(err) {
    let code = err.name === 'ValidationError' ? 400 : 500
    let {name, message} = err
    res.status(code).send({name, message})
  }
})

// 用户列表
router.get('/list', async(req, res, next) => {
  try {
    let result = await usersModel.find()
  res.send(result)
  } catch(err) {
    next(err)
  }
  
})

module.exports = router