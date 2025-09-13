//file operations
// const fs = require('fs')
// const utils = require('util')

// const readFile = utils.promisify(fs.readFile)

// async function readFile1(){
//     try {
//         const result = await readFile('newFile.txt')
//         console.log(result.toString())
//     } catch (error) {
//         throw error
//     }
// }

// readFile1()

// fs.writeFile("newFile.txt",'basha bhaii',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('writed')
// })


// fs.appendFile('hello.txt','\n basha you are good typer',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file appended')
// })

// fs.readFile("newFile.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data.toString())
//     }
// })

// fs.rename('hello.txt','newFile.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('renamed')
// })

// fs.unlink('write.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
// console.log("successfully deleted")

// const checkExistOrNot = fs.existsSync('output2.txt')
// console.log(checkExistOrNot)

//const fs promise

// const fs = require('fs/promises')

// const read = fs.readFile("newFile.txt")


// async function readTheFile(){
//     try {
//         const result = await read
//         console.log(result.toString())
//     } catch (error) {
//         throw error
//     }
// }

// readTheFile()

//streams

// const fs = require('fs')

// const read = fs.createReadStream('newFile.txt')

// read.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const write = fs.createWriteStream('writeStream.txt')

// write.write("hello world")

// write.end()

// console.log("writed stream ended")


//duplex stream


// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ""
//     }

//     _read(read){
//         this.push(this.data)
//         this.push(null)
//     }

//     _write(chunk,encoding,callback){
//         this.data = chunk.toString()
//         callback()
//     }
// }

// const d = new MyDuplex()

// d.write("hello world how are you \n who are you")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })


//Transform Stream

// const {Transform} = require('stream')

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperchunk = chunk.toString().toUpperCase()
//         this.push(upperchunk)
//         callback()
//     }
// }
// const t = new MyTransform()
// const readStream = fs.createReadStream('newFile.txt')
// const writeStream = fs.createWriteStream("transform.txt")

// readStream
// .pipe(t)
// .pipe(writeStream)

// console.log('stream transformation ended')


//childProcess

// const {exec, execFile, spawn, fork} = require('child_process')
// const { error } = require('console')
// const { StringDecoder } = require('string_decoder')

// exec('dir',(stderr,stdout,error)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })


// execFile('node',['practice2.js'],(stderr,stdout,error)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })

// const spawnIt = spawn('cmd.exe',['/c','dir'])

// spawnIt.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// spawnIt.stderr.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// spawnIt.on('close',(code)=>{
//     console.log(`${code} exited successfully`)
// })

// //fork

// const parent = fork('practice2.js')

// parent.on('message',(msg)=>{
//     console.log("parent received message",msg)
// })

// parent.send('hello basha')


//events

// const event = require('events')

// class MyEvent extends event{}

// const e = new MyEvent()

// const greetFn = (name)=>{
//     console.log('my name is ', name)
// }

// e.on('greet',greetFn)

// e.emit('greet','billa')

// e.removeListener('greet',greetFn)

// //emitting only one time

// const greetingVicky = (name)=>{
//     console.log(`thank you ${name}`)
// }

// e.once('greetVicky',greetingVicky)

// e.emit('greetVicky','vignesh')


//connectingMongoDB

// const mongoose = require('mongoose')

// const db = async()=>{
//     try {
//         const result = await mongoose.connect('mongodb://127.0.0.1:27017/bashaDB')
//         console.log('mongodb connected')
//     } catch (error) {
//         console.log('error connecting to mongodb',error)
//     }
// }


// const express = require('express')
// const app = express()

// db()

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//write five times dates

// const fs = require('fs')

// for(let i=1;i<=5;i++){
//     fs.writeFile(`write${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
// }

//create server using http

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.write('basha')
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log('server is running')
// })

//localModule(relative path)

// const greet = require('./practice2')

// console.log(greet("basha"))

//router level middleware

// const express = require('express')
// const app = express()
// const userRouter = require("./practice2")

// app.use('/user',userRouter)

// app.listen(3000,()=>{
//     console.log('server is running')
// })


//timers

// setTimeout(()=>{
//     console.log("hello")
// },1000)

// setImmediate(()=>{
//     console.log("I am priotiry")
// },2000)

// const interval=setInterval(()=>{
//     console.log("hello")
// },3000)

// setTimeout(()=>{
//     clearInterval(interval)
// },4000)

//crypto

// const crypto = require('crypto')

// const password = "My Name Is Billa"

// const result = crypto.createHash('sha256').update(password).digest('hex')
// console.log(result)

// const random = crypto.randomBytes(16).toString('hex')
// console.log(random)

//dns

// const dns = require('dns')

// dns.lookup('google.com',(error,hostname,address)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(hostname)
//     console.log(address)
// })

// dns.reverse('8.8.8.8',(error,hostname)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(hostname)
// })

// params

// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log(req.method)
//     next()
// })

// app.get("/basha/:id",(req,res)=>{
//     res.send(`basha id is ${req.params.id}`)
// })

// app.get("/bashaQuery",(req,res)=>{
//     let name = req.query.name
//     res.send(name)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//block get method request middleware

// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(403).json({message:"Get method is restricted"})
//     }else{
//         next()
//     }
// })

// app.get('/getRequest',(req,res)=>{
//     res.send('basha')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//error handling middleware

// const express = require('express')
// const app = express()

// app.get('/basha',(req,res)=>{
//     res.send('basha')
// })

// app.use((err,req,res,next)=>{
//     console.log(err)
//     res.status(500).json({message:err.message})
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })


//middleware function

// const express = require('express')
// const app = express()

// const loggerMiddleware = ((req,res,next)=>{
//     console.log(`method is ${req.method}.url is ${req.url}`)
//     next()
// })

// app.use(loggerMiddleware)

// app.get('/basha',(req,res)=>{
//     res.send('basha')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

// const fs = require('fs');

// setTimeout(() => {
//   console.log("1. setTimeout (Timers Phase)");
// }, 100);

// setImmediate(() => {
//   console.log("2. setImmediate (Check Phase)");
// });

// fs.readFile(__filename, () => {
//   console.log("3. fs.readFile (Poll Phase)");
//   setImmediate(() => {
//     console.log("4. Inside I/O: setImmediate (Check Phase)");
//   });
//   setTimeout(() => {
//     console.log("5. Inside I/O: setTimeout (Timers Phase)");
//   }, 0);
// });
// console.log("6. Synchronous Log");

//check file exist if exist update with current date otherwise tell there is not found

// const express = require('express')
// const app = express()
// const fs = require('fs')

// app.get('/check/:file',(req,res)=>{
//     const fileName = req.params.file

//     let check = fs.existsSync(fileName)

//     if(check){
//         fs.writeFile(fileName,new Date().toString(),(err)=>{
//             if(err){
//                 res.send(err)
//             }
//         })

//         res.status(200).json({message:"file is updated"})
//     }else{
//         res.status(404).json({message:"it is not found"})
//     }
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//router middleware

const express = require('express')
const app = express()
const fs = require('fs')

const router = express.Router()

const routerLevel = router.use((req,res,next)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    fs.writeFile('sum.txt',(a+b).toString(),(err)=>{
        if(err){
            console.log(err)
        }
    })
    next()
})

app.get('/addTwoNumbers',routerLevel,(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('server is running')
})