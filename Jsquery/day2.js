// let age=10;
// let AddharCard=false;
// let hasVoterId=true;

// console.log(age>=18&&(AddharCard||hasVoterId));


// nested statement:

// let f=5
// let s=4
// let t=6

// if(f>s && f>t){
//     console.log(f," is the greatest numbver");
// }
// else{
//     if(s>t){
//         console.log(s," is the greatest numbver");
//     }
//     else{
//         console.log(t," is the greatest numbver");
//     }
// }

// swith case 

// let v=2;
// switch (v){
//     case 1:
//         console.log('this is one');
//         break;
//     case 2:
//         console.log('this is two');
//         break;
//     default:
//         console.log('error');    

// }
// let n1=1;
// let n2=1;
// let n3=1;
// let great;

// switch (true){
//     case (n1>n2 && n1>n3):
//         great=n1;
//        break;
//     case (n2>n1 && n2>n3):
//         great=n2;
//         break;
//     case (n3>n1 && n3>n2):
//         great=n3;
//         break
//     default:
//         great="number are eual"  

// }
// console.log("the greatest number",great);

// let f=5
// let s=4
// let t=6

// switch( f>s && f>t){
//     case true:
//     console.log(f," is the greatest numbver");
//     break
//    case false:
//     switch(s>t){
//     case true:
//         console.log(s," is the greatest numbver");
//         break;
//     case false:    
//         console.log(t," is the greatest numbver");
//         break;
//     }
//     break
// }

//ternary operator

// let f1=4
// let f2=9
//  f1>f2? console.log(f1,'is greater number'): console.log(f2,'is greater number');

// const readline = require("readline");

// const inp = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// inp.question("enter the value",function(input){
//  const N=parseInt(input);
 
//  const sum = (N * (N + 1)) / 2;
// console.log(sum);
//    inp.close(); 
// });

// let count=0;
// while(count <3){
//     console.log('hello');
//     count++;
// }

// for(let count=0;count<3;count++){
//     console.log("hello");
// }

///do  loop while
// let count=5;
// do{
//     console.log('hello');
//     count++
// }while(count<3)

// Array:

//array are zero-indexed and can stored multiple data types

let numbers=[4,5 ,6,7,8,9]
// numbers[0]=10;
numbers.push(211);
numbers.unshift(1222);
numbers.shift(1222);
numbers.pop(211);

numbers.splice(2,1,11)
console.log(numbers);












 

