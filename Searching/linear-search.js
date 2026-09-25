/*
Problem: Linear Search

Description:
Given an array of numbers and a target value, find the index
of the target value in the array.

If the target value is not present, return -1.

Example:
Input:
Array: [10, 20, 30, 40, 50]
Target: 30

Output:
2

Example 2:
Input:
Array: [10, 20, 30, 40, 50]
Target: 60

Output:
-1

Requirements:
- Return the index of the target element.
- Return -1 if the target is not found.

Expected Time Complexity: O(n)
Expected Space Complexity: O(1)
*/
function linearSearch(arr, target) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i // index
           // return arr[i] for value
        }

    }  return -1;
}
console.log(linearSearch([10, 20, 30, 40, 50], 30));
console.log(linearSearch([10, 20, 30, 40, 50], 60)); 