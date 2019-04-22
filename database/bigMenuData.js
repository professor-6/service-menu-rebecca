const fs = require('file-system');
const path = require('path');
const csvWriter = require('csv-write-stream');
const sim  = require('./pre-process-faker').fakerBuild();
const writer = csvWriter( {headers: ['0', '1', '2', '3', '4']});

var generateMenuObject_100000_helper = function() {
  var result = {};
  var idx0 = Math.floor(Math.random()*5) ; // faker.random.number({min: 0, max: 4});
  var idx1 =  idx0 + 1;
  var idx2 =  idx1 + 1;
  var idx3 =  idx2 + 1;
  var idx4 =  idx3 + 1;
  result['0'] = JSON.stringify ({name: sim.word[idx0], des: sim.paragraph[idx0], $: sim.price[idx0]});
  result['1'] = JSON.stringify ({name: sim.word[idx1], des: sim.paragraph[idx1], $: sim.price[idx1]});
  result['2'] = JSON.stringify ({ name: sim.word[idx2], des: sim.paragraph[idx2], $: sim.price[idx2]});
  result['3'] = JSON.stringify ({name: sim.word[idx3], des: sim.paragraph[idx3], $: sim.price[idx3]});
  result['4'] = JSON.stringify ({name: sim.word[idx4], des: sim.paragraph[idx4], $: sim.price[idx4]});
  return result;
};

var generateMenuObject_100000 = function(max, file, callback) {
var result;
writer.pipe(fs.createWriteStream(file, {flags: 'a'}));
  for (var r = 0; r < max; r++) {
    result = generateMenuObject_100000_helper();
    writer.write(result);
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
      setTimeout(build, 2700, ++count)
    }
  });
};

build();

// DELIMITER ',' CSV`
// postgres.client.query(`COPY menu_selection (0, 1, 2, 3, 4 ) FROM '${path.resolve(__dirname, '..', 'TESTDATA', 'data0.csv')}' WITH DELIMITER ',' CSV HEADER`, (err, res)=>{
//   console.log(__dirname)
// });