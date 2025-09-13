// console.log("execFile running")

// process.on('message',(msg)=>{
//     console.log('child received message',msg)
//     process.send('good morning')
// })


// function sayHello(name){
//     return `Hello ${name}`
// }

// module.exports = sayHello


const express = require('express')
const router = express.Router()

router.get('/hello',(req,res)=>{
    res.send("hello world")
})

router.get('/:id',(req,res)=>{
    res.send(`user id is ${req.params.id}`)
})

module.exports = router