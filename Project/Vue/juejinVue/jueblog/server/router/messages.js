let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
let messagesModel = require('../module/messages')

router.all('/', (req, res) => {
  res.send('消息管理api')
})

// 未读消息
router.get('/info', async (req, res, next) => {
  let { user_id } = req.query
  try {
    let result = await messagesModel.aggregate([
      { $match: { user_id: new ObjectId(user_id), status: 0 } },
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
        },
      },
    ])

    let rsinfo = Object.fromEntries(
      result.map(json => ['type' + json._id, json.count]),
    )

    let resjson = {
      comment: rsinfo['type1'] || 0,
      praise: rsinfo['type2'] || 0,
      follow: rsinfo['type3'] || 0,
      total: result.reduce((a, b) => a + b.count, 0),
    }

    res.send(resjson)
  } catch (err) {
    next(err)
  }
})

// 消息统计
router.get('/preview', async (req, res, next) => {
  let user_id = req.auth._id
  try {
    let result = await messagesModel.aggregate([
      { $match: { user_id: new ObjectId(user_id), status: 0 } },
      {
        $group: {
          _id: '$type',
          count: {
            $sum: 1,
          },
        },
      },
    ])
    let rsinfo = Object.fromEntries(
      result.map(json => ['type' + json._id, json.count]),
    )
    let resjson = {
      comment: rsinfo['type1'] || 0,
      praise: rsinfo['type2'] || 0,
      follow: rsinfo['type3'] || 0,
      total: result.reduce((a, b) => a + b.count, 0),
    }
    res.send(resjson)
  } catch (err) {
    next(err)
  }
})

module.exports = router
