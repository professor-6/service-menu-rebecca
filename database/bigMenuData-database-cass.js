const {Cassandra} = require('./index.js');
var path = require('path');
const {exec} = require('child_process');

var cassandraCommands = function() {
  this.pathCSV = path.resolve(__dirname, '..' , 'TESTDATA');
};

cassandraCommands.prototype.entries_1_00_000 = function(fileNumber, callback) {
  var file = `${this.pathCSV}/data${fileNumber}.csv`;
  const command = `cqlsh -e "COPY sdc.menu_selection FROM '${file}' WITH DELIMITER=',' AND HEADER=TRUE"`;
  exec( command, {options: {stdio: 'ignore'}}, (err, stdout,stderr) =>{
    if(err) throw 'error running child process'

    if(fileNumber==99) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

cassandraCommands.prototype.writeAll = function(count=0) {
  console.log('counter: ' + count)
  this.entries_1_00_000(count, (rdy)=>{
    if(!rdy) {
       this.writeAll(++count);
    } else {
      console.log('CQL DATABASE LOADED');
    }
  })
};

cassandraCommands.prototype.delete = function() {
  const table = 'sdc.menu_selection';
  Cassandra.cassClient.execute(`DROP TABLE ${table}`)
  .then( ()=> console.log('deleted table'))
  .catch()
}


var ops = new cassandraCommands();
  // ops.writeAll();
  // ops.delete()

