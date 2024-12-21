let mongoose = require("mongoose");
const {ObjectId} = mongoose.Types

let messagesModel = new mongoose.Schema({
  user_id: {type: ObjectId, required: true},
  source_id: {type: ObjectId, required: true},
  type: {type: Number, enum: [1,2,3], required: true},
  status: {type: Number, enum: [0,1], default: 0, required: true},
  created_at: {type: Date, default: Date.now}
})


const Model = mongoose.model('messages', messagesModel);
module.exports = Model