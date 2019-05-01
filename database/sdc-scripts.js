
const {generateCSV} = require('./bigMenuData.js')
const {postgres} = require('./index');
const mode = process.argv[2] ;


if(mode ==1) {
  setTimeout(createTable, 1000);
}

function createTable () {
  var  schemaGeneration = ''+
  'CREATE TABLE IF NOT EXISTS' + ' ' +
  'menu_selection( id int  NOT NULL, BREAKFAST text NOT NULL, LUNCH text NOT NULL, DINNER text NOT NULL, BRUNCH text NOT NULL, HAPPYHOUR text NOT NULL , PRIMARY KEY(id))';


  postgres.psqlClient.query(schemaGeneration)
    .then(res =>  {console.log('Postgres table created created. \n Seeding processing will begin shortly')
      generateCSV.build();
    })
    .catch(e => console.log(e.stack))
}

