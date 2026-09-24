/*
Problem: Count Characters in a String

Description:
Given a string, count how many times each character appears
in the string.

Example:
Input:
"hello"

Output:
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}

Example 2:
Input:
"apple"

Output:
{
    a: 1,
    p: 2,
    l: 1,
    e: 1
}

Requirements:
- Count the frequency of each character.
- Return the result as an object.
- Treat uppercase and lowercase characters as the same.

Expected Time Complexity: O(n)
Expected Space Complexity: O(n)
*/
function countChar(str){
    let count ={}
    for(let i=0;i<str.length;i++){
        if(count[str[i]]){
            count[str[i]]++
        } else{count[str[i]]=1}
    }
    return count;
}
console.log(countChar("hello"));
console.log(countChar("apple"))