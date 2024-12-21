const {groups} = require('../config/static')
let mongoose = require("mongoose");
const {ObjectId} = mongoose.Types
const circles = groups.find(row => row.key == 'circles') ?.children || []


const shortmsgsSchema = new mongoose.Schema({
  content: { type: String, required: true },
  images: {
    type: [String],
    default: []
  },
  created_by: { type: ObjectId, required: true },
  created_at: { type: Date, default: Date.now },
  group: {
    type: String,
    enum: circles.map((item) => item.key).concat(['all']),
    required: true
  }
});

const Model = mongoose.model("shortmsg", shortmsgsSchema);

module.exports = Model