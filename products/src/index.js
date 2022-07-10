const { faker } = require('@faker-js/faker');

let musicData = '';

for (let i = 0; i < 10; i++) {
    musicData += `<div>name: ${faker.music.songName()} | genre: ${faker.music.genre()}</div>`;

}
document.querySelector('.product-list').innerHTML = musicData;
