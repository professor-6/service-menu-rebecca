
const {postgres} = require('./bigMenuData-database-pg');
const {generateCSV} = require('./bigMenuData.js')
const mode = process.argv[2] ;

if(mode ==2) {
  console.log('copying csv files to postgres');
  postgres.ops.writeAll()
} else if(mode ==1) {
  generateCSV.build();
}




