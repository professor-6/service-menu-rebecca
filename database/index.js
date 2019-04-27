
/*POSTGRES CLIENT */
const { Client } = require('pg');
const psqlClient = new Client({
  database: 'test',
});
psqlClient.connect((err, msg)=>{
  const schemaGeneration = ''+
  'CREATE TABLE IF NOT EXISTS' + ' ' +
  'menu_selection( id int  NOT NULL, BREAKFAST text NOT NULL, LUNCH text NOT NULL, DINNER text NOT NULL, BRUNCH text NOT NULL, HAPPYHOUR text NOT NULL , PRIMARY KEY(id))';
  psqlClient.query(schemaGeneration)
    .then(res => console.log('connected to post gres'))
    .catch(e => console.log(e.stack))
});
 exports.postgres = {
   psqlClient
 }





// /* CASSANDRA CLIENT*/
// const Cassandra = require('cassandra-driver');
// const cassClient = new Cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1'});
// cassClient.connect(function (err) {
//   if (err) return console.log( 'error connecting to Cassandra, must be off');

//   console.log('Connected to cluster with %d host(s): %j', cassClient.hosts.length, cassClient.hosts.keys());

//   const keyspaceGeneration = '' +
//   `CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1}`

//     cassClient.execute(keyspaceGeneration)
//     .then( result =>{ console.log('keyspace sdc created')})
//     .catch(e => {console.log(e)});

//   const tableGeneration = `` +
//   `CREATE TABLE IF NOT EXISTS  sdc.menu_selection(id int, category_id int , BREAKFAST text, LUNCH text, DINNER text, BRUNCH text, HAPPYHOUR text, PRIMARY KEY(id))`;


//   cassClient.execute(tableGeneration)
//   .then( result =>{ console.log('table generated created')})
//   .catch(e => {console.log(e)});
// });


// exports.Cassandra = {
//   cassClient
// }
