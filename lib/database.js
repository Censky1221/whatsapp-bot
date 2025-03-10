//const mongoose = require("mongoose");

//const mongoURI = "mongodb+srv://storeyoga692:XxDzw6ko6JX8iGD8@cluster0.zeank.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
// Ganti `username`, `password`, dan `cluster0.mongodb.net` sesuai dengan detail dari MongoDB Atlas

//mongoose.connect(mongoURI, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//})
 // .then(() => console.log("✅ Tersambung ke MongoDB Atlas!"))
  //.catch(err => console.error("❌ Koneksi MongoDB gagal:", err));//

//module.exports = mongoose;//

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://storeyoga692:XxDzw6ko6JX8iGD8@cluster0.zeank.mongodb.net/botdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database MongoDB terhubung!");
}).catch(err => {
    console.error("Gagal terhubung ke MongoDB", err);
});


