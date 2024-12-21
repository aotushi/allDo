let express = require("express");
let router = express.Router();
let articlesModel = require("../module/articles");
let mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

router.get("/", (req, res) => {
  res.send("文章管理api");
});

// 新增文章
router.post("/create", async (req, res) => {
  let body = req.body;
  try {
    let result = await articlesModel.create(body);
    res.send(result);
  } catch (err) {
    let code = err.name === "ValidationError" ? 400 : 500;
    let { name, message } = err;
    res.status(code).send({ name, message });
  }
});

// 发布文章
router.post("/publish/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let result = await articlesModel.findByIdAndUpdate(id, { status: 1 });

    if (result) {
      res.send({ message: "发布成功" });
    } else {
      res.status(400).send({ message: "发布失败, 文章id错误" });
    }
  } catch (err) {
    let code = err.name === "ValidationError" ? 400 : 500;
    let { name, message } = err;
    res.status(code).send({ name, message });
  }
});

// 更新文章
router.put("/update/:id", async (req, res, next) => {
  let body = req.body;
  let { id } = body;
  try {
    let allow_keys = ["title", "intro", "content", "category", "tags"];

    Object.keys(body).forEach((key) => {
      if (!allow_keys.includes(key)) {
        delete body[key];
      }
    });

    body.update_at = new Date();
    let result = await articlesModel.updateOne(id, body);
    if (result) {
      res.send({ message: "更新成功" });
    } else {
      res.status(400).send({ message: "更新失败, 文章id错误" });
    }
  } catch (err) {
    next(err)
  }
});

// 删除文章
router.delete("/delete/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let result = await articlesModel.findByIdAndDelete(id);
    if (result) {
      res.send({ message: "删除成功" });
    } else {
      res.status(400).send({ message: "删除失败, 文章id错误" });
    }
  } catch (err) {
    next(err)
  }
});

// 文章列表
router.get("/list", async (req, res, next) => {
  let { user_id } = req.query;
  try {
    let result = await articlesModel.aggregate([
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
    ]);
    res.send(result);
  } catch (err) {
    next(err)
  }
});

module.exports = router;
