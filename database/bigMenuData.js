const fs = require('file-system');
const path = require('path');
const sim  = require('./pre-process-faker').fakerBuild();
var counter = 1;
var blockCounter =counter;

var generateMenuObject_100000_helper = function() {
  var stringBuffer = '';
  var result = {};
  var idx0 = Math.floor(Math.random()*5) ;
  var idx1 =  idx0 + 1;
  var idx2 =  idx1 + 1;
  var idx3 =  idx2 + 1;
  var idx4 =  idx3 + 1;

  result[0] = `"'{""itemName"":""${sim.word[idx0]}"", ""itemDescription"":""${sim.paragraph[idx0]}"", ""itemPrice"":""$${sim.price[idx0]}""}'"`;
  result[1] = `"'{""itemName"":""${sim.word[idx1]}"", ""itemDescription"":""${sim.paragraph[idx1]}"", ""itemPrice"":""$${sim.price[idx1]}""}'"`;
  result[2] = `"'{""itemName"":""${sim.word[idx2]}"", ""itemDescription"":""${sim.paragraph[idx2]}"", ""itemPrice"":""$${sim.price[idx2]}""}'"`;
  result[3] = `"'{""itemName"":""${sim.word[idx3]}"", ""itemDescription"":""${sim.paragraph[idx3]}"", ""itemPrice"":""$${sim.price[idx3]}""}'"`;
  result[4] = `"'{""itemName"":""${sim.word[idx4]}"", ""itemDescription"":""${sim.paragraph[idx4]}"", ""itemPrice"":""$${sim.price[idx4]}""}'"`;
  for( var i= 0; i<5 ; i++) {
    stringBuffer+= counter++ + ',' + (Math.floor ((blockCounter)) ||1 ) + ',' + result[Math.floor(Math.random()*5) ]  + ',' + result[Math.floor(Math.random()*5) ]  +','+ result[Math.floor(Math.random()*5) ] + ','  + result[Math.floor(Math.random()*5) ] + ','  + result[Math.floor(Math.random()*5) ] + '\n';
  }
  blockCounter++;
  return stringBuffer;
};

var generateMenuObject_100000 = function(max, file, callback) {
  var buffer= '';
  fs.appendFileSync (file, "id,category_id,BREAKFAST, LUNCH, DINNER, BRUNCH, HAPPYHOUR\n", {option:{flags:'a+'}})
  for (var r = 0; r <= max; r++) {
    var result = generateMenuObject_100000_helper() ;
    buffer += result;
    if( r%5000 ===0) {
      fs.appendFileSync(file, buffer, {option:{flags:'a+'}})
      buffer='';
    }
  }
  callback(true);
};

var generateBlock = function ( records,fileNumber, callback) {
  var file = path.resolve('test2' , 'data' + fileNumber + '.csv' );
  generateMenuObject_100000(records, file, (res)=>{
    callback(res);
  });
};

var build =  function ( count=0 ) {
  const records = 100000;
  const dirLimit = 100;
  console.log('LOG: current count', count);

  if(count === dirLimit) {
    console.log('LOG: -->  COMPLETE')
    return ;
  }

  generateBlock(records,count, (bool )=>{
    if (bool) {
      build(++count);
    }
  });
};


build();

