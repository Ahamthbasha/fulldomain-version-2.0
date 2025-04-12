const express=require('express')
const router=express.Router()

router.use((req,res,next)=>{
    console.log(`${req.method} and ${req.url}`)
    next()
})

router.get('/',(req,res)=>{
    res.send('user list')
})

router.get('/:id',(req,res)=>{
    res.send(`${req.params.id}`)
})

router.all('/help',(req,res)=>{
    res.send("handle all methods")
})
module.exports=router