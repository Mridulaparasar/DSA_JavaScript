/*
Problem: Find the First Occurrence of a Target

Description:
Given a sorted array that may contain duplicate values,
find the index of the first occurrence of the target.

If the target is not present, return -1.

Example:
Input:
Array: [1, 2, 2, 2, 3, 4]
Target: 2

Output:
1

Example 2:
Input:
Array: [1, 2, 2, 2, 3, 4]
Target: 3

Output:
4

Example 3:
Input:
Array: [1, 2, 2, 2, 3, 4]
Target: 5

Output:
-1

Requirements:
- The array is sorted in ascending order.
- Use Binary Search.
- If the target occurs multiple times, return the FIRST index.
- Return -1 if the target is not found.

Expected Time Complexity: O(log n)
Expected Space Complexity: O(1)
*/

function findFirstoccurance(arr,target){
    let left = 0;
    let right = arr.length-1;
    let answer = -1;
    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            
            answer = mid;

            right = mid - 1;

        } else if (arr[mid] < target) {
            // Target right side me hoga
            left = mid + 1;

        } else {
            // Target left side me hoga
            right = mid - 1;
        }
    } return answer;
    
}
console.log(findFirstoccurance([1, 2, 2, 2, 3, 4], 2)); // 1
console.log(findFirstoccurance([1, 2, 2, 2, 3, 4], 3)); // 4
console.log(findFirstoccurance([1, 2, 2, 2, 3, 4], 5)); // -1
