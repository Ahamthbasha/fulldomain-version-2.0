//flat the given array without using any built in functions

// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// function flatArray(arr){
//     let result = []
//     for(let i=0;i<arr.length;i++){
//         let element = arr[i]
//         if(typeof element == 'object' && element instanceof Array){
//             let flat = flatArray(element)
//             for(let j=0;j<flat.length;j++){
//                 result[result.length] = flat[j]
//             }
//         }else{
//             result[result.length] = element
//         }
//     }
//     return result
// }

// console.log(flatArray(array))


// //end of each letter would be capital
// const str = 'my name is basha'

// let modified = str.split(' ').map((val)=>{
//     return val.slice(0,val.length-1)+val[val.length-1].toUpperCase()
// })
// console.log(modified)



//3. flat the object 

// const obj = {
//   newObj: {
//     obj2: {
//       obj5: {
//         one: 1,
//       },
//     },
//   },
//   obj3: {
//     obj4: {
//       two: 2,
//     },
//   },
// };


// function flatObj(obj,parentKey='',result={}){
//   for(let key in obj){
//     const fullPath = parentKey ? `${parentKey}.${key}` :key
//     if(typeof obj[key] == 'object' && obj[key] != null && !Array.isArray(obj[key])){
//       flatObj(obj[key],fullPath,result)
//     }else{
//       result[fullPath] = obj[key]
//     }
//   }
//   return result
// }

// console.log(flatObj(obj))

// function flatObject(obj,parentKey='',result={}){
//     for(let key in obj){
//         const fullKey = parentKey ? `${parentKey}.${key}` : key
//         if(typeof obj[key] == 'object' && obj[key] != null && !Array.isArray(obj[key])){
//             flatObject(obj[key],fullKey,result)
//         }else{
//             result[fullKey] = obj[key]
//         }
//     }
//     return result
// }

// console.log(flatObject(obj))

//4.Find the smallest sum and delete

let arr = [[1,2,3],[-10,9,8],[-1,1,0]]
let sum = Infinity
let index = 0
for(let i=0;i<arr.length;i++){

  let compare = 0
  for(let j=i+1;j<arr[i].length;j++){
    compare += arr[i][j]
  }

  sum = Math.min(sum,compare)
  if(compare == sum){
    index = i
  }
}

arr.splice(index,1)

console.log(arr)