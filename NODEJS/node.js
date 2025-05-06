// const express = require('express')
// const app = express()
// const path=require('path')
// const fs = require('fs')

// app.get('/check/:file',(req,res)=>{

//     const {file} = req.params

//     const check = fs.existsSync(file)
//     const date=new Date()
//     const addFifteen = date.getDate() + 15
    
//     if(check){
//         const write = fs.writeFile(file,addFifteen.toString(),(err)=>{
//             if(err){
//                 console.log(err)
//             }

//             console.log("writed")
//         })

//         res.status(201).json({message:"file data is updated"})
//     }else{
//         res.status(404).json({message:"page not found"})
//     }
// })


// app.listen(3000,()=>{
//     console.log('server is running')
// })

// const date =new Date()

// let addFifteen = date.getDate() + 15

// console.log(addFifteen.toString())

// const express = require('express')
// const app = express()
// const router = express.Router()
// const fs = require('fs')

// router.use("/addTwoNo",(req,res,next)=>{

//     const  {first,second} = req.query

//     let a = Number(first)
//     let b = Number(second)
//     let total =a+b
//     fs.writeFile('sum.txt',total.toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("writed")
//     })

//     next()
// })

// app.use(router)
// app.get("/addTwoNo",(req,res)=>{

//     const {first,second} = req.query

//     let a = Number(first)
//     let b = Number(second)
    
//     res.send(a+b)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

const express = require('express')
const app = express()

app.use((req,res,next)=>{
    if(req.headers.hello === "basha"){
        next()
    }else{
        res.status(403).json({message:"not allowed"})
    }
})

app.get("/hello",(req,res)=>{
    res.send('your header is allowed')
})


app.listen(3000,()=>{
    console.log("server is running")
})