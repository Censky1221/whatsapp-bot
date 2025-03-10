const mongoose = require("mongoose");

const sewaSchema = new mongoose.Schema({
    user_id: String,
    tanggal_mulai: { type: Date, default: Date.now },
    tanggal_berakhir: Date,
    paket: String
});

module.exports = mongoose.model("SewaBot", sewaSchema);
