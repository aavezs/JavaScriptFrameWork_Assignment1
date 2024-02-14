// This function is used to node js module 
const fs = require('fs').promises;

// const path is going to use for define the path of txt file 
const filePath = 'sample.txt';

// This section of code is used to run file asynchronously:
// we have used readfile function and file path and utf 8 is method for encription 
fs.readFile(filePath, 'utf8')
// then we have use then to read file content 
    .then(data => {
        console.log('File contents:');
        console.log(data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

    console.log("Script executed successfully."); // Add this line