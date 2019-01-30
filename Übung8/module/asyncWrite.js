const fs = require('fs');
let filename = 'todo2.txt';

let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen\n";

const filepath = "./";

fs.writeFile(filepath + filename, content, (err) => {
    if (err != null) {
        console.error(err.message);
    } else {
        console.log(`File ${filepath + filename} has been saved!`);
    }
});