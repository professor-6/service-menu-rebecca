var faker = require('faker');

exports.fakerBuild = function() {
  var priceList = [];
  var paragraphList = [];
  var wordsList = [];
  var length =10;
  for (var i=0; i<length; i++) {
    priceList.push( faker.commerce.price(0,30,2) );
    paragraphList.push( faker.lorem.sentences(1));
    wordsList.push( faker.lorem.word());
  }
  return {
    price: priceList,
    paragraph: paragraphList,
    word: wordsList,
    length: length,
  };
};





