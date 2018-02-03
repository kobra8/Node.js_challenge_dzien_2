const fs = require('fs');

fs.readFile('E30.txt', 'utf8', (err, data) => {
  if (err === null) {
    console.log('Read file', data);
  }
  else {
    console.log('Error read file', err);
  }
});

fs.writeFile('log.txt', 'Hello World', (err => {
  if (err === null) {
    console.log('Save file success!');
  }
  else {
    console.log('Error save file', err);
  }
}))

fs.readdir('./data/zadanie01',(err, files) => {
  if(err === null) {
    console.log("File list:");
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log("Error list file", err);
  }
})