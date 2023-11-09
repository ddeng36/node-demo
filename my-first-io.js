const fs = require('fs');

//this is a blocking call
const buffer = fs.readFileSync('README.md');
const str = buffer.toString();
console.log(str.split('\n').length);