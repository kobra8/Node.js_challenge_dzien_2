//Twój kod
const fs = require('fs');

let input = process.argv.slice(2)[0];
console.log(input);

fs.readFile(input, 'utf8', (err, data) => {

  if(err === null) {
    console.log("Read success");
    console.log(data);

    for( let char of data ) {
      console.log(char);
    };
    
    
    // fs.writeFile(input, err => {
    //   if(err === null) {
    //     console.log("Success save file!");
    //   }
    //   else {
    //     console.log("Error save", err);
    //   }
    // })

  }
  else {
    console.log("Read error", err)
  }

})