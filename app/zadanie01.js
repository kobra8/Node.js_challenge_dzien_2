//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (err, data) => {
  if (err === null) {
    let dataParsed = JSON.parse(data);
    console.log(dataParsed);
    let sumNumbers = (a,b) => a + b;
    let sum = dataParsed.reduce(sumNumbers);
    console.log(sum);

    fs.writeFile('data/zadanie01/sum.txt',sum , err => {
      if (err === null) {
        console.log("Save file success!");
      }
      else {
        console.log("Unable save file", err);
      }

    });
  }
  else {
    console.log("Unable read file", err)
  }
})
