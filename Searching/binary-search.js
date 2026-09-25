/*
Problem: Binary Search

Description:
Given a sorted array of numbers and a target value,
find the index of the target using Binary Search.

If the target is not present, return -1.

Example:
Input:
Array: [10, 20, 30, 40, 50]
Target: 40

Output:
3

Example 2:
Input:
Array: [10, 20, 30, 40, 50]
Target: 60

Output:
-1

Requirements:
- The array is sorted in ascending order.
- Use Binary Search.
- Return the index if the target is found.
- Return -1 if the target is not found.

Expected Time Complexity: O(log n)
Expected Space Complexity: O(1)
*/

function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;

    while(left <= right){
             let mid = Math.floor((left + right) / 2);

         if(arr[mid]===target){
            return mid
        } else if(arr[mid] < target)
              {left = mid + 1}
              else{right=mid - 1}

    }
    return -1;
}
console.log(binarySearch([10, 20, 30, 40, 50], 30));
console.log(binarySearch([10, 20, 30, 40, 50], 60)); 