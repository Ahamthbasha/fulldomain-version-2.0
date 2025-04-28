// function fib(no){
//     let arr=[0,1]

//     for(let i=2;i<=no;i++){
//         arr[i]=arr[i-1] + arr[i-2]
//     }

//     return arr[no]
// }

// console.log(fib(5))

// function fact(no){
//     let fact=1

//     for(let i=1;i<=no;i++){
//         fact *= i
//     }

//     return fact
// }

// console.log(fact(5))

// function primeNo(no){
//     if(no < 2){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(no);i++){
//         if(no % i == 0){
//             return false
//         }
//     }

//     return true
// }

// console.log(primeNo(10))

// function powerOfTwo(no){
//     if(no < 1){
//         return false;
//     }
//     else {
//         while(no > 1){
//             if(no % 2 != 0){
//                 return false
//             }
//             no=Math.floor(no/10)
//         }
//     }
//     return true
// }

// console.log(powerOfTwo(7))

// function arrSum(arr){
//     if(arr.length == 0){
//         return 0
//     }

//     let first=arr[0]
//     let rest=arr.slice(1)

//     return arrSum(rest) + first
// }
// console.log(arrSum([1,2,3,4,5]))

//flat array using recursion

// function flatArr(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result=result.concat(flatArr(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(flatArr([2, 4, 5, [4, [9, [9, [0, 4]]]], 5, [4, [44, 5]]]))

//sort

// const arr = ['z', 'a', 'b', 'e', 'g'];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//         }
//     }
// }

// console.log(arr)

// const array=[3,4,5,6,33,10,6]

// function reverse(arr){
//     let start=0
//     let end=arr.length-1

//     while(start <= end){
//         let temp=arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp

//         start++
//         end--
//     }

//     return arr
// }

// console.log(reverse(array))

// const arr=[10,2,3,4,5,6,10,29,30]

// const result=arr.reduce((acc,cur)=>{
    
//     if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
//         return acc 
//     }

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
//         acc.fourth = acc.third
//         acc.third = cur
//     }
//     else if(cur > acc.fourth){
//         acc.fourth = cur
//     }

//     return acc //need to pass updated accumulator
//     //if you did not return this undefined will pass to the next iteration
// },{
//     first:-Infinity,
//     second:-Infinity,
//     third:-Infinity,
//     fourth:-Infinity
// })

// console.log(result.first)
// console.log(result.second)
// console.log(result.third)
// console.log(result.fourth)

// const arr=[10,2,1,3,-10,-2,-1,-100]

// const result=arr.reduce((acc,cur)=>{
//     if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
//         return acc
//     }

//     if(cur < acc.first){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=acc.first
//         acc.first=cur
//     }
//     else if(cur < acc.second){
//         acc.fourth = acc.third
//         acc.third = acc.second
//         acc.second = cur
//     }
//     else if(cur < acc.third){
//         acc.fourth = acc.third
//         acc.third = cur
//     }
//     else if(cur < acc.fourth){
//         acc.fourth = cur
//     }

//     return acc

// },{
//     first:Infinity,
//     second:Infinity,
//     third:Infinity,
//     fourth:Infinity
// })

// console.log(result.first)
// console.log(result.second)
// console.log(result.third)
// console.log(result.fourth)

// let no=12345
// let sum=0
// while(no){
//     let remainder=no % 10
//     sum+=remainder
//     no = Math.floor(no/10)
// }

// console.log(sum)

// function sumOfDigit(no){
//     let take=no.toString().split('')
//     let sum=0
//     for(let i=0;i<take.length;i++){
//         sum+=Number(take[i])
//     }

//     return sum
// }

// console.log(sumOfDigit(no))

// function subArraySum(arr){
//     let cs=arr[0]
//     let max=arr[0]

//     for(let i=1;i<arr.length;i++){
//         cs=Math.max(cs,cs+arr[i])
//         max=Math.max(cs,max)
//     }

//     return max
// }

// console.log(subArraySum([2, 3, 4, 5, 1, 22, 0, 4]))

// let arr=[[1,2,-3],[-11,2,3], [8,-10,2],[-120,1,23,40]]
// let min=Infinity
// let minValue
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i][j] < min){
//             minValue=arr[i][j]
//             min=i
//         }
//     }
// }

// console.log(minValue)
// console.log(min)
// arr.splice(min,1)

// console.log(arr)