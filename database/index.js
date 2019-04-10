const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/menus", { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
