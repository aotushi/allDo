let express = require("express");
let router = express.Router();
let praisesModel = require("../module/praises");

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

module.exports = router;
