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


const person = {
    name:"ahamathbasha",
    

    get fullName(){
        return `${this.name}`
    },

    set fullName(name){
        this.name = name
    }
}

console.log(person.fullName)

person.name = 'basha'

console.log(person.fullName)


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