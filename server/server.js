const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
//const cors = require('cors');
const port = process.env.PORT || 5000;
const db = require('../database/index.js');
const Menu = require('../database/schema.js');

//app.use(cors());


//will pull all the data from database:

app.get('/menus', function (req, res) {
	Menu.find({}).then(menus => {
		res.send(menus);
	})
	.catch((err) => {
      res.status(500).send(err);
    });
});

//pulls 1 menu per id provided in Url:

app.get('/menus/:Id', (req, res) => {
  Menu.find({ menuId: req.params.Id })
    .then(menu => res.send(JSON.stringify(menu)))
    .catch((err) => {
      res.status(500).send(err);
    });
});
   

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});