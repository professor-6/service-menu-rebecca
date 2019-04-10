var menuData = require("./menudata.js");
const Menu = require("./schema.js");
const db = require("./index.js");

const storeMenus = function() {
  Menu.create(menuData()).then(() => db.close());
};

storeMenus();
