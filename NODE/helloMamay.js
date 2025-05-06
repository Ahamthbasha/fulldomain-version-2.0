process.on('message',(data)=>{
    console.log("received from parent:",data)
    process.send("good afternoon parent")
})