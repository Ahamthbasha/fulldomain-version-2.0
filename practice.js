// function greet(message1,message2){
//     return `${this.name} ${message1} and ${message2}`
// }

// const obj={
//     name:'ahamathbasha'
// }

// // const result = greet.apply(obj,["good morning","hope the best"])

// const result = greet.bind(obj)

// console.log(result('good morning','hope the best'))

// function* generateNo(){
//     let i=100

//     while(i>0){
//         yield i

//         i=i-2
//     }
// }

// let even = generateNo()

// for(let i=1;i<=50;i++){
//     if(i%2 == 1){
//         console.log(even.next().value)
//     }else{
//         even.next()
//     }
// }

// function currying(n1){
//     return function(n2){
//         return function(n3){
//             return n1+n2+n3
//         }
//     }
// }

// console.log(currying(1)(2)(3))

// function obj(name,location,price){
//     return {
//         name:name,
//         location:location,
//         price:price
//     }
// }

// let object = obj("ahamathbasha","msk",200)

// console.log(object)


// const person = {
//     name:"ahamathbasha",
    

//     get fullName(){
//         return `${this.name}`
//     },

//     set fullName(name){
//         this.name = name
//     }
// }

// console.log(person.fullName)

// person.name = 'basha'

// console.log(person.fullName)


// const obj={
//     name:"ahamathbasha",
//     age:20
// }

// const handler={
//     set(target,key,value){
//         target[key] = value
//     },

//     get(target,key){
//         return target[key] || null
//     }
// }

// const proxy = new Proxy(obj,handler)

// proxy.name ="manick basha"

// console.log(proxy.name)

// console.log(obj)


// function deepCopy(obj){
//     if(obj === null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

// }

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let name of propNames){
//         let value = obj[name]

//         if(value && typeof value === 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// function factorial(no){
//     let fact = 1
//     for(let i=1;i<=no;i++){
//         fact*=i
//     }
//     return fact
// }

// const memoization =(fn) =>{
//     let cache ={}

//     return function(args){
//         let no = args

//         if(no in cache){
//             return cache[no]
//         }
//         else{
//             let result = fn(args)
//             cache[no] = result
//             return result
//         }
//     }
// }

// const memoFactorial = memoization(factorial)

// console.log(memoFactorial(5))


// const ab =[[1],[23],[32],[76]]

// let output =[]


// for(let val of ab){
//     for(let value of val){
//         output.push({a:value})
//     }
// }

// console.log(output)

// let input =[4,5,2,25]
// let output = []

// for(let i=0;i<input.length;i++){
//     let nextGreater = -1
//     for(let j=i+1;j<input.length;j++){
//         if(input[j] > input[i]){
//             nextGreater = input[j]
//             break
//         }
//     }
//     output.push(nextGreater)
// }

// console.log(output)

// function findSmallest(arr){
//   const result =  arr.reduce((acc,cur)=>{

//     if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
//         return acc
//     }

//         if(cur < acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur < acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur < acc.third){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur < acc.fourth){
//             acc.fourth = cur
//         }

//         return acc

//     },{
//         first:Infinity,
//         second:Infinity,
//         third:Infinity,
//         fourth:Infinity
//     })

//     return result
// }

// const arr = [4, 12, 7, 3, 19, 5, 10, 3, 4, 7];

// console.log(findSmallest(arr));
// Expected Output: { first: 19, second: 12, third: 10, fourth: 7 }

// function findLargest(arr){
//     const result = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
//             return acc
//         }

//         if(cur > acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur > acc.third){
//             acc.fourth = acc.third
//             acc.third =  cur
//         }
//         else if(cur > acc.fourth){
//             acc.fourth = cur
//         }

//         return acc

//     },{
//         first:-Infinity,
//         second:-Infinity,
//         third:-Infinity,
//         fourth:-Infinity
//     })

//     return result
// }

// const arr = [4, 12, 7, 3, 19, 5, 10, 3, 4, 7];


// let fourth = findLargest(arr).fourth
// console.log(fourth)

// const arr = [4, -2, 12, -5, 3, 0, -1, 7, -5];

// const evenNo = arr.filter((no)=>{
//     return no % 2 == 0 
// })

// console.log(evenNo)

// const square = arr.map((no)=>{
//     return no * no
// })

// console.log(square)

// const sum = arr.reduce((acc,cur)=>{
//     if(cur > 0){
//      acc+=cur
//     }
//     return acc
// },0)

// console.log(sum)

// const sum = arr.reduce((acc,cur)=>{
//     return acc+cur
// })

// console.log(sum)

// const result = arr.flatMap((x)=>[x,x*2])
// console.log(result)

// function modify(input){
//     return input.toUpperCase()
// }

// function execute(callback){
//     let name ='ahamathbasha'

//      return callback(name)
// }

// console.log(execute(modify))

// const obj = {
//     name:"ahamathbasha",
//     address: "msk"
// }

// const handler = {
//     set(target,key,value){
//         target[key] = value
//         return true
//     },

//     get(target,key){
//         return target[key] || null
//     }
// }

// const proxy = new Proxy(obj,handler)

// console.log(proxy.name)

// proxy.name = 'i am the king of the world'

// console.log(proxy.name)

// console.log(obj.name)


// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         getUser(id,(err,user)=>{
//             resolve(user)
//             reject(err)
//         })
//     })
// }

// async function getUser(id,callback){
//     try {
//         if(id > 0){
//             const data = await callback(id)
//             console.log(data)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length-1

//     while(start <= end){
//         let mid = arr[Math.floor((start+end)/2)]

//         if(mid == target){
//             return mid
//         }
//         else if(target < mid){
//             end = mid-1
//         }else{
//             start = mid+1
//         }
//     }

//     return 'no match'
// }

// const arr = [1, 3, 5, 7, 9, 11, 13];  // Sorted array
// const target = 7;

// const result = binarySearch(arr, target);
// console.log(result); // Expected output: 7


// function binarySearch(arr,target){
//     return recursiveBinary(arr,target,0,arr.length-1)
// }

// function recursiveBinary(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let mid = arr[Math.floor(Math.floor(leftIndex+rightIndex)/2)]

//     if(mid == target){
//         return mid
//     }
//     else if(target < mid){
//         return recursiveBinary(arr,target,leftIndex,mid-1)
//     }
//     else{
//         return recursiveBinary(arr,target,mid+1,rightIndex)
//     }
// }


// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//         let mid = arr[Math.floor((start+end)/2)]

//         if(target == mid){
//             return mid
//         }
//         else if(target < mid){
//             end = mid-1
//         }else{
//             start = mid+1
//         }
//     }

//     return 'not found'
// }

// function bst(arr,target){
//     return binarySearchTree(arr,target,0,arr.length-1)
// }

// function binarySearchTree(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let mid = Math.floor((leftIndex+rightIndex)/2)

//     if(arr[mid] == target){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return binarySearchTree(arr,target,leftIndex,mid-1)
//     }
//     else{
//         return binarySearchTree(arr,target,mid+1,rightIndex)
//     }
// }

// const arr = [1, 3, 5, 7, 9, 11, 13];
// const target = 7;

// const result = bst(arr, target);
// console.log(result); // Expected output: 3 (index of 7)


// const arr = [1, 3, 5, 7, 9, 11, 13];
// const target = 6;

// const result = bst(arr, target);
// console.log(result); // Expected output: -1 (target not found)


function binarySearch(arr,target){
    let start = 0
    let end = arr.length-1

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] === target){
            return mid
        }
        else if(target < arr[mid]){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }

    return -1
}

function bst(arr,target){
    return binarySearchRecursion(arr,target,0,arr.lenght-1)
}

function binarySearchRecursion(arr,target,leftIndex,rightIndex){

    if(leftIndex > rightIndex){
        return -1
    }

    let mid = Math.floor((leftIndex+rightIndex)/2)

    if(arr[mid] == target){
        return mid
    }
    else if(target < arr[mid]){
        return binarySearchRecursion(arr,target,leftIndex,mid-1)
    }
    else{
        return binarySearchRecursion(arr,target,mid+1,rightIndex)
    }
}


// IsBs(root,min=-Infinity,max=Infinity){
//     if(!root){
//         return true
//     }

//     if(root.value <= min || root.value >= max){
//         return false
//     }

//     return this.isBs(root.left,min,root.value) && this.isBs(root.right,root.value,max)
// }


// b(start){
//     let visitedNode = new Set()
//     visitedNode.add(start)

//     let queue = []
//     queue.push(start)

//     while(queue.length){
//         let vertex = queue.shift()

//         console.log(vertex)

//         this.adjancyList(vertex).forEach((neeighbor)=>{
//             if(!visitedNode.has(neeighbor)){
//                 visitedNode.add(neeighbor)
//                 queue.push(neeighbor)
//             }
//         })
//     }
// }

// Dfs(start,visitedNode = new Set()){
//     visitedNode.add(start)

//     this.adjancency[start].forEach((neighbor)=>{
//         if(!visitedNode.has(neighbor)){
//             this.Dfs(neighbor,visitedNode)
//         }
//     })
// }

//recursive min

// min(root){
//     if(!root){
//         return null
//     }

//     if(!root.left){
//         return root
//     }

//     return min(root.left)
// }