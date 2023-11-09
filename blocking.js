const fs = require('fs');

//this is a blocking call
const data1 = fs.readFileSync('README.md', 'utf8');




//log => 1 => data
// this is a unblocking call, it execute asynchrone
const data2 = fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}
)
console.log(1)
