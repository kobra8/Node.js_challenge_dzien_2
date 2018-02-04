//Twój kod
const fs = require('fs');

fs.readdir('data/zadanie02', (err, files) => {
  files.forEach(file => {
    console.log(file);
  })
})