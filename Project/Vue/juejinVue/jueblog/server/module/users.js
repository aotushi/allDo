const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },
  introduc: { type: String, required: true},
  position: { type: String, default: "" },
  company: { type: String, default: "" },
  jue_power: { type: Number, default: 0 },
  good_num: { type: Number, default: 0 },
  read_num: { type: Number, default: 0 },
});

const Model = mongoose.model("User", userSchema);
module.exports = Model;
