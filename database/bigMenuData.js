const fs = require('file-system');
const path = require('path');
const sim  = require('./pre-process-faker').fakerBuild();
var counter = 1;

var nObjects = function(count) {
var sample = '';
  for (var i=0; i< count  ;  i++ ) {
    sample +=`{""itemName"":""${sim.word[count ]}"", ""itemDescription"":""${sim.paragraph[count ]}"", ""itemPrice"":""$${sim.price[count]}""}` +  `${ i+1==count? '' : ','}`;
  }
  return `"'[${sample}]'"`
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


// build();

