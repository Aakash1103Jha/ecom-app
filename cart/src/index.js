const { faker } = require('@faker-js/faker');

const count = faker.random.numeric(3);

document.querySelector('.cart-list').innerHTML = `<div>You have ${count} items in your cart</div>`;