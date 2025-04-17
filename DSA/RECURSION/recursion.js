// function fibRecusion(n){
//     if(n < 2){
//         return n
//     }

//     return fibRecusion(n-1)+fibRecusion(n-2)
// }
// console.log(5)

// function fact(n){
//     if(n == 0){
//         return 1
//     }

//     return n*fact(n-1)
// }

// console.log(fact(5))

// function printNo(n){
//     if(n==1){
//         console.log(n)
//         return 
//     }
//     printNo(n-1)
//     console.log(n)
// }
// printNo(10)

// function sumOfN(n){
//     if(n==1){
//         return 1
//     }

//     return n+(sumOfN(n-1))
// }

// console.log(sumOfN(5))

// function sumOfDigit(n){
//     if(n < 2){
//         return n
//     }

//     return (n%10)+sumOfDigit(Math.floor(n/10))
// }
// console.log(sumOfDigit(1111))

// function fib(n){
//     if(n < 2){
//         return n
//     }

//     return fib(n-1)+fib(n-2)
// }

// console.log(fib(10))

//check array ascending or descending

// function checkArray(arr,n){
//     if(n < 2){
//         return true
//     }

//     return arr[n-1] >= arr[n-2] && checkArray(arr,n-1)
// }
// let arr=[1,2,3,4,5,5]
// console.log(checkArray(arr,arr.length))

// function checkArray(arr,n){
//     if(n < 2){
//         return true
//     }
//     return arr[n-1] <= arr[n-2] && checkArray(arr,n-1)
// }
// let arr=[5,5,4,3,2,1]
// console.log(checkArray(arr,arr.length))

