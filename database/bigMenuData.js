const fs = require('file-system');
const path = require('path');
const sim  = require('./pre-process-faker').fakerBuild();

var generateMenuObject_100000_helper = function() {
  var result = {};
  var idx0 = Math.floor(Math.random()*5) ;
  var idx1 =  idx0 + 1;
  var idx2 =  idx1 + 1;
  var idx3 =  idx2 + 1;
  var idx4 =  idx3 + 1;
  result['0'] = sim.word[idx0] +'-link-'  + sim.paragraph[idx0]+'-link-'+ sim.price[idx0]
  result['1'] = sim.word[idx1] +'-link-'  + sim.paragraph[idx1]+'-link-'+ sim.price[idx1]
  result['2'] =  sim.word[idx2] +'-link-'  + sim.paragraph[idx2]+'-link-'+ sim.price[idx2]
  result['3'] = sim.word[idx3] +'-link-'  + sim.paragraph[idx3]+'-link-'+ sim.price[idx3]
  result['4'] = sim.word[idx4] +'-link-'  + sim.paragraph[idx4]+'-link-'+ sim.price[idx4]
  return result[0] + ',' + result[1]  +', '+ result[2] + ','  + result[3] + ','  + result[4] ;
};

var generateMenuObject_100000 = function(max, file, callback) {
  for (var r = 0; r < max; r++) {
    var result = generateMenuObject_100000_helper() + '\n';
    if(r==0) {
      fs.appendFileSync (file, "BREAKFAST, LUNCH, DINNER, BRUNCH,HAPPYHOUR\n", {option:{flags:'a+'}})
    }else {
      fs.appendFileSync(file, result, {option:{flags:'a+'}})
    }
  }
  callback(true);
};

var generateBlock = function ( records,fileNumber, callback) {
  var file = path.resolve('test' , 'data' + fileNumber + '.csv' );
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


// build();

