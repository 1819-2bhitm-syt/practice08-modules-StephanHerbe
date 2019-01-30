
const fs = require('fs');
let filename = 'todo.txt';
let content = fs.readFileSync(filename, {encoding: 'utf-8'});

console.log(`Entire content of ${filename} will be read synchronously
Reading ${filename} finished successfully.
Meanwhile Node.js app couldn't do anything else. 
Content of ${filename}:`);

console.log(content);