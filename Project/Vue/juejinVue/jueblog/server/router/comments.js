let commentModel = require('../module/comments')
let messModel = require('../module/messages')
let usersModel = require('../module/users')

let mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
let express = require('express')
let router = express.Router()
let { filterJSON } = require('../utils/index')

router.get('/', (req, res) => {
  res.send('评论管理api')
})

// 创建评论
router.post('/create', async (req, res, next) => {
  let body = req.body
  try {
    let { target_user, type } = body
    let result = await commentModel.create(body)

    if (type === 'source') {
      await usersModel.findByIdAndUpdate(target_user, {
        $inc: { jue_power: 1 },
      })
    }

    await messModel.create({
      source_id: result._id,
      type: 1,
      user_id: target_user,
    })

    res.send(result)
  } catch (err) {
    next(err)
  }
})

// 删除评论
router.delete('/remove/:id', async (req, res, next) => {
  let { id } = req.params
  try {
    let result = await commentModel.findByIdAndDelete(id)
    if (result) {
      res.send({ message: '删除成功' })
    } else {
      res.status(400).send({ message: '文档未找到,删除失败' })
    }
  } catch (err) {
    next(err)
  }
})

// 获取文章评论列表
router.get('/list/:source_id', async (req, res, next) => {
  let { source_id } = req.params
  try {
    let lists = await commentModel.aggregate([
      { $match: { source_id: new ObjectId(source_id) } },
      {
        $lookup: {
          from: 'users',
          localField: 'created_by',
          foreignField: '_id',
          as: 'created_by',
        },
      },
    ])

    let handle = item => {
      let created_by =
        item.created_by.length > 0
          ? filterJSON(item.created_by[0], [
              '_id',
              'username',
              'position',
              'avatar',
            ])
          : null

      return {
        _id: item._id,
        content: item.content,
        created_by,
        created_at: item.created_at,
      }
    }

    let result = lists
      .filter(list => list.type === 'source')
      .map(row => {
        return {
          ...handle(row),
          replies: lists
            .filter(list => list.parent_id == row._id.toString())
            .map(row => {
              return {
                ...handle(row),
                reply_id: row.reply_id,
              }
            }),
        }
      })

    res.send(result)
  } catch (err) {
    next(err)
  }
})

// 获取我的评论列表
router.get('/mylist', async (req, res, next) => {
  let user_id = req.auth._id
  let { per_page, page } = req.query

  try {
    per_page = +per_page || 10
    page = +page || 1
    let skip = (page - 1) * per_page

    let where = { target_user: new ObjectId(user_id) }
    let total = await commentModel.countDocuments(where)
    let lists = await commentModel.aggregate([
      { $match: where },
      {
        $lookup: {
          from: 'users',
          localField: 'created_by',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $lookup: {
          from: 'articles',
          localField: 'source_id',
          foreignField: '_id',
          as: 'article',
        },
      },
      {
        $lookup: {
          from: 'shortmsgs',
          localField: 'source_id',
          foreignField: '_id',
          as: 'shortmsg',
        },
      },
      {
        $addFields: {
          article: {
            $first: '$article',
          },
          shortmsg: {
            $first: '$shortmsg',
          },
          user: {
            $first: '$user',
          },
        },
      },
      { $skip: skip },
      {
        $limit: per_page,
      },
    ])
    await messModel.updateMany(
      {
        status: 0,
        type: 1,
        user_id,
      },
      {
        status: 1,
      },
    )
    res.send({
      meta: {
        total,
        page,
        per_page,
      },
      data: lists,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
