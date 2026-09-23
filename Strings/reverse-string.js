/*
Problem: Reverse a String

Description:
Given a string, reverse the string and return the reversed string.

Example:
Input:
"hello"

Output:
"olleh"

Example 2:
Input:
"JavaScript"

Output:
"tpircSavaJ"

Requirements:
- Do not use the built-in reverse() method.
- Return the reversed string.

Expected Time Complexity: O(n)
Expected Space Complexity: O(n)
*/

function reverseStr(str){
    let result = " ";
    for(let i=str.length-1; i>=0; i--){
        result+=str[i]
    }
    return result
}
console.log(reverseStr("hello"))
console.log(reverseStr("JavaScript"))
// second method 

function reverseStr(str){
    let resultstr = str.split(" ").reverse().join("");
    return resultstr;
}
console.log(reverseStr("hello"))
console.log(reverseStr("JavaScript"))

