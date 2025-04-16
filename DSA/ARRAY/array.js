// function fibonocci(n){
//     let fib=[0,1]

const { stat } = require("fs")
const { cursorTo } = require("readline")

//     for(let i=2;i<=n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }

//     return fib
// }

// console.log(fibonocci(5))

// function factorial(no){
//     let n=1

//     for(let i=1;i<=no;i++){
//         n*=i
//     }
//     return n
// }

// console.log(factorial(10))

// function primeNo(no){
//     if(no<=1){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(no);i++){
//         if(no % i === 0){
//             return false
//         }
//     }

//     return true
// }

// console.log(primeNo(10))

// function powerOfTwo(n){
//     if(n<=1){
//         return false
//     }
//     else{
//         while(n > 1){
//             if(n % 2 != 0){
//                 return false
//             }
//             n=Math.floor(n/2)
//         }
//     }
//     return true
// }

// console.log(powerOfTwo(10))

// function sum(arr){
//     if(arr.length == 0){
//         return 0
//     }

//     return sum(arr.slice(0,arr.length-1))+arr[arr.length-1]
// }

// console.log(sum([1,2,3,4,5]))

//flat an array using recursion

// function flatArray(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result=result.concat(flatArray(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatArray([2, 4, 5, [4, [9, [9, [0, 4]]]], 5, [4, [44, 5]]]))

// const arr = ['z', 'a', 'b', 'e', 'g'];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] > arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }

// console.log(arr)

//largest using reduce
// const arr=[1,2,66,3,65,21,45,3]

// const result=arr.reduce((acc,cur)=>{
    // if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
    //     return acc;
    // }
//     if(cur > acc.first){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=acc.first
//         acc.first=cur
//     }
//     else if(cur > acc.second){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=cur
//     }
//     else if(cur > acc.third){
//         acc.fourth=acc.third
//         acc.third=cur
//     }
//     else if(cur > acc.fourth){
//         acc.fourth=cur
//     }
//     return acc
// },{
//     first:-Infinity,
//     second:-Infinity,
//     third:-Infinity,
//     fourth:-Infinity
// })

// console.log("1",result.first)
// console.log("2",result.second)
// console.log("3",result.third)
// console.log("4",result.fourth)


//smallest using reduce
// const arr = [4,6,-19,4,1,0,-19,34,43]

// const result=arr.reduce((acc,cur)=>{

//     if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
//         return acc;
//     }
//     if(cur < acc.first){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=acc.first
//         acc.first=cur
//     }
//     else if(cur < acc.second){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=cur
//     }
//     else if(cur < acc.third){
//         acc.fourth=acc.third
//         acc.third=cur
//     }
//     else if(cur < acc.fourth){
//         acc.fourth=cur
//     }

//     return acc
// },{
//     first:Infinity,
//     second:Infinity,
//     third:Infinity,
//     fourth:Infinity
// })

// console.log('1',result.first)
// console.log('2',result.second)
// console.log('3',result.third)
// console.log('4',result.fourth)

// const array=[3,4,5,6,33,10,6]

// function reverse(arr){
//     let start=0
//     let end=arr.length-1

//     while(start < end){
//         let temp=arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp

//         start++
//         end--

//     }

//     return arr
// }

// console.log(reverse(array))

// function sumOfDigits(no){
// let str=no.toString()
// let sum=0
// for(let i=0;i<str.length;i++){
//     sum+=Number(str[i])
// }
// return sum
// }
// let no=5050
// console.log(sumOfDigits(no))

// function sumOfDigits(no){
//     let givenNo=no
//     let sum=0
//     while(givenNo > 0){
//         let remainder=givenNo % 10
//         sum+=remainder
//         givenNo=Math.floor(givenNo/10)
//     }
//     return sum
// }

// console.log(sumOfDigits(111))

// function reverseArray(arr){
//     if(arr.length == 0){
//         return []
//     }

//     let first=arr[0]
//     let rest=arr.slice(1)
//     let reversedArr=reverseArray(rest)

//     return reversedArr.concat(first)
// }

// console.log(reverseArray([1,2,3,4,5]))


// function subArraySum(arr){
//     let cs=0
//     let max=0

//     for(let i=0;i<arr.length;i++){
//         cs+=arr[i]

//         max=Math.max(cs,max)
//     }
//     return max
// }

// console.log(subArraySum([-3, -2, -1]))

// function subArray(arr){
//     let cs=arr[0]
//     let max=arr[0]

//     for(let i=1;i<arr.length;i++){
//         cs=Math.max(arr[i],cs+arr[i])
//         max=Math.max(cs,max)
//     }

//     return max
// }

// console.log(subArray([2, 3, 4, 5, 1, 22, 0, 4]))

