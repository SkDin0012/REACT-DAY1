//sort method:

// let n=[1,3,6,2,5,4,20,21,90]

//deending order

// function c(a,b){
//     if(a<b){
//         return 1;
//     }
//     else if(a==b){
//         return 0;
//     }
//     else{
//         return -1;
//     }
// }
// n.sort(c);
// console.log(n);


// assending order

//deending order

// function c(a,b){
//     if(a>b){
//         return 1;
//     }
//     else if(a==b){
//         return 0;
//     }
//     else{
//         return +1;
//     }
// }
// n.sort(c);
// console.log(n);

// n.sort((a,b)=>{
//    return a-b;
// })
// console.log(n);

// factorial number:



// for(let d=2;d<a;d++){
//     if(a%d===0){
//         console.log(d);
//     }
// }

// function findFactors(number){
//     const factors=[];
//     for(let d=2;d<number;d++){
//         if(number%d==0){
//             factors.push(d);
//         }
//     }
//     return factors;
// }

// let num1=2;
// let num2=3;

// let fn1=findFactors(num1);
// let fn2=findFactors(num2);

// const cf=[];

// for(let factors of fn1){
//     if(fn2.includes(factors)){
//         cf.push(factors);
//     }
// }
// console.log(Math.max(...cf));

// prime factors of the number//


function findNextPrime(prime){

    for(prime++; ;prime++){
        if(isPrime(prime)){
            return prime;
        }

    }

}
function isPrime(prime){
    for(let divisor=2;divisor<prime;divisor++){
        if(prime%divisor==0){
            return false;
        }
        return true;
    }

}
function HCF(number){

    let primeFactor=2;
    let prims=[];
   
    while(number>1){
        while(number%primeFactor==0){
            prims.push(primeFactor);
            number=number/primeFactor;
        }
        
        primeFactor=findNextPrime(primeFactor);
    }
    return prims;
    
}
const primefactornum1=HCF(60);
const primefactornum2=HCF(75);
console.log(primefactornum1);
console.log(primefactornum2);


// frequencies table

let frequencies={};

for(let factor of primefactornum1){
    frequencies[factor]=0;
}
for(let factor of primefactornum1){
    frequencies[factor]++;
}

let frequencies1={};

for(let factor of primefactornum2){
    frequencies1[factor]=0;
}
for(let factor of primefactornum1){
    frequencies1[factor]++;
}

let product=1;
for(let k in frequencies){
    if(frequencies1[k]){

        let lessFrequency=Math.min(frequencies[k]);
        frequencies1[k];

        while(lessFrequency--){
            product+=Number(k);
        }
    }
}
console.log(product);













