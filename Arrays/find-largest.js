// Problem:
// Find the largest element in an array.

// Input:
// [10, 25, 7, 40, 15]

// Expected Output:
// 40

function findLargest(arr) {
    let largest =arr[0]
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            largest=arr[i]
        }
    }
    return largest

}
console.log(findLargest([10, 25, 7, 40, 15]
))



// Time Complexity:
// Space Complexity: