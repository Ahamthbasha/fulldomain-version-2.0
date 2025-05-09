// console.log("basha good night")

process.on('message',(msg)=>{
    console.log("parent message:",msg)
    process.send('good night')
})