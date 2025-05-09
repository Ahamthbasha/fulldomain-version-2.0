// const express = require('express')
// const fs = require('fs')
// const app = express()

// const router = express.Router()

// router.use((req,res,next)=>{
//     let {first,second} = req.query

//     let result = Number(first) + Number(second)

//     console.log(result)

//     next()
// })

// app.use(router)

// app.get('/sum',(req,res)=>{
//     res.status(201).json({message:"see the terminal console"})
// })

// app.use((req,res,next)=>{
//     if(req.headers.hello == 'basha'){
//         next()
//     }
//     else{
//         res.status(403).json({message:"invalid header"})
//     }
// })

// app.use((req,res,next)=>{
//     if(req.method == 'GET'){
//         res.status(403).json({message:"this request is blocked"})
//     }
//     else{
//         next()
//     }
// })

// app.get('/hello',(req,res)=>{
//     res.send('hello')
// })

// app.post("/basha",(req,res)=>{
//     res.send('you are allowed')
// })

// app.use((req,res,next)=>{
//     let {first,second} = req.query

//     let result = Number(first) + Number(second)

//     console.log(result)

//     next()
// })

// app.get('/sum',(req,res)=>{
//     let {first,second} = req.query

//     let result = Number(first) + Number(second)

//     res.send(result)

// })

// app.get('/test',(req,res)=>{
//     let {file} = req.query
    
//     let check = fs.existsSync(file)

//     console.log(check)


//     if(check){
//         fs.writeFile(file,new Date().toString(),(err)=>{
//             if(err){
//                 console.log(err)
//             }
//         })

//         console.log("writing finished")

//         res.status(200).json({message:"you have this file"})
//     }else{
//         res.status(404).json({message:"you dont have this file"})
//     }
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const { on } = require('events')
// const fs = require('fs')

// const readableStream = fs.createReadStream('hello.txt')

// readableStream.on('data',(data)=>{
//     console.log(data.toString())
// })

// const writableStream = fs.createWriteStream('hello.txt')

// writableStream.write("basha king of the world")

// writableStream.end()

// const {Duplex} = require('stream')

// class myDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data+=chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d = new myDuplex()

// d.write("basha manick basha")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const {Transform} = require('stream')

// class myTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase = chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const t = new myTransform()

// const readableStream = fs.createReadStream('hello.txt')

// const writableStream = fs.createWriteStream('hello2.txt')

// readableStream
// .pipe(t)
// .pipe(writableStream)
// .on('close',()=>{
//     console.log("finished")
// })

// const {exec,execFile,spawn,fork} = require('child_process')
// const { stderr } = require('process')

// const child = fork('index2.js')

// child.on('message',(msg)=>{
//     console.log("child message",msg)
// })

// child.send("hello child")


// exec('dir',(stderr,stdout,err)=>{
//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(err){
//         console.log(err)
//     }
// })


// execFile('node',['index2.js'],(stderr,stdout,err)=>{
//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(err){
//         console.log(err)
//     }
// // })

// const child = spawn('cmd.exe',['/c','dir'])

// child.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// child.stderr.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })


// const fs = require('fs')

// const util = require('util')

// const readFile = util.promisify(fs.readFile)

// async function readTheFile(){
//     try {
//         let val = await readFile('sentence.txt')
//         console.log(val.toString())
//     } catch (error) {
//         console.log(error)
//     }
// }

// readTheFile()

// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data)
// })

// fs.writeFile('hello.txt',"work is worship",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFile('hello.txt','\n green color',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.rename('hello.txt','sentence.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.unlink('hello2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log('finished')

// const event = require('events')

// class myEvent extends event{}

// const eventEmitter = new myEvent()

// eventEmitter.on('hello',(input)=>{
//     console.log(`${input}`)
// })

// eventEmitter.emit('hello','good moringing')