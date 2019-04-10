var faker = require("faker");

function menuData() {
  let allMenus = [];
  for (let i = 1; i <= 100; i++) {
    let menu = {
      menuId: i,

      Breakfast: [
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        }
      ],

      Lunch: [
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        }
      ],

      Dinner: [
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        }
      ],

      Business: [
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        }
      ],

      HappyHour: [
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        },
        {
          itemName: faker.lorem.word(),
          itemDescription: faker.lorem.paragraph(),
          itemPrice: "$" + faker.commerce.price()
        }
      ]
    };
    allMenus.push(menu);
  }
  return allMenus;
}

module.exports = menuData;
