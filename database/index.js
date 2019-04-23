// // const mongoose = require("mongoose");
// // mongoose.connect("mongodb://localhost/menus", { useNewUrlParser: true })
// // .then(() => console.log('Connected'))
// // .catch(err => console.log(err));
// // const db = mongoose.connection;
// // module.exports = db;

//POSTGRES
const { Client } = require('pg');
const client = new Client({
  database: 'test',
})
client.connect()

 const genCategoryTableQuery = ''+
 'CREATE TABLE IF NOT EXISTS' + ' ' +
 'categories (id  SERIAL PRIMARY KEY, occasion VARCHAR(40) NOT NULL )'+ ' '

 client.query(genCategoryTableQuery)
   .then(res => console.log())
   .catch(e => console.log(e.stack))


 const genMealSelectionTableQuery = ''+
 'CREATE TABLE IF NOT EXISTS' + ' ' +
 'menu_selection( id SERIAL PRIMARY KEY, BREAKFAST text NOT NULL, LUNCH text NOT NULL, DINNER text NOT NULL, BRUNCH text NOT NULL, HAPPYHOUR text NOT NULL, category_id integer references categories )';
 client.query(genMealSelectionTableQuery)
   .then(res => console.log())
   .catch(e => console.log(e.stack))


 const initCategoryList =''+
 `INSERT INTO categories(occasion) SELECT 'BREAKFAST'  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL ` +
 `  SELECT ('BREAKFAST')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('LUNCH')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('DINNER')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('BRUNCH')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('HAPPYHOUR')  WHERE NOT EXISTS (SELECT * FROM categories)`

client.query(initCategoryList)
.then(res => console.log())
.catch(e => console.log(e.stack))


//CASSANDRA
// // const  Cassandra = require('cassandra-driver');
// // const cluster = new Cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1'});

// // cluster.connect(function (err) {
// //   if (err) return console.error(err);
// //   console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
// // });



exports.postgres = {
  client
}
