//check whether the given string is palindrome or not

function checkPalindrome(str){
    if(str.length < 2){
        return true
    }

    let start = str[0]
    let end = str[str.length-1]

    if(start != end){
        return false
    }

    return checkPalindrome(str.slice(1,str.length-1))
}

console.log(checkPalindrome("malayalam"))
console.log(checkPalindrome("mysskin"))