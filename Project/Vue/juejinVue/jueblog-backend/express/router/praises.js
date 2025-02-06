let express = require("express");
let router = express.Router();
let praisesModel = require("../module/praises");
let mongoose = require("mongoose");
const {ObjectId} = mongoose.Types
let messagesModel = require("../module/messages")


router.get("/", (req, res) => {
  res.send("点赞收藏管理api");
});

// 点赞和收藏
router.post("/toggle", async (req, res, next) => {
  let body = req.body;
  try {
    let { target_id, target_type, target_user, created_by } = body;

    if (!target_id || !target_type || !target_user || !created_by) {
      return res.status(400).send({ message: "参数缺失" });
    }

    let action = "delete";
    let result = await praisesModel.findOneAndDelete(body);
    if (!result) {
      action = "create";
      result = await praisesModel.create(body);
    }

    res.send({
      action,
      message: action === "create" ? "创建成功" : "取消成功",
    });
  } catch (err) {
    next(err)
  }
});


// 获取我的赞和收藏列表
router.get('/mylist', async (req, res, next) => {
  let user_id = req.auth.id
  let { per_page, page } = req.query
  try {
    per_page = +per_page || 10
    page = +page || 1
    let skip = (page - 1) * per_page
    let where = { target_user: new ObjectId(user_id) }
    let total = await praisesModel.countDocuments(where)
    let lists = await praisesModel.aggregate([
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
          localField: 'target_id',
          foreignField: '_id',
          as: 'article',
        },
      },
      {
        $lookup: {
          from: 'shortmsgs',
          localField: 'target_id',
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
    await messagesModel.updateMany(
      {
        status: 0,
        type: 2,
        user_id,
      },
      {
        status: 1,
      }
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

module.exports = router;
