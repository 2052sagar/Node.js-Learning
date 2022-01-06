//method one to import file system
//const fs = require('fs');

//method two to call all the function in file system
const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `\n Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)

