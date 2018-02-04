//Twój kod
const fs = require('fs');

let input = process.argv.slice(2)[0];
console.log(input);

fs.readFile(input, 'utf8', (err, data) => {

  let result = "";
  if(err === null) {
    console.log("Read success");
    console.log(data);
    let count = 0;
    for( let char of data ) {
      if(count% 2 !== 0) {
      result+=char;
      }
      else {
        result+=char.toUpperCase();
      }
      count ++
    };
    console.log(result);
    
    
    fs.writeFile('data/zadanieDnia/test.txt', result, err => {
      if(err === null) {
        console.log("Success save file!");
      }
      else {
        console.log("Error save", err);
      }
    })

  }
  else {
    console.log("Read error", err)
  }

})