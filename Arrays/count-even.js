// Problem:
// Count the number of even elements in an array.

// Input:
// [10, 15, 20, 7, 8, 11]

// Expected Output:
// 3

function evenCount(arr){
    count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++
        }
    }
    return count
}
console.log(evenCount( [10, 15, 20, 7, 8, 11]
))