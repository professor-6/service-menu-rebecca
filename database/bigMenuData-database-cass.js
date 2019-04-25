const {Cassandra} = require('./index.js');
var path = require('path');
const {exec} = require('child_process');
const Promise = require('promise');
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
  console.log('counter: ' + count);
  this.entries_1_00_000(count, (rdy) => {
    if (!rdy) {
       this.writeAll(++count);
    } else {
      console.log('CQL DATABASE LOADED');
    }
  })
};

cassandraCommands.prototype.fetchRecord = function (id) {
  const query = `SELECT * FROM sdc.menu_selection WHERE id=${id};`;
  return new Promise((resolve, reject ) => {
  Cassandra.cassClient.execute(query)
  .then(  res =>  resolve(res))
  .catch( e => reject(e.stack))
  });
};

cassandraCommands.prototype.fetchRecordOrigin = function() {
  var numbers = randomNumbersList_100();
  return new Promise((resolve, reject )=>{
    const query = `SELECT * FROM sdc.menu_selection WHERE id IN(${numbers})` ;
    Cassandra.cassClient.execute(query)
    .then( res => resolve(res))
    .catch( e => reject(e.stack))
  });
};

var ops = new cassandraCommands();
  // ops.writeAll();


  exports.cassandra = {
    ops
  }


  /* helpers */
  function randomNumbersList_100() {
    var result = [];
    for (var i = 0; i < 100 ; i++) {
      result.push(getRandomInt(1,10000000));
    }
    return result.toString();
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }