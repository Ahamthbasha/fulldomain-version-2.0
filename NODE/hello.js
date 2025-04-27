// console.log('hello hello')

process.on('message',(msg)=>{
    console.log("message from parent in child",msg)
    process.send("hi parent")
})