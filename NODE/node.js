
// const name = process.argv[2]
// console.log(name)
// function hello(input){
//     return `hi ${input}`
// }

// console.log(hello(name))

// console.log(__dirname)

// console.log(__filename)

const { randomBytes } = require('crypto')
const fs = require('fs')

// const read = fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data)
//     }
// })

// const write=fs.writeFile('hello.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('writed')
// })

// const check = fs.existsSync('hello.txt')
// console.log(check)

// const write = fs.appendFile("hello.txt",'\n good moring',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appended')
// })

// const write = fs.rename('singapore','singapore.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('sigapore saloon')
// })


// const deletion = fs.unlink('singapore.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("deleted")
// })

// for(let i=1;i<=3;i++){
//     fs.writeFile(`date${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(`writed ${i} time`)
//     })
// }



// const http = require('http')
// const url = require('url')
// const os = require('os')

// const server = http.createServer((req,res)=>{
//     const parseUrl = url.parse(req.url,true)
//     const pathName = parseUrl.pathname

//     res.writeHead(200,{'content-type':'text/plain'})

//     res.write(pathName)

//     res.end()
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })


// const readStream=fs.createReadStream('hello2.txt','utf-8')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const writeStream = fs.createWriteStream('hello2.txt')

// writeStream.write(new Date().toString())

// writeStream.end()

// const {Duplex} = require('stream')

// class myDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d = new myDuplex()

// d.write('hello')

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })


// const {Transform} = require('stream')

// class myTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperChunk = chunk.toString().toUpperCase()
//         this.push(upperChunk)
//         callback()
//     }
// }

// const writeStream = fs.createWriteStream('hello4.txt')

// const readStream = fs.createReadStream('hello2.txt')

// const t = new myTransform()

// readStream
// .pipe(t)
// .pipe(writeStream)
// .on('finish',()=>{
//     console.log("finished")
// })

// const {exec, execFile, spawn, fork} = require('child_process')
// const { stderr, stdout } = require('process')
// const { error } = require('console')

// const child = fork('helloMamay.js')

// child.on('message',(data)=>{
//     console.log("received data from child:",data)
// })

// child.send("Good afternoon")

// const child = spawn('cmd.exe',['/c','dir'])

// child.stdout.on('data',(data)=>{
//     console.log(data.toString())
// })

// child.stderr.on('data',(data)=>{
//     console.log(data)
// })

// child.on('close',(code)=>{
//     console.log(`exited with ${code}`)
// })

// execFile('node',['helloMamay.js'],(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(stdout)
// })

// exec('dir',(stderr,stdout,err)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })

// const util = require('util')

// const read = util.promisify(fs.readFile)

// async function readFile(){
//     try {
//         const data =await read('hello2.txt')
//         console.log(data.toString())
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile()

const events = require('events')

class eventEmitter extends events{
    
}

const e = new eventEmitter()

e.on('greet',(name)=>{
    console.log(`good morning ${name}`)
})

e.emit('greet','basha')