var {postgres} = require('./index');
var path = require('path');
var Promise  = require('promise');

var psqlCommands =  function (){
  this.pathCSVTest = path.resolve(__dirname, '..', 'TESTDATA')
}
//
psqlCommands.prototype.entries_1_00_000 = function(fileNumber, callback) {
  postgres.psqlClient.query(`COPY menu_selection(id,BREAKFAST,LUNCH,DINNER,BRUNCH,HAPPYHOUR) FROM '${this.pathCSVTest}/data${fileNumber}.csv'  WITH DELIMITER ',' CSV HEADER`)
  .then( ()=>{
    if(fileNumber ===99 ){
      callback(true);
    } else {
      callback(false);
    }
  })
  .catch()
};

psqlCommands.prototype.writeAll = function(count=0) {
  console.log('worker copying csv file number ' + count + ' to database named test' )
  this.entries_1_00_000( count ,(rdy)=>{
    if (!rdy) {
      this.writeAll(++count);
    } else {
      console.log('postgres load complete... .. .');
      process.exit();
    }
  });
};

psqlCommands.prototype.fetchRecordOrigin = function () {
  var numbers = randomNumbersList_100();
  return new Promise ((resolve, reject)=> {
    postgres.psqlClient.query(`SELECT * FROM  menu_selection WHERE id IN(${numbers})`)
    .then( res=> resolve (res.rows))
    .catch(e => reject(e));
  });
};


psqlCommands.prototype.fetchRecord = function (id) {
  return new Promise ( (resolve, reject)=>{
    postgres.psqlClient.query(`SELECT * FROM  menu_selection WHERE id =${id}`)
    .then( res =>  resolve(res.rows))
    .catch(err => reject(err));
  });
};

psqlCommands.prototype.format = function(collection) {
  var result = [];
  return new Promise ((resolve, reject) => {
    if(!collection.length  || collection.length ===0 ) reject('err reading database');

    for (var i=0; i < collection.length; i++) {
      result.push(menuObject(collection[i]));
    }
    resolve(result);
  });
};



var ops = new psqlCommands();
exports.postgres = {
  ops
};


/* helpers */
function menuObject(obj) {
  var result= {};
  result.Breakfast =  JSON.parse( obj.breakfast);
  result.Lunch = JSON.parse(obj.lunch);
  result.Dinner =  JSON.parse (obj.dinner);
  result.HappyHour = JSON.parse(obj.happyhour);
  result.Brunch = JSON.parse (obj.brunch);
  return result;
};


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


