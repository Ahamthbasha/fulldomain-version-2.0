// const mathOps = {
//     x:10,
//     add:function(a,b){
//         return a + b
//     },
//     update:function(x){
//          this.x += x
//     },
//     retrieve:function(){
//         console.log(this.x)
//     },
//     name:"ahamathbasha",
//     greet:function(){
//         return `${this.name}`
//     }
// }

// console.log(mathOps.add(5,5))

// mathOps.update(5)

// mathOps.retrieve()

// mathOps.greet()

//pure function 

// function addPurefn(a,b){
//     return a+b
// }

// //impure function

// function addImpurefn(a,b){
//     console.log(a,b)
//     return a+b
// }

// let count = 0

// function impureFunction(){
//     count++
//     return count
// }

// console.log(impureFunction())
// console.log(impureFunction())

//call

// function greet(params1,params2){
//     return `${params1} ${this.name} ${params2}`
// }

// const obj = {
//     name:"ahamathbasha"
// }

// console.log(greet.call(obj,"good evening","how are you"))


// //apply

// function greeting(params1,params2){
//     return `${params1} ${this.name} ${params2}`
// }

// const obj2 = {
//     name:"basha"
// }

// const applyFn = greeting.apply(obj2,['how are you','have a good day'])

// console.log(applyFn)


// //bind

// function greetingBind(params1,params2){
//     return `${params1} ${this.name} ${params2}`
// }

// const obj3 = {
//     name:"basha"
// }

// const newFn = greetingBind.bind(obj3)

// console.log(newFn("respected","how are you"))

//generator fun

// function *printAlternateNo(end){
//     let start = 1

//     while(start <= end){
//         yield start
//         start++
//     }
// }

// const printNo = printAlternateNo(100)

// for(let i=1;i<=100;i++){
//     if(i % 2 != 0){
//         console.log(printNo.next().value)
//     }else{
//         printNo.next()
//     }
// }

//closure example

// function closure(){
//     let count = 0
//     return function(){
//         count++
//         return count
//     }
// }

// const getNo = closure()

// for(let i=1;i<=10;i++){
//     console.log(getNo())
// }

//callback

// function getNo(fn){
//     let sum = 10
//     fn(sum)
// }

// getNo((no)=>{
//     console.log(no + no)
// })

//copy

// let target = {}

// let obj = {name:"ahamath"}

// let newObj = Object.assign(target,obj)
// console.log(newObj)

//deepCopy

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

// //deepFreeze

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let key of propNames){
//         const value = obj[key]
        
//         if(value != null && typeof value == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// //memoization

// function factorial(n){
//     let fact = 1
//     for(let i=1;i<=n;i++){
//         fact *= i
//     }
//     return fact
// }

// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         if(args in cache){
//             return cache[args]
//         }
//         else{
//             let result = fn(args)
//             cache[args] = result
//             return result
//         }
//     }
// }


// //factory function

// function factory(name,age){
//     return {
//         name:name,
//         age:age
//     }
// }

// const newObj = factory('ahamathbasha',22)

// console.log(newObj)

// //accessors


// const AccessorssObj = {
//     firstName : "leo Das",
//     lastName : "parthiban",

//     get fullName(){
//         return `${this.firstName} ${this.lastName}` 
//     },

//     set fullName(params){
//         [this.firstName,this.lastName] = params.split(" ")
//     }
// }

// console.log(AccessorssObj.fullName)


// AccessorssObj.fullName = "vijay devarkonda"

// console.log(AccessorssObj.fullName)

// //proxy

// const obj = {
//     name:"ahamathbasha",
//     age:20
// }

// const handler ={
//      get(target,obj){
//         if(target in obj){
//             return obj[target]
//         }
//         else{
//             return "property does not exist"
//         }
//     },

//     set(target,obj,val){
//         if(target in obj){
//             obj[target] = val
//         }else{
//             return "updation failed"
//         }
//     }
// }

// const proxyObj = new Proxy(obj,handler)

// console.log(proxyObj)

// proxyObj.name = "basha"

// console.log(obj)
// console.log(proxyObj.name)
// console.log(obj)

//currying

// function currying(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// const result = currying(1)(2)(3)

// console.log(result)

// function calculator(){}

// calculator.prototype.add=function(a,b){
//     return a+b
// }

// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype = Object.create(calculator.prototype)

// scientificCalculator.prototype.mul = function(a,b){
//     return a + b
// }


// const mathOps = new scientificCalculator()

// console.log(mathOps.add(5,5))


//logical question

// const article = [{id:1,name:'basha'},{id:2,name:'basha'}];
// const videos = [{id:10,name:'abcde',url:"http",articleId:1}];

// let result = []

// for(let key of article){
//     const relatedVideos = videos.filter((val)=>val.articleId == key.id)

//     result.push({
//         article:key,
//         videos:relatedVideos
//     })
// }

// console.log(result)

// console.log(JSON.stringify(result,null,2))


// function findingLargest(arr){
//     return arr.reduce((acc,cur)=>{
//         if(([acc.firstLargest,acc.secondLargest,acc.thirdLargest,acc.fourthLargest]).includes(cur)){
//             return acc
//         }

//         if(cur > acc.firstLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = acc.firstLargest
//             acc.firstLargest = cur
//         }
//         else if(cur > acc.secondLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = cur
//         }
//         else if(cur > acc.thirdLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = cur
//         }
//         else if(cur > acc.fourthLargest){
//             acc.fourthLargest = cur
//         }

//         return acc
//     },
//     {
//         firstLargest : -Infinity,
//         secondLargest : -Infinity,
//         thirdLargest:-Infinity,
//         fourthLargest : - Infinity,
//     })
// }

// console.log(findingLargest([1,2,1,0,100,200,1000,1000,100,200]))



// function findingSmallest(arr){
//     return arr.reduce((acc,cur)=>{
//         if(([acc.firstLargest,acc.secondLargest,acc.thirdLargest,acc.fourthLargest]).includes(cur)){
//             return acc
//         }

//         if(cur < acc.firstLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = acc.firstLargest
//             acc.firstLargest = cur
//         }
//         else if(cur < acc.secondLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = cur
//         }
//         else if(cur < acc.thirdLargest){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = cur
//         }
//         else if(cur < acc.fourthLargest){
//             acc.fourthLargest = cur
//         }

//         return acc
//     },
//     {
//         firstLargest : Infinity,
//         secondLargest : Infinity,
//         thirdLargest: Infinity,
//         fourthLargest : Infinity,
//     })
// }

// console.log(findingSmallest([-1,,-2,-1,-2,1,2,1,0,100,200,1000,1000,100,200]))


// function findingLargestStr(arr){
//     return arr.reduce((acc,cur)=>{
//         if(([acc.firstLargest.length,acc.secondLargest.length,acc.thirdLargest.length,acc.fourthLargest.length]).includes(cur.length)){
//             return acc
//         }

//         if(cur.length > acc.firstLargest.length){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = acc.firstLargest
//             acc.firstLargest = cur
//         }
//         else if(cur.length > acc.secondLargest.length){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = acc.secondLargest
//             acc.secondLargest = cur
//         }
//         else if(cur.length > acc.thirdLargest.length){
//             acc.fourthLargest = acc.thirdLargest
//             acc.thirdLargest = cur
//         }
//         else if(cur.length > acc.fourthLargest.length){
//             acc.fourthLargest = cur
//         }

//         return acc

//     },{
//         firstLargest : "",
//         secondLargest : "",
//         thirdLargest : "",
//         fourthLargest : ""
//     })
// }

// console.log(findingLargestStr(['basha',"basha","i","am","am","the","of","the","world"]))


// function findingSmallestStr(arr){
//     return arr.reduce((acc,cur)=>{
//         if(([acc.firstSmallest.length,acc.secondSmallest.length,acc.thirdSmallest.length,acc.fourthSmallest.length]).includes(cur.length)){
//             return acc
//         }

//         if(cur.length < acc.firstSmallest.length){
//             acc.fourthSmallest = acc.thirdSmallest
//             acc.thirdSmallest = acc.secondSmallest
//             acc.secondSmallest = acc.firstSmallest
//             acc.firstSmallest = cur
//         }
//         else if(cur.length < acc.secondSmallest.length){
//             acc.fourthSmallest = acc.thirdSmallest
//             acc.thirdSmallest = acc.secondSmallest
//             acc.secondSmallest = cur
//         }
//         else if(cur.length < acc.thirdSmallest.length){
//             acc.fourthSmallest = acc.thirdSmallest
//             acc.thirdSmallest = cur
//         }
//         else if(cur.length < acc.fourthSmallest.length){
//             acc.fourthSmallest = cur
//         }

//         return acc

//     },{
//         firstSmallest : "a".repeat(1000),
//         secondSmallest : "a".repeat(1000),
//         thirdSmallest : "a".repeat(1000),
//         fourthSmallest : "a".repeat(1000)
//     })
// }

// console.log(findingSmallestStr(['basha',"basha","i","am","am","the","of","the","world"]))

// let arr = [1,2,3,[4,4,5,[6,7,[8,9,10,[11,12]]]],13]

// function flatArr(arr,result=[]){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flatArr(arr[i],result)
//         }
//         else{
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(flatArr(arr))

// function flatArrSum(arr,sum = 0){
//     for(let val of arr){
//         if(Array.isArray(val)){
//             sum += flatArrSum(val)
//         }else{
//             sum += val
//         }
//     }

//     return sum
// }

// console.log(flatArrSum(arr))

// const users = [{name:"Alice"}, {name:"Bob"}, {name:"Charlie"}];

// let names = []

// for(let val of users){
//     names.push(val.name)
// }

// console.log(names)


// const users = [
//   {name:"A", active:true},
//   {name:"B", active:false},
//   {name:"C", active:true}
// ];


// let activeUser = users.filter((val)=>val.active == true)
// console.log(activeUser)

// const users = [
//   {id:1, name:"A"},
//   {id:2, name:"B"}
// ];
// // Find user with id = 2

// let userWithId2 = users.filter((val)=>val.id == 2)
// console.log(userWithId2)


// const users = [
//   {name:"A", active:true},
//   {name:"B", active:false},
//   {name:"C", active:true}
// ];
// // → 2


// let count = 0

// for(let val of users){
//     if(val.active){
//         count++
//     }
// }

// console.log(count)


// const users = [
//   {name:"A", active:true},
//   {name:"B", active:false},
//   {name:"C", active:true}
// ];
// // → 2

// for(let val of users){
//     val.verified = false
// }

// console.log(users)


// const users = [
//   {name:"A", age:25},
//   {name:"B", age:20},
//   {name:"C", age:30}
// ];

// // users.sort((a,b)=>a.age - b.age)

// for(let i=0;i<users.length;i++){
//     for(let j=i+1;j<users.length;j++){
//         if(users[i].age < users[j].age){
//             let temp = users[i]
//             users[i] = users[j]
//             users[j] = temp
//         }
//     }
// }

// console.log(users)

// const users = [
//   {name:"A", age:25},
//   {name:"B", age:20},
//   {name:"C", age:30}
// ];

// let averageAge = Math.floor(users.reduce((acc,cur)=>acc+cur.age,0) / users.length)

// console.log(averageAge)


// const users = [
//   {name:"A", role:"admin"},
//   {name:"B", role:"user"},
//   {name:"C", role:"admin"}
// ];

// let uniqueRoles = []

// for(let val of users){
//     if(!uniqueRoles.includes(val.role)){
//         uniqueRoles.push(val.role)
//     }
// }

// console.log(uniqueRoles)

// const users = [
//   {id:1, name:"A"},
//   {id:2, name:"B"}
// ];
// → {1:"A", 2:"B"}

// let map = {}

// for(let val of users){
//     map[val.id]=val.name
// }

// console.log(map)


// const users = [
//   {name:"A", dept:"HR"},
//   {name:"B", dept:"Tech"},
//   {name:"C", dept:"HR"}
// ];
// // → {HR:[{A},{C}], Tech:[{B}]}

// let obj = {}

// for(let val of users){
//     if(obj[val.dept]){
//         (obj[val.dept]).push({name:val.name})
//     }else{
//         obj[val.dept] = [{name:val.name}]
//     }
// }

// console.log(obj)


// const users = [
//   {name:"A", salary:5000},
//   {name:"B", salary:7000},
//   {name:"C", salary:6000}
// ];
// // → {name:"B", salary:7000}

// let max = 0
// for(let val of users){
//     max = Math.max(val.salary,max)
// }

// console.log(max)

// const users = [{id:1,name:"A"},{id:2,name:"B"}];
// const scores = [{id:1,score:80},{id:2,score:90}];

// let final = []

// for(let val1 of users){
//     for(let val2 of scores){
//         if(val1.id == val2.id){
//             final.push({...val1,...val2})
//         }
//     }
// }

// console.log(final)

// const users = [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ];
// // → [{id:1,name:"A"},{id:2,name:"B"}]


// let result = []
// let set = new Set()
// for(let val of users){
//     if(!set.has(val.id)){
//         set.add(val.id)
//         result.push(val)
//     }
// }

// console.log(result)

// const users = [
//   {dept:"HR", salary:3000},
//   {dept:"Tech", salary:5000},
//   {dept:"HR", salary:2000}
// ];
// // → {HR:5000, Tech:5000}


// let map = {}

// for(let val of users){
//     if(map[val.dept]){
//         map[val.dept] = map[val.dept]+ val.salary
//     }else{
//         map[val.dept] = val.salary
//     }
// }

// console.log(map)


// const company = [
//   {
//     dept:"HR",
//     employees:[
//       {name:"A", salary:3000},
//       {name:"B", salary:3500}
//     ]
//   },
//   {
//     dept:"Tech",
//     employees:[
//       {name:"C", salary:5000},
//       {name:"D", salary:4500}
//     ]
//   }
// ];
// // → single array of all employees

// let employeesList = []

// for(let val of company){
//     for(let emp of val.employees){
//         employeesList.push(emp)
//     }
// }

// console.log(employeesList)

// const devs = [
//   {name:"A", skills:["JS","React"]},
//   {name:"B", skills:["JS","Node"]},
//   {name:"C", skills:["React","CSS"]}
// ];
// // → "JS"


// let freqSkills = {}

// for(let key of devs){
//     for(let val of key.skills){
//         if(freqSkills[val]){
//             freqSkills[val]++
//         }else{
//             freqSkills[val] = 1
//         }
//     }
// }


// let list = Object.entries(freqSkills)

// list.sort((a,b)=>b[1]-a[1])

// console.log(list[0][0])


// const students = [
//   {name:"A", mark:90},
//   {name:"B", mark:70},
//   {name:"C", mark:80},
//   {name:"D", mark:95}
// ];
// // → Top 3 by marks


// let final = students.reduce((acc,cur)=>{
//     if(([acc.first,acc.second,acc.third]).includes(cur)){
//         return acc
//     }

//     if(cur.mark > acc.first){
//         acc.third = acc.second
//         acc.second = acc.first
//         acc.first = cur
//     }
//     else if(cur.mark > acc.second){
//         acc.third = acc.second
//         acc.second = cur
//     }
//     else if(cur.mark > acc.third){
//         acc.third = cur
//     }
//     return acc
// },{
//     first : -Infinity,
//     second : -Infinity,
//     third : -Infinity
// })

// console.log(final)

// const cart = [
//   {category:"Electronics", items:[{name:"TV",qty:2},{name:"Phone",qty:1}]},
//   {category:"Clothing", items:[{name:"Shirt",qty:3}]}
// ];
// // → total 6 items

// let sum = 0
// for(let val of cart){
//     for(let item of val.items){
//         sum += item.qty
//     }
// }

// console.log(sum)


// const data = {
//   users: [
//     {id:1, name:"A", details:{age:25, city:"NY"}},
//     {id:2, name:"B", details:{age:30, city:"LA"}}
//   ]
// };
// // → [{id:1,name:"A",age:25,city:"NY"}, {id:2,name:"B",age:30,city:"LA"}]

// function objectCreation(obj,object={}){
//     for(let key in obj){
//         if(typeof obj[key] == "object"){
//             objectCreation(obj[key],object)
//         }else{
//             object[key] =obj[key]
//         }
//     }
//     return object
// }


// let result = []

// for(let key in data){
//     for(let val of data[key]){
//        let helper = objectCreation(val)
//        result.push(helper)
//     }
// }

// console.log(result)


const products = [
  {name:"apple", qty:2},
  {name:"banana", qty:3},
  {name:"apple", qty:4}
];
// → [{name:"apple",qty:6},{name:"banana",qty:3}]


let final = []

let freqMap = new Map()

for(let val of products){
    if(!freqMap.has(val.name)){
        freqMap.set(val.name,val.qty)
    }else{
        let getQty = freqMap.get(val.name)
        freqMap.set(val.name,getQty+val.qty)
    }
}
let set = new Set()
for(let val of products){
    if(!set.has(val.name)){
        set.add(val.name)
        final.push({
            ...val,
            qty:freqMap.get(val.name)
        })
    }
}

console.log(final)