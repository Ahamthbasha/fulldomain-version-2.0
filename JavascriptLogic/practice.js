//flat the given array without using any built in functions

// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// function flatArray(arr){
//   let result = []

//   for(let i=0;i<arr.length;i++){
//     let element = arr[i]
//     if(Array.isArray(element)){
//       let flat = flatArray(element)
//       for(let j=0;j<flat.length;j++){
//         result[result.length] = flat[j]
//       }
//     }else{
//       result[result.length] = element
//     }
//   }
//   return result
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

// function flatObject(obj,parentKey='',result={}){
//   for(let key in obj){
//     let fullPath = parentKey ? `${parentKey}.${key}` : key
//     if(typeof obj[key] === 'object' && obj[key] != null){
//       flatObject(obj[key],fullPath,result)
//     }else{
//       result[fullPath]=obj[key]
//     }
//   }

//   return result
// }

// console.log(flatObject(obj))



//4.Find the smallest sum and delete

// let arr = [[1,2,3],[-10,9,8],[-1,1,0]]
// let sum = Infinity
// let index = 0
// for(let i=0;i<arr.length;i++){

//   let compare = 0
//   for(let j=i+1;j<arr[i].length;j++){
//     compare += arr[i][j]
//   }

//   sum = Math.min(sum,compare)
//   if(compare == sum){
//     index = i
//   }
// }

// arr.splice(index,1)

// console.log(arr)


//flat the object

// let obj = {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }

// function flatObj(obj,parentKey='',result={}){
//   for(let key in obj){
//     let fullPath = parentKey ? `${parentKey}.${key}` : key
//     if(typeof obj[key] == 'object' && obj[key] !== null){
//       flatObj(obj[key],fullPath,result)
//     }else{
//       result[fullPath] = obj[key]
//     }
//   }
//   return result
// }

// console.log(flatObj(obj))


////////////////////////////////////////////////////////////

//deep clone

// const original = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } }
// };

// const copy = deepClone(original);

// function deepClone(obj){
//   if(typeof obj !== 'object' && obj !== null){
//     return obj
//   }

//   const copy = Array.isArray(obj) ? [] : {}

//   for(let key in obj){
//     copy[key] = deepClone(obj[key])
//   }

//   return copy
// }

// console.log(copy)

//Reconstruct Nested object from flattened key

// Input:
// let obj ={
//   "a.b.c": 1,
//   "d": 2
// }

// Output:
// {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }

// let result = {}
// for(let key in obj){
//   let parts = key.split('.')
//   let current = result
//   for(let i=0;i<parts.length;i++){
//     let part = parts[i]
//     if(i == parts.length-1){
//       current[part] = obj[key]
//     }else{
//       if(!current[part]){
//         current[part] = {}
//       }
//       current = current[part]
//     }
//   }
// }

// console.log(result)


const orders = [
  { id: 1, customer: "Alice", items: ["apple", "banana"] },
  { id: 2, customer: "Bob", items: ["banana", "orange"] },
  { id: 3, customer: "Alice", items: ["orange"] },
  { id: 4, customer: "Charlie", items: ["apple", "apple","banana"]}
];


let customerMap = new Map()

for(let order of orders){
  if(!customerMap.has(order.customer)){
    customerMap.set(order.customer,new Set(order.items))
  }else{
    const itemSet = customerMap.get(order.customer)
    order.items.forEach((val)=>{
      itemSet.add(val)
    })
  }
}

console.log(customerMap)


const mergedList = []

for(let [customer,items] of customerMap){
  mergedList.push({
    customer,
    items:[...items]
  })
}

console.log(mergedList)