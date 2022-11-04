const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = "";

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num = Number(input[0]);
    // console.log(Number(input[0]));
    for (let i = 1; i < num + 1; i++){
        str += "*";
        console.log(str);
    }
});