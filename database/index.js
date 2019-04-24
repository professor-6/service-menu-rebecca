// // const mongoose = require("mongoose");
// // mongoose.connect("mongodb://localhost/menus", { useNewUrlParser: true })
// // .then(() => console.log('Connected'))
// // .catch(err => console.log(err));
// // const db = mongoose.connection;
// // module.exports = db;

//POSTGRES
const { Client } = require('pg');
const psqlClient = new Client({
  database: 'test',
});
psqlClient.connect()

 const genCategoryTableQuery = ''+
 'CREATE TABLE IF NOT EXISTS' + ' ' +
 'categories (id  SERIAL PRIMARY KEY, occasion VARCHAR(40) NOT NULL )'+ ' '

 psqlClient.query(genCategoryTableQuery)
   .then(res => console.log())
   .catch(e => console.log(e.stack))


 const genMealSelectionTableQuery = ''+
 'CREATE TABLE IF NOT EXISTS' + ' ' +
 'menu_selection( id integer PRIMARY KEY,  BREAKFAST text NOT NULL, LUNCH text NOT NULL, DINNER text NOT NULL, BRUNCH text NOT NULL, HAPPYHOUR text NOT NULL, category_id integer references categories )';
 psqlClient.query(genMealSelectionTableQuery)
   .then(res => console.log())
   .catch(e => console.log(e.stack))


 const initCategoryList =''+
 `INSERT INTO categories(occasion) SELECT 'BREAKFAST'  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL ` +
 `  SELECT ('BREAKFAST')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('LUNCH')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('DINNER')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('BRUNCH')  WHERE NOT EXISTS (SELECT * FROM categories) UNION ALL`+
  `  SELECT ('HAPPYHOUR')  WHERE NOT EXISTS (SELECT * FROM categories)`

psqlClient.query(initCategoryList)
  .then(res => console.log())
  .catch(e => console.log(e.stack))
  exports.postgres = {
    psqlClient
  }
// CASSANDRA
// const  Cassandra = require('cassandra-driver');
// const cassClient = new Cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1'});

// cassClient.connect(function (err) {
//   if (err) return console.error(err);
//   console.log('Connected to cluster with %d host(s): %j', cassClient.hosts.length, cassClient.hosts.keys());
// });


// const replication = {
//   class: 'SimpleStrategy',
//   replication_factor: 1,
// };

// const keyspaceGeneration = '' +
// `CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1}`

//   cassClient.execute(keyspaceGeneration)
//   .then( result =>{ console.log('keyspace sdc created')})
//   .catch(e => {console.log(e)})

// const tableGeneration = `` +
// `CREATE TABLE IF NOT EXISTS  sdc.menu_selection(` +
//   `id int,`+
//   `BREAKFAST text,`+
//   `LUNCH text,`+
//   `DINNER text,`+
//   `BRUNCH text,`+
//   `HAPPYHOUR text` +
//   `PRIMARY KEY(id))`+
// `WITH CLUSTERING ORDER BY (id DESC)`
// exports.Cassandra = {
//   cassClient
// }
