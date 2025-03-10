const mongoose = require("mongoose");

const groupListSchema = new mongoose.Schema({
  groupID: { type: String, required: true, unique: true },
  list: { type: Array, default: [] },
});

const GroupList = mongoose.model("GroupList", groupListSchema);

module.exports = GroupList;