/*
Problem: Check if a String is a Palindrome

Description:
Given a string, check whether it reads the same forward and
backward.

A palindrome is a word or string that remains the same when reversed.

Example:
Input:
"madam"

Output:
true

Example 2:
Input:
"hello"

Output:
false

Example 3:
Input:
"racecar"

Output:
true

Requirements:
- Return true if the string is a palindrome.
- Return false if the string is not a palindrome.
- Treat uppercase and lowercase letters as the same.

Expected Time Complexity: O(n)
Expected Space Complexity: O(n)
*/
function isPalindrome(str){
let result="";
for(let i=str.length-1;i>=0;i--){
    result = result + str[i]
    if(str===result){
        return true
    } 
}
return false;

}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("racecar"))

