const faker = require('faker');
const fs = require('file-system');
const path = require('path');
const csvWriter = require('csv-write-stream');
const headers =  {
  headers: [
    'id',
    'mealType',
    'Item',
    'Des',
    'Price'
  ]
}
const writer = csvWriter(headers);



generateMenuObject = function(max, file ,callback) {
  writer.pipe(fs.createWriteStream(file, {flags: 'a'}));
    const types = ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'HappyHour'] ;
    for (var r = 0; r < max; r++) {
      for ( type of types ) {
        for (var i = 0; i < faker.random.number({min: 2, max: 4}) ; i++) {
          writer.write({
            "id": i,
            "mealType": JSON.stringify(faker.lorem.word()),
            "Item": JSON.stringify( faker.lorem.paragraph()),
            "Des": faker.lorem.paragraph(),
            "Price": faker.commerce.price(),
          })
        }
      }
    }
    callback(true)
  }

  recordGen = function( records,dir, callback) {
    var directory = path.resolve('BIGDATA', 'Block' + String(dir));
    var file = path.resolve('BIGDATA','Block' + String(dir), 'data' + '.csv' );
      fs.mkdir(directory, { recursive: true } , (e) => {
        generateMenuObject(records, file, (res) => {
          callback(res);
        });
      });
    }


    build =  function( count = 0, timeNow = Date.now()) {
    const records = 100000; /* i.e. files limit */
    const dirLimit = 100; /* i.e. directories limit*/

      console.log('CURRENT COUNT', count);
      if(count ===dirLimit) {
        process.exit();
      }

      recordGen(records,count, (bool )=>{
        if (bool) {
          build(++count );
        }
      });
   };


exports.generator =  {
  build
}

