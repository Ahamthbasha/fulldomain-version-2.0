const express=require('express')
const userRouter=require('./userRouter')

const app=express()

app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log("server is running")
})