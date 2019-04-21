const faker = require('faker');
const fs = require('file-system');
const path = require('path');
const csvWriter = require('csv-write-stream');
const headers = { headers: ['0', '1', '2', '3', '4']};
const  sim  = require('./pre-process-faker').fakerBuild();
const writer = csvWriter(headers);

var generateMenuObject_100000_helper = function() {
  var result = {};
  var idx =  faker.random.number({min: 0, max: 4}) ;
  var mealType = (['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'HappyHour'][idx] );
  result['0'] = JSON.stringify ({meal: mealType, itemName: sim.word[idx], itemDescription: sim.paragraph[idx], itemPrice: "$" + sim.price[idx]});
  result['1'] = JSON.stringify ({meal: mealType, itemName: sim.word[idx], itemDescription: sim.paragraph[idx], itemPrice: "$" + sim.price[idx]});
  result['2'] = JSON.stringify ({meal: mealType, itemName: sim.word[idx], itemDescription: sim.paragraph[idx], itemPrice: "$" + sim.price[idx]});
  result['3'] = JSON.stringify ({meal: mealType, itemName: sim.word[idx], itemDescription: sim.paragraph[idx], itemPrice: "$" + sim.price[idx]});
  result['4'] = JSON.stringify ({meal: mealType,  itemName: sim.word[idx], itemDescription: sim.paragraph[idx], itemPrice: "$" + sim.price[idx]});
  return result;
};

var generateMenuObject_100000 = function(max, file, callback) {
writer.pipe(fs.createWriteStream(file, {flags: 'a'}));
  for (var r = 0; r < max; r++) {
    writer.write( generateMenuObject_100000_helper() );
  }
  callback(true)
};

var generateBlock = function( records,fileNumber, callback) {
  var file = path.resolve('TESTDATA' , 'data' + fileNumber + '.csv' );
    generateMenuObject_100000(records, file, (res)=>{
      callback(res);
    });
  };

var build =  function( count=0 ) {
  const records = 100000;
  const dirLimit = 100;
  console.log('LOG: current count', count);

  if(count === dirLimit) {
    console.log('LOG: -->  COMPLETE')
    return ;
  }

  generateBlock(records,count, (bool )=>{
    if (bool) {
      setTimeout(build, 1500, ++count)
    }
  });
};


// build();
