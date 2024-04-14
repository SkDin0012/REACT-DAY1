const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 const intp=userInput[0];    
    
 const outpp=intp.split('').join(',');
    console.log(outpp);
});

