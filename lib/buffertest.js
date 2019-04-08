const fs = require('fs');

const path = './test-bitmap.bpm';

fs.readFile(path, 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
})

const buf = Buffer.from('./Users/Sean/Downloads/test-bitmap.bmp');

console.log(buf);
