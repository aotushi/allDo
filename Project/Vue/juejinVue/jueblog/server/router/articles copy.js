let express = require("express");
let router = express.Router();
let articlesModel = require("../module/articles");
let mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
let { categories } = require("../config/static");

let UsersModel = require("../module/users");

router.get("/", (req, res) => {
  res.send("文章管理api");
});

// 新建文章
router.post("/create", async (req, res, next) => {
  let created_by = req.auth._id;
  console.log('articles/create>created_by>', created_by)
  let body = req.body;
  try {
    body.created_by = new ObjectId(created_by)
    let result = await articlesModel.create(body);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// 发布文章
router.post("/publish/:id", async (req, res, next) => {
  let { id } = req.params;
  let created_by = req.auth._id;
  try {
    let result = await articlesModel.findByIdAndUpdate(id, {
      status: 1,
      created_at: new Date(),
    });
    if (result) {
      await UsersModel.findByIdAndUpdate(created_by, {
        $inc: { jue_power: 10 },
      });
      res.send({ message: "发布成功" });
    } else {
      res.status(400).send({ message: "文档未找到，发布失败" });
    }
  } catch (err) {
    next(err);
  }
});

// 删除文章
router.delete("/remove/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let result = await articlesModel.findByIdAndDelete(id);
    if (result) {
      res.send({ message: "删除成功" });
    } else {
      res.status(400).send({ message: "文档未找到，删除失败" });
    }
  } catch (err) {
    next(err);
  }
});

// 修改文章
router.put("/update/:id", async (req, res, next) => {
  let body = req.body;
  let { id } = req.params;
  try {
    let allow_keys = ["title", "intro", "content", "category", "tags"];
    Object.keys(body).forEach((key) => {
      if (!allow_keys.includes(key)) {
        delete body[key];
      }
    });
    if (Object.keys(body).length == 0) {
      return res.status(400).send({
        message: "请传入要更新的数据",
      });
    }
    body.updated_at = new Date();
    let result = await articlesModel.findByIdAndUpdate(id, body);
    if (result) {
      res.send({ message: "更新成功" });
    } else {
      res.status(400).send({ message: "更新失败，文章ID错误" });
    }
  } catch (err) {
    next(err);
  }
});

// 文章列表
router.get("/lists", async (req, res, next) => {
  let user_id = req.auth ? req.auth._id : null;
  let { category, created_by, orderby, per_page, page } = req.query;
  try {
    per_page = +per_page || 10;
    page = +page || 1;
    let skip = (page - 1) * per_page;
    orderby = orderby || "new";
    if (!["new", "hot"].includes(orderby)) {
      return res.status(400).send({ message: "orderby 参数错误" });
    }
    let where = {
      status: 1,
    };
    if (category) {
      where.category = category;
    }
    if (created_by) {
      where.created_by = new ObjectId(created_by);
    }
    let total = await articlesModel.countDocuments(where).skip(skip);
    let result = await articlesModel.aggregate([
      {
        $match: where,
      },
      {
        $addFields: {
          debug_created_by: "$created_by", // 临时增加一个字段用于调试
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "source_id",
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "praises",
          localField: "_id",
          foreignField: "target_id",
          as: "praises",
        },
      },
      {
        $lookup: {
          from: "users", // 要关联查询的集合名称
          localField: "created_by", // 当前集合中的字段
          foreignField: "_id", // users集合中要匹配的字段
          as: "user", // 查询结果存储的字段名
        },
      },
      {
        $addFields: {
          debug_user_array: "$user", // 临时增加一个字段,查看lookup的结果
        },
      },
      {
        $addFields: {
          praises: {
            $filter: {
              input: "$praises",
              as: "arrs",
              cond: { $eq: ["$$arrs.type", 1] },
            },
          },
          comments: {
            $size: "$comments",
          },
        },
      },
      {
        $addFields: {
          is_praise: {
            $in: [new ObjectId(user_id), "$praises.created_by"],
          },
          praises: {
            $size: "$praises",
          },
          user: {
            $first: "$user",
          },
        },
      },
      {
        $unset: ["user.password", "user.__v"],
      },
      {
        $sort: orderby == "new" ? { created_at: -1 } : { comments: -1, praises: -1 },
      },
      { $skip: skip },
      {
        $limit: per_page,
      },
    ]);
    res.send({
      meta: {
        total,
        page,
        per_page,
      },
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

// 文章详情
router.get("/detail/:id", async (req, res, next) => {
  let { id } = req.params;
  let user_id = req.auth ? req.auth._id : null;
  try {
    let result = await articlesModel.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "praises",
          localField: "_id",
          foreignField: "target_id",
          as: "praises",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "source_id",
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "created_by",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $addFields: {
          praises: {
            $filter: {
              input: "$praises",
              as: "arrs",
              cond: { $eq: ["$$arrs.type", 1] },
            },
          },
          comments: {
            $size: "$comments",
          },
          stars: {
            $filter: {
              input: "$praises",
              as: "arrs",
              cond: { $eq: ["$$arrs.type", 2] },
            },
          },
          user: {
            $first: "$user",
          },
        },
      },
      {
        $addFields: {
          is_praise: {
            $in: [new ObjectId(user_id), "$praises.created_by"],
          },
          praises: {
            $size: "$praises",
          },
          is_start: {
            $in: [new ObjectId(user_id), "$stars.created_by"],
          },
          stars: {
            $size: "$stars",
          },
        },
      },
      {
        $unset: ["user.password", "user.__v"],
      },
    ]);
    if (result.length > 0) {
      await articlesModel.findByIdAndUpdate(id, {
        $inc: { page_view: 1 },
      });
      await UsersModel.findByIdAndUpdate(result[0].created_by, {
        $inc: { read_num: 1 },
      });
      res.send(result[0]);
    } else {
      res.status(400).send({ message: "文章不存在" });
    }
  } catch (err) {
    next(err);
  }
});

// 返回分类
router.get("/category", async (req, res, next) => {
  res.json(categories);
});

module.exports = router;
