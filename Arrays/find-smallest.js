// Problem:
// Find the smallest element in an array.

// Input:
// [10, 20, 5, 40, 30]

// Expected Output:
// 5
function findSmallest(arr){
    let smallest = arr[0]
    for(let i=1;i<arr.length;i++){
        if(smallest>arr[i]){
            smallest=arr[i]

        }
    }
    return smallest
}
console.log(findSmallest([10, 20, 5, 40, 30]
))