// const { read } = require('fs')
// const fs = require('fs/promises')

// fs.writeFile('abcde.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('writed')
// })


// fs.readFile('abcd.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data)
// })


// fs.appendFile('abcde.txt','\n good morning',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appended')
// })


// fs.rename('abcde.txt','newFile.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('renamed')
// })


// let existOrNot = fs.existsSync('abcde.txt')
// console.log(existOrNot)


// const readFile = fs.readFile('newFile.txt')

// async function readIt(){
//     try {
//         const result = await readFile
//         console.log(result.toString())
//     } catch (error) {
//         throw error
//     }
// }

// readIt()


// fs.unlink('newFile.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("deleted")
// })


//streams

const fs = require('fs')
// const readFile = fs.createReadStream('abcd.txt')

// readFile.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readFile.close()

// const writeFile = fs.createWriteStream('abcd2.txt')

// writeFile.write("hello basha how are you")

// writeFile.end()


// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
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

// d.write("hello basha how are hope you are doing good")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const {Transform} = require('stream')

// class UpperTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase = chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const readFile = fs.createReadStream('abcd2.txt')

// const writeFile = fs.createWriteStream('abcd3.txt')

// const t = new UpperTransform()
// readFile
// .pipe(t)
// .pipe(writeFile)


const {exec,execFile, spawn, fork} = require('child_process')
const { stderr } = require('process')

// exec('dir',(stdout,stderr,err)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })


// execFile('node',['practice2.js'],(stderr,stdout,err)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })


// const spawnChild = spawn('cmd.exe',['/c','dir'])

// spawnChild.stderr.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// spawnChild.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// spawnChild.on('close',(code)=>{
//     console.log(`${code} exited successfully`)
// })

// const forkIt = fork('practice2.js')

// forkIt.on('message',(msg)=>{
//     console.log('msg from child',msg)
// })

// forkIt.send('hello child')

// const event = require('events')

// class MyEvent extends event{}

// const events = new MyEvent()

// const greetFn = (name)=>{
//     console.log(name)
// }

// events.on('greet',greetFn)

// events.emit('greet','basha')

// events.removeListener('greet',greetFn)

// events.emit('greet','basha')


//mongo 


// const mongoose = require('mongoose')

// async function connectDB(){
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/')
//         console.log('mongodb connected successfully')
//     } catch (error) {
//         console.log('mongodb error',error)
//     }
// }

// connectDB()


//router level middleWare


// const express = require('express')

// const app = express()

// const router = express.Router()

// const routerLevelMiddleware = router.use((req,res,next)=>{
//     console.log(req.method)
//     next()
// })

// app.get('/getName',routerLevelMiddleware,(req,res)=>{
//     res.send('hello')
// })

// app.get('/basha',(req,res)=>{
//     res.send('lkg')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })


// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(403).json({message:"unauthorized"})
//     }else{
//         next()
//     }
// })

// app.get('/basha',(req,res)=>{
//     res.send('hello')
// })

// app.get('/abc/:id',(req,res)=>{
//     res.send(req.params.id)
// })

// app.get('/name',(req,res)=>{
//     res.send(req.query.name)
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

const express = require('express')
const app = express()

function checkExist(fileName){
    return fs.existsSync(fileName)
}

function write(filename){
    fs.writeFile(filename,new Date().toString(),(err)=>{
        if(err){
            console.log(err)
        }
    })
}


app.get('/basha',(req,res)=>{
    const {filename} = req.query

    if(checkExist(filename)){
        write(filename)
        res.send('file updated with current date')
    }else{
        res.status(404).json({message:"file not found"})
    }
})

app.listen(3000,()=>{
    console.log('server is running')
})