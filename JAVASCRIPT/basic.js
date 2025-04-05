// object destructuring

const person={
    name:"vishnu G.R",
    role:"reviewer",
    anotherFace:"periya developer",
    profile:{
        name:"Manager",
        age:30
    }
}


const {name:FullName,role,anotherFace,native="kochin",profile:{name,age}} = person

console.log(FullName)
console.log(native)
console.log(name)