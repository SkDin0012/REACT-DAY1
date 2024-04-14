// 
const readline = require("readline");

// Create readline interface to read input
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let userInput = []; // Array to store user input

// Event listener for reading each line of input
rl.on("line", (data) => {
   userInput.push(data); // Store each line of input
});

// Event listener for end of input
rl.on("close", () => {
   // Input processing
   if (userInput.length < 2) {
       console.log("Insufficient input. Please provide the size of the array and array elements.");
       return;
   }

   const n = parseInt(userInput[0]); // Size of the array
   const arr = userInput[1].split(' ').map(Number); // Array elements as numbers

   if (arr.length !== n) {
       console.log("Number of array elements does not match the specified size.");
       return;
   }

   // Function to find the number repeated twice
   function findSingleDuplicate(arr) {
       let ones = 0;
       let twos = 0;

       for (let num of arr) {
           // Update twos to mark bits that appear twice
           twos |= (ones & num);

           // Update ones to mark bits that appear once
           ones ^= num;

           // Mask to clear bits that appear three times
           let commonMask = ~(ones & twos);

           // Clear common bits from ones and twos
           ones &= commonMask;
           twos &= commonMask;
       }

       return ones;
   }

   // Find the number that is repeated twice
   const result = findSingleDuplicate(arr);
   console.log("The number repeated twice is:", result);
});