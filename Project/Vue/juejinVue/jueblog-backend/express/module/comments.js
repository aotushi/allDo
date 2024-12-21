const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types


const commentsSchema = new mongoose.Schema({

  // 文章或沸点id
  source_id: { type: ObjectId, required: true },
  // 文章1 沸点2
  source_type: {
    type: Number,
    enum: [1,2], //1文档 2沸点
    required: true
  },
  // 评论类型: source内容 comment评论 reply回复
  type: {
    type: String,
    enum: ['source', 'comment', 'reply'],
    required: true
  },
  // 父级评论id
  parent_id: {
    type: ObjectId,
    default: null,
    required() {
      return this.type !== 'source'
    }
  },
  // 回复某个评论的id
  reply_id: {
    type: ObjectId,
    default: null,
    required() {
      return this.type === 'reply'
    }
  },
  // 评论对象创建者id
  target_user: { type: ObjectId, required: true },
  // 评论内容
  content: { type: String, required: true },
  
  created_by: { type: ObjectId, required: true },
  created_at: { type: Date, default: Date.now },
})

const Model = mongoose.model('comments', commentsSchema);
module.exports = Model