var faker = require('faker');
var fs = require('file-system');

types =  { 'Breakfast': 3, 'Lunch': 3, 'Dinner': 3, 'Brunch': 3, 'HappyHour': 3 }

var bigData = function() {
  this.path = "BIGDATA/test_";
}

bigData.prototype.recordGen = function(id, records) {
  var obj = {};
  var file = `${this.path}${id}.json`;


  fs.open(file, 'wx', (err, fd) => {
    console.log(fd, 'file desrc')
    if (err)  console.log(fd, 'exists');;

    for (var r=0; r<records; r ++) {
      for (var key in types ) {
        obj[key] = [];
        for (var i = 0; i< types[key]; i++ ) {
          obj[key].push({ itemName: faker.lorem.word(), itemDescription: faker.lorem.paragraph(), itemPrice: "$" + faker.commerce.price()});
        }
        obj[key].push( "0xDEADBEEF"); //marker
      }


      fs.appendFile(fd,  JSON.stringify(obj), 'UTF8', (err) => {

        fs.close(fd, (err) => {
          // if (err)  console.log('file desrc error');
        });
        if (err) console.log('append file error');
      });

    }


    });


}

  bigData.prototype.build_10_000 =  function() {
    const nodes = 100;
    const records = 1000;
    var timeNow = Date.now();

    for (var i=0; i < nodes ; i++) {
      this.recordGen(i,records);
      setTimeout(this.terminate.bind(this),10000,i);

    }
    console.log('time', Date.now() - timeNow)
    timeNow=Date.now()

  }

  bigData.prototype.terminate = function(id) {
    // console.log(read  /y);
    const ext = '.json';
    var file = this.path + id + ext;

    // file processed remove from directory
    console.log('removing file:', id);
    fs.fs.unlink(file, (e)=>{
      if(e) {
        console.log('err')
      }
    });
  }

exports.generator = new bigData()