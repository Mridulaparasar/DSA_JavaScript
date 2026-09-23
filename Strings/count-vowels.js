/*
Problem: Count Vowels in a String

Description:
Given a string, count the total number of vowels present in the string.

Vowels:
a, e, i, o, u

Example:
Input:
"hello"

Output:
2

Example 2:
Input:
"JavaScript"

Output:
3

Requirements:
- Count both uppercase and lowercase vowels.
- Return the total count.
- Do not use a regular expression.

Expected Time Complexity: O(n)
Expected Space Complexity: O(1)
*/

function countVowel(str){
    let vowels = [ 
        "a","e","i","o","u"
    ]

let count = 0;

for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        count++
    }
}
return count;
}
console.log(countVowel("HELLO"))
console.log(countVowel("JavaScript"))