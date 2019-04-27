const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParse = bodyParser.json();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3004;
const db = require("../database/index.js");
const {postgres} = require('../database/bigMenuData-database-pg.js');
// const {cassandra} = require('../database/bigMenuData-database-cass.js');
const seedGen =  require('../database/bigMenuData.js');
const Menu = require("../database/schema.js");
const fs = require('fs');
const file = `/Users/hectron/Documents/2019/HackReactor/Immersive/CapStone/SDC/service-menu-rebecca/debugFIle.txt`;

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
  postgres.ops.fetchRecordOrigin()
  .then( dbDataRcvd => postgres.ops.format(dbDataRcvd) )
  .then( parseData => res.send(parseData))
  .catch( err => res.status(500).send(err))
  });

//pulls 1 menu per id provided in Url:
app.get("/menus/:Id", (req, res) => {
  postgres.ops.fetchRecord(req.params.Id)
  .then(dbDataRcvd => postgres.ops.format(dbDataRcvd))
  .then( parseData => res.send(parseData))
  .catch(err => res.status(500).send(err) );
});

app.get("/:Id", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});





