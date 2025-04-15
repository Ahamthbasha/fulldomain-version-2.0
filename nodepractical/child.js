// process.on('message',(data)=>{
//     console.log("message received from parent",data)

//     process.send("hello parent")
// })

process.on('message',(msg)=>{
    let result=msg.number * 10
    process.send(result)
})