// function fibRecursion(n){
//     if(n < 2){
//         return n
//     }
//     return fibRecursion(n-1) + fibRecursion(n-2)
// }

// console.log(fibRecursion(10))

// function factorial(no){
//     if(no < 2){
//         return no
//     }

//     return no * factorial(no-1)
// }

// console.log(factorial(5))

// function printNo(no){
//     if(no == 1){
//         console.log(no)
//         return 
//     }

//     printNo(no-1)

//     console.log(no)
// }

// printNo(10)

// function sumOfN(n){
//     if(n < 2){
//         return n
//     }

//     return n + sumOfN(n-1)
// }

// console.log(sumOfN(5))

// function sumOfDigit(no){
//     if(no < 2){
//         return no
//     }

//     return no % 10 +sumOfDigit(Math.floor(no/10))
// }

// console.log(sumOfDigit(12345))

// function ascending(arr){
//     if(arr.length < 2){
//         return true
//     }

//     return arr[arr.length-1] >= arr[arr.length-2] && ascending(arr.slice(0,arr.length-1))
// }

// console.log(ascending([90,2,3,4,5]))

// function descending(arr){
//     if(arr.length < 2){
//         return true
//     }

//     return arr[arr.length-1] <= arr[arr.length-2] && descending(arr.slice(0,arr.length-1))
// }

// console.log(descending([100,80,170,60,50]))

// function reverseString(str){
//     if(str.length < 2){
//         return str
//     }

//     let first=str[0]
//     let rest=str.slice(1)

//     return reverseString(rest)+first
// }

// console.log(reverseString('basha'))

// function reverseArr(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let first=arr[0]
//     let last=arr.slice(1)

//     let reversedRest=reverseArr(last)
//     reversedRest.push(first)

//     return reversedRest
// }

// console.log(reverseArr([1,2,3,4,5]))