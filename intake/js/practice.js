// //check whether the given string is palindrome or not

// function checkPalindrome(str){
//     if(str.length < 2){
//         return true
//     }

//     let start = str[0]
//     let end = str[str.length-1]

//     if(start != end){
//         return false
//     }

//     return checkPalindrome(str.slice(1,str.length-1))
// }

// console.log(checkPalindrome("malayalam"))
// console.log(checkPalindrome("mysskin"))





// write a program to get the odd Number that appeared more than once

let arr = [7,1,1,7,2,2,7]



let oddNo = []

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            count ++
        }
    }

    if((arr[i]%2 != 0 && count >= 1)){
        let alreadyExist = false

        for(let k=0;k<oddNo.length;k++){
            if(arr[i] == oddNo[k]){
                alreadyExist = true
                break
            }
        }

        if(!alreadyExist){
            oddNo.push(arr[i])
        }
    }
}

console.log(oddNo)