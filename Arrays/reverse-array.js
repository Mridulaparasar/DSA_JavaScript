// Problem:
// Reverse an array.

// Input:
// [10, 20, 30, 40, 50]

// Expected Output:
// [50, 40, 30, 20, 10]

function reverseArr(arr){
   let result = []

for(let i = arr.length-1; i>0; i--) {
     result.push(arr[i])
   }
   return result;

}
console.log(reverseArr([10, 20, 30, 40, 50]
))
    
