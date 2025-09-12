console.log("execFile running")

process.on('message',(msg)=>{
    console.log('child receiving message',msg)
    process.send('hello parent')
})