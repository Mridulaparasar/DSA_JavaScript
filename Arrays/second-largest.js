// Problem:
// Find the second largest element in an array.

// Input:
// [10, 25, 7, 40, 15]

// Expected Output:
// 25

function secondLargest(arr){
    let largest= -Infinity;
    let secondLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
           secondLargest = largest
           largest =arr[i] 
        }
        else if(secondLargest<arr[i] && largest!==arr[i]){
            secondLargest=arr[i]
        }

    }
    return secondLargest
}
console.log(secondLargest( [10, 25, 7, 40, 15]
))