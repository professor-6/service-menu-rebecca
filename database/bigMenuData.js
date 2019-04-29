const fs = require('fs');
const path = require('path');
const sim  = require('./pre-process-faker').fakerBuild();
const {postgres} = require('./bigMenuData-database-pg');
var counter = 1;

var nObjects = function(count) {
var sample = '';
  for (var i=0; i< count  ;  i++ ) {
    sample +=`{""itemName"":""${sim.word[ Math.ceil(Math.random()*5)  ]}"", ""itemDescription"":""${sim.paragraph[ Math.ceil(Math.random()*5)  ]}"", ""itemPrice"":""$${sim.price[ Math.ceil(Math.random()*5) ]}""}` +  `${ i+1==count? '' : ','}`;
  }
  return `"[${sample}]"`
};

var generateMenuObject_100000_helper = function() {
  var stringBuffer = '';
    stringBuffer+= counter++ + ',' +  nObjects( Math.ceil(Math.random()*5) ) + ',' +  nObjects( Math.ceil(Math.random()*5) ) +','+  nObjects( Math.ceil(Math.random()*5) )+ ','  +  nObjects( Math.ceil(Math.random()*5) ) + ','  +  nObjects( Math.ceil(Math.random()*5) )+ '\n';
  return stringBuffer;
};

var generateMenuObject_100000 = function(max, file, callback) {
  var buffer= '';
  fs.appendFileSync (file, "id,BREAKFAST, LUNCH, DINNER, BRUNCH, HAPPYHOUR\n", {option:{flags:'a+'}})
  for (var r = 0; r <= max; r++) {
    var result = generateMenuObject_100000_helper() ;
    buffer += result;
    if( r%25000 ===0) {
      fs.appendFileSync(file, buffer, {option:{flags:'a+'}})
      buffer='';
    }
  }
  callback(true);
};

var generateBlock = function ( records,fileNumber, callback) {
  var file = path.resolve('TESTDATA' , 'data' + fileNumber + '.csv' );
  generateMenuObject_100000(records, file, (res)=>{
    callback(res);
  });
};

var build =  function ( count=0 ) {
  const records = 100000;
  const dirLimit = 100;

  if(count === dirLimit) {
    console.log('LOG: -->  COMPLETE');
    process.exit();
  }

  generateBlock(records,count, (bool )=>{
    if (bool) {

      postgres.ops.writeOnce(count)
      .then( (obj) => {
        console.log(' LOG:  completed generation of csv file Number  ' + obj.fileNumber)
        return new Promise( (resolve, reject) => {

          fs.unlink(obj.file, (err)=>{
            if (err) {
              reject(err);
            } else {
              resolve(obj.fileNumber);
              console.log('LOG:  Removed csv file Number  ' +obj.fileNumber + ' from storage' )
            }
          });
        })
      })
      .then( (count)=> build(++count))
      .catch( (err)=> console.log(err))
    }
  });
};


exports.generateCSV = {
  build
}

