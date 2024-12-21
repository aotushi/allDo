let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

let FollowsModel = require("../module/follows");
let MessModel = require("../module/messages");
//
router.all("/", (req, res) => {
  res.send("关注和粉丝API");
});
// 关注用户
router.post("/toggle", async (req, res, next) => {
  let body = req.body;
  try {
    let { user_id, fans_id } = body;
    if (!user_id || !fans_id) {
      return res.status(400).send({ message: "参数缺失" });
    }
    let action = "delete";
    let result = await FollowsModel.findOneAndDelete(body);

    if (!result) {
      action = "create";
      result = await FollowsModel.create(body);
      await MessModel.create({
        source_id: result._id,
        type: 3,
        user_id,
      });
    }
    res.send({
      action,
      message: action === 'create' ? '关注成功' : '取消关注成功',
    });
  } catch (err) {
    next(err);
  }
});

// 获取关注列表
// router.get('/lists', async(req, res, next) => {
//   let user_id =
// })

module.exports = router;
