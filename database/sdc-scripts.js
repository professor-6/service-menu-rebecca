
const {exec} = require('child_process');
const Promise = require('promise');
// const mode = process.argv[2] ;

new Promise( (resolve, reject) => {
  exec('createdb test', (err,stdout, stderr) => {
    if( ! err ) {  // database 'test' not found, next promise loads database
      resolve(true);
    } else {  //file exists exit
      reject(true);
    }
  });
}).then( ()=>{
  const {postgres} = require('./bigMenuData-database-pg');

  setTimeout(() => {
    postgres.ops.writeAll();
  }, 1000);

}).catch(()=> console.log('database already created') );




