/*
Problem: Find the First Non-Repeating Character

Description:
Given a string, find the first character that appears only once
in the entire string.

If every character appears more than once, return null.

Example:
Input:
"swiss"

Output:
"w"

Explanation:
s appears 3 times
w appears 1 time
i appears 1 time

The first character that appears only once is "w".

Example 2:
Input:
"aabbcde"

Output:
"c"

Example 3:
Input:
"aabb"

Output:
null

Requirements:
- Return the first non-repeating character.
- If no such character exists, return null.

Expected Time Complexity: O(n)
Expected Space Complexity: O(n)
*/

function firstNonreap(str){
    let count = {}
    for(let i=0;i<str.length;i++){
        if(count[str[i]]){
         count[str[i]]++
        } else {count[str[i]]=1
                
        }
    }

    for(let i=0;i<str.length; i++){
        if(count[str[i]]===1){
            return str[i]
        }
    }
    return null;
} 
console.log(firstNonreap("swiss"));
console.log(firstNonreap("aabbcde"));
console.log(firstNonreap("aabb"));