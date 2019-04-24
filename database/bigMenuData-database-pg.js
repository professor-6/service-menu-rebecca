var {postgres} = require('./index');
var path = require('path');

var psqlCommands =  function (){
  this.pathCSVTest = path.resolve(__dirname, '..', 'TESTDATA')
}

psqlCommands.prototype.entries_1_00_000 = function(fileNumber, callback) {
  postgres.psqlClient.query(`COPY menu_selection (id,BREAKFAST,LUNCH,DINNER,BRUNCH,HAPPYHOUR) FROM '${this.pathCSVTest}/data${fileNumber}.csv'  WITH DELIMITER ',' CSV HEADER`)
  .then( ()=>{
    if(fileNumber ===99 ){
      callback(true);
    } else {
      callback(false);
    }
  })
  .catch(e=> console.log())
};

psqlCommands.prototype.writeAll = function(count=0) {
  this.entries_1_00_000( count ,(rdy)=>{
    if (!rdy) {
      this.writeAll(++count);
    } else {
      console.log('WE MADE IT')
    }
  });
}

var ops = new psqlCommands();
// ops.entries_1_00_000();
// ops.delete()
// ops.writeAll( )
