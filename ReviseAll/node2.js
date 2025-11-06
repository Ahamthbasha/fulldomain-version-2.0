console.log("god bless you mamay")

process.on('message',(msg)=>{
    console.log('parentmessage',msg)
    process.send("good evenening parent")
})