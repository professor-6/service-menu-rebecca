const faker = require('faker');
const fs = require('file-system');
const path = require('path');
const csvWriter = require('csv-write-stream');
const headers = {
  headers: ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'HappyHour']
}
const writer = csvWriter(headers);

  var generateMenuObject_100000_helper = function() {
    result = {};
    var result = {'Breakfast':[], 'Lunch':[], 'Dinner':[], 'Brunch': [], 'HappyHour':[]};
    var length = faker.random.number({min: 1, max: 3}) ;

    for ( type of headers.headers ) {
      for (var i = 0; i < length ; i++) {
        result[type].push(JSON.stringify ({   itemName: faker.lorem.word(), itemDescription: faker.lorem.paragraph(), itemPrice: "$" + faker.commerce.price()} ));
      }
    }
    return result;
  };

 var generateMenuObject_100000 = function(max, file ,callback) {
  var result;
  writer.pipe(fs.createWriteStream(file, {flags: 'a'}));
    for (var r = 0; r < max; r++) {
      result = generateMenuObject_100000_helper();
      writer.write({
        "id": r,
        "Breakfast": result.Breakfast,
        "Lunch": result.Lunch,
        "Dinnner": result.Dinner,
        "Brunch": result.Brunch,
        "HappyHour": result.HappyHour
      })
    }
    callback(true)
  };

  var generateBlock = function( records,dir, callback) {
    var directory = path.resolve('TESTDATA', 'Block' + String(dir));
    var file = path.resolve('TESTDATA','Block' + String(dir), 'data' + '.csv' );
      fs.mkdir(directory, { recursive: true } , (e)=>{
        generateMenuObject_100000(records, file, (res)=>{
          callback(res);
        });
      });
    };


  var build =  function( count = 0) {
    const records = 100000;
    const dirLimit = 100;

    console.log('CURRENT COUNT', count);

    if(count === dirLimit) {
      process.exit();
    }

    generateBlock(records,count, (bool )=>{
      if (bool) {
        build(++count );
      }
    });
  };


build();
