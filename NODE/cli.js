// const name=process.argv[2]

// console.log(`hello ${name}`)

const fs=require('fs')

// const write=fs.writeFileSync("hello.txt","hello")
// console.log("writing completed")

// const readableStream=fs.createReadStream('hello.txt','utf-8')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
// })

// const writableStream=fs.createWriteStream('hello2.txt')

// writableStream.write("hello")
// writableStream.end()

// const {Duplex} = require("stream")

// class myDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data=""
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

// const d=new myDuplex()

// d.write("Ahamathbasha.F")
// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const {Transform} = require('stream')

// class transformStream extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase=chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const read=fs.createReadStream('hello.txt','utf-8')

// const write=fs.createWriteStream('hello3.txt')

// const transform=new transformStream()

// read
// .pipe(transform)
// .pipe(write)
// .on('finish',()=>{
//     console.log("transformation is finished")
// })

// const {exec} = require('child_process')

// exec('dir',(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })

// const {execFile} = require('child_process')

// execFile('node',['hello.js'],(error,stderr,stdout)=>{
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

// const {spawn} = require('child_process')

// const child=spawn('cmd.exe',['/c','dir'])

// child.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// child.on('close',(code)=>{
//     console.log(`code is exited with code ${code}`)
// })

// const {fork} = require('child_process')

// const child=fork('hello.js')

// child.on('message',(msg)=>{
//     console.log("message from child",msg)
// })

// child.send("parent sending:Hello from parent")

// console.log(Buffer.from("hello"))

// const utils=require('util')

// const readFile=utils.promisify(fs.readFile)

// async function readFile1(){
//     try {
//         const data=await readFile('hello3.txt')
//         console.log(data.toString())
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile1()

// const events=require('events')

// class myEvent extends events{

// }

// const event=new myEvent()

// event.on('greet',(name)=>{
//     console.log(`hello ${name}`)
// })

// event.emit('greet','ahamathbasha')

// const greet=require('./greet.js')
// console.log(greet('basha'))

// const express=require('express')
// const app=express()



// app.listen(3000,()=>{
//     console.log("server is running")
// })

const express=require('express')
const app=express()
const cors=require('cors')

app.use(express.json())

app.use(cors({
    origin:'http://127.0.0.1:5500',
    methods:['PUT'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true
}))

app.put('/data',(req,res)=>{
    res.json({message:"getted",body:req.body})
})

app.listen(4000,()=>{
    console.log('server is running')
})