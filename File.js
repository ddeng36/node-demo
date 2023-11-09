const fs = require('fs');

//appendFile would create a new file if it doesn't exist
// if file is exist, it would opne it and append the content
fs.appendFileSync('mynewfile1.txt', 'Hello content!');

//open file
fs.open('mynewfile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Saved!');
}
);

//write file replace the content of the file
fs.writeFile('mynewfile1.txt', 'H1231!', (err) => {
    if (err) throw err;
    console.log('Saved!');
}
);

//delete file
fs.unlink('mynewfile2.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
}
);

//rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed!');
}   
);