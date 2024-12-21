
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types

const praisesSchema = new mongoose.Schema({
  target_id: { type: ObjectId, required: true },
  target_type: {
    type: Number,
    enum: [1,2], //1文档 2沸点
    required: true
  },

  type: {
    type: Number,
    enum: [1,2], //1点赞 2收藏
    default: 1,
    required: true
  },
  // 目标用户id(收藏点赞的人)
  target_user: { type: ObjectId, required: true },

  created_by: { type: ObjectId, required: true },
  created_at: { type: Date, default: Date.now },
})

const Model = mongoose.model('praises', praisesSchema);
module.exports = Model