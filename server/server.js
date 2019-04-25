const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParse = bodyParser.json();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3004;
const db = require("../database/index.js");
const {postgres} = require('../database/bigMenuData-database-pg.js');
const {cassandra} = require('../database/bigMenuData-database-cass.js');
const seedGen =  require('../database/bigMenuData.js');
const Menu = require("../database/schema.js");

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/../public/")));

//will pull all the data from database:
app.get("/menus", function(req, res) {
  // cassandra.ops.fetchRecordOrigin()
  // .then( menus=> res.send(menus))
  // .catch( err => res.send(500).send(err))
  postgres.ops.fetchRecordOrigin()
  .then( menus => res.send(menus) )
  .catch( err => res.status(500).send(err))
   //refer to eof for initial handler code
  });

//pulls 1 menu per id provided in Url:
app.get("/menus/:Id", (req, res) => {

  // cassandra.ops.fetchRecord(req.params.id)
  // .then(menu => console.log(menu))
  // .catch(err => console.log(err))
  postgres.ops.fetchRecord(req.params.Id)
  .then(menu => res.send(JSON.stringify(menu)))
  .catch(err => res.status(500).send(err))
   //refer to eof for initial handler code
});

app.get("/:Id", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});





