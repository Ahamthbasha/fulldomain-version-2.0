//CLI

// const name=process.argv[2]
// console.log(`hello ${name}`)

//dirname
// console.log(__dirname)

//filename
// console.log(__filename)

// console.log(module)

//file system

// const fs=require('fs')
// const data=fs.readFileSync('read.txt','utf-8')
// console.log(data)

// fs.writeFileSync('write1.txt','This is basha')
// console.log("writting completed")

// const data2=fs.readFile('read.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.writeFile('write1.txt',"I am the king of the world",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("writted")
//     }
// })

//server create

// const http=require('http')
// const url=require('url')
// const server=http.createServer((req,res)=>{
//     const parseUrl=url.parse(req.url,true)
//     const name=parseUrl.pathname
//     res.writeHead(200,{'content-type':'text/plain'})

//     res.write(`Hi you entered in ${name} \n`)

//     res.end("end")
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

//os

// const os=require('os')

// console.log("type of os",os.type())
// console.log("free space",os.freemem())
// console.log("total space",os.totalmem())
// console.log("platform",os.platform())

//path

// const path=require('path')
// const pathjoin=path.join('user','desktop','home.js')
// console.log(pathjoin)
// const baseName=path.basename('/home/user/docs/report.pdf', '.pdf')
// console.log(baseName)
// const absolutePath=path.resolve('folder','file.txt')
// console.log(absolutePath)

//stream

// const fs=require('fs')

// const readable=fs.createReadStream('read.txt','utf-8')

// readable.on('data',(chunk)=>{
//     console.log("received chunk",chunk)
// })

// const fs=require('fs')
// const writable=fs.createWriteStream('write1.txt')
// writable.write("abcd")
// writable.end()

//duplex

// const {Duplex} = require('stream')

// class myDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data=''
//     }

//     _write(chunk,encoding,callback){
//         this.data=chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d= new myDuplex()

// d.write("basha")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const fs=require('fs')
// const {Transform} = require('stream')

// class myTransform extends Transform{
//     constructor(){
//         super()
//     }

//     _transform(chunk,encoding,callback){
//         const data=chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }

// const readableStream=fs.createReadStream('input.txt')
// const writableStream=fs.createWriteStream('output.txt')
// const transformStream=new myTransform()

// readableStream
// .pipe(transformStream)
// .pipe(writableStream)
// .on('finish',()=>{
//     console.log("finished")
// })

//fs.creatReadStream

// const fs=require('fs')
// const readable=fs.createReadStream('input.txt')

// readable.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readable.on('end',()=>{
//     console.log("reading finished")
// })

//pipe

// const fs=require('fs')

// const readableStream=fs.createReadStream('input.txt')
// const writableStream=fs.createWriteStream('output2.txt')

// readableStream.pipe(writableStream)

// writableStream.on('finish',()=>{
//     console.log("writing is finished")
// })

// const {Duplex} = require('stream')

// class myDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data=''
//     }

//     _write(chunk,encoding,callback){
//         this.data=chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d=new myDuplex()

// d.write("Basha i am the king of the world")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const fs=require('fs')
// const {Transform} = require('stream')

// class myTransform extends Transform{
//     constructor(){
//         super()
//     }

//     _transform(chunk,encoding,callback){
//         const data=chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }


// const readableStream=fs.createReadStream('input.txt')
// const writableStream=fs.createWriteStream('output.txt')
// const t=new myTransform()

// readableStream
// .pipe(t)
// .pipe(writableStream)
// .on('finish',()=>{
//     console.log("writing finished")
// })

//exec

// const {exec} = require('child_process')

// exec('dir',(error,stderr,stdout)=>{
//     if(error){
//         console.log(error.message)
//         return
//     }

//     if(stderr){
//         console.log(stderr)
//         return
//     }

//     console.log("stdout",stdout)
// })

//execFile

// const {execFile} = require('child_process')
// const { stdout } = require('process')

// execFile('node',['execFile.js'],(error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//         return
//     }
//     if(stderr){
//         console.log(stderr)
//         return
//     }
//     console.log(stdout)
// })

//spawn

// const {spawn} = require('child_process')

// const child=spawn('cmd.exe',['/c','dir'])

// child.stdout.on('data',(data)=>{
//     console.log(data.toString())
// })

// child.stderr.on('data',(data)=>{
//     console.log(data)
// })

// child.on('close',(code)=>{
//     console.log(`process exited with ${code}`)
// })

//fork

// const {fork} = require('child_process')

// const child=fork('child.js')

// child.on('message',(msg)=>{
//     console.log("message from child",msg)
// })

// child.send("Hi child")

//buffer

// const buffer=Buffer.from("hello basha")
// console.log(buffer)
// console.log(buffer.toString())

// const buffer2=Buffer.alloc(20)
// buffer2.write("hello basha")
// console.log(buffer2)

// const fs=require('fs')

// fs.readFile('input.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// const buf=Buffer.from("Good Bad Ugly")
// console.log(buf.toJSON())

//promisify

// const fs=require('fs')
// const util=require('util')

// const readFile=util.promisify(fs.readFile)

// async function readMyFile(){
//     try {
//         const data=await readFile('input.txt')
//         console.log(data.toString())
//     } catch (error) {
//         console.log(error)
//     }
// }

// readMyFile()

//event

// const event=require('events')

// const emitter=new event()

// emitter.on('greet',(name)=>{
//     console.log(`hi ${name}`)
// })

// emitter.emit('greet',"ahamathbasha")

//timer

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

//crypto hash password

// const crypto=require('crypto')

// const password="my name is basha ahamathbasha"

// const hash=crypto.createHash('sha256').update(password).digest('hex')
// console.log(hash)

// crypto random bytes

// const token=crypto.randomBytes(16).toString('hex')
// console.log(token)

//dns

// const dns=require('dns')

// dns.lookup('google.com',(err,address,family)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(address)
//     console.log(family)
// })

// const dns = require('dns');

// dns.resolve('node.js.org',(error,address)=>{
//     if(error){
//         console.log(error)
//     }

//     console.log(address)
// })

// const { error } = require('console')
// const dns=require('dns')
// const { hostname } = require('os')

// dns.reverse('8.8.8.8',(error,hostname)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(hostname)
// })