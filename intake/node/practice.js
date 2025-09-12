// const express = require('express')
// const app = express()

// app.get("/basha",((req,res)=>{
//     res.send("eppadi irukkeenga anna")
// }))

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// file operations

// const fs = require('fs')

// fs.writeFile('abcd.txt','hello basha',(err)=>{
//     if(err){
//         console.log("err",err)
//     }
//     console.log("writing")
// })

// fs.readFile('abcd.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data.toString())
//     }
// })

// fs.rename('abcd.txt','text.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("renamed text")
// })

// fs.unlink('text.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('deleted')
// })

// fs.appendFile('abcd.txt',"\nhow are you",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appended')
// })

// const checkOrNot = fs.existsSync('abcd.txt')
// console.log(checkOrNot)

// const { read } = require('fs')
// const fs = require('fs/promises')

// const readIt = fs.readFile('abcd.txt')


// async function readFile(){
//     try {
//         const result = await readIt
//         console.log(result.toString())
//     } catch (error) {
//         throw error
//     }
// }

// readFile()

//streams

// const fs = require('fs')

// const readStream = fs.createReadStream('abcd.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const writeStream = fs.createWriteStream('write.txt')

// writeStream.write('hello basha')

// writeStream.end(()=>{
//     console.log('writing completed')
// })

// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ""
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }

//     _write(chunk,encoding,callback){
//         this.data = chunk.toString()
//         callback()
//     }
// }

// const d = new MyDuplex()

// d.write("hello mariyam")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const {Transform} = require('stream')

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperChunk = chunk.toString().toUpperCase()
//         this.push(upperChunk)
//         callback()
//     }
// }

// const t = new MyTransform()

// const r = fs.createReadStream("abcd.txt")
// const w = fs.createWriteStream("output2.txt")

// r
// .pipe(t)
// .pipe(w)
// .on('finish',()=>{
//     console.log('completed')
// })


const {exec, execFile, spawn, fork} = require('child_process')
const { error } = require('console')
const { stderr } = require('process')

exec('dir',(stderr,stdout,error)=>{
    if(stderr){
        console.log(stderr)
    }

    if(error){
        console.log(error)
    }

    if(stdout){
        console.log(stdout)
    }
})


execFile('node',['practice2.js'],(stderr,stdout,error)=>{
    if(error){
        console.log(error)
    }

    if(stderr){
        console.log(stderr)
    }

    if(stdout){
        console.log(stdout)
    }
})


const childProcess = spawn('cmd.exe',['/c','dir'])

childProcess.stdout.on('data',(chunk)=>{
    console.log(chunk.toString())
})

childProcess.stderr.on('data',(chunk)=>{
    console.log(chunk.toString())
})

childProcess.on('close',(code)=>{
    console.log(code)
})

const parent = fork('practice2.js')

parent.on('message',(msg)=>{
    console.log('parent receiving child message',msg)
})

parent.send("hello child")