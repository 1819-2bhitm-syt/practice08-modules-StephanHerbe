const fs = require('fs');
let filename = 'todo.txt';

console.log(`Entire content of ${filename} will be read asyncronously.`);

fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if (/*err != null*/err) {
        console.error(err.message);
    } else {
        console.log(`Reading ${filename} finished successfully.`);
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);
    }
});

console.log(`Meanwhile Node.js app can do something else
...`);