const fs = require('fs')

// fs.writeFile('hello.txt','I watched the Retro',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
// console.log("writed")

// for(let i=1;i<=3;i++){
//     fs.writeFile(`date${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log(`writed ${i} times`)
// }

// fs.readFile('date1.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data)
// })

// fs.rename('hello.txt','retro.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('renamed the file')
// })


// fs.unlink('date3.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file deleted')
// })

// fs.appendFile('retro.txt','super movie',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appended')
// })


// console.log(fs.existsSync('retro1.txt'))

// const readableStream = fs.createReadStream('abcd.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const writableStream = fs.createWriteStream('vinveli.txt')

// writableStream.write('hello basha')

// console.log("writing over")

// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
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

// const d = new MyDuplex()

// d.write('hi basha i am your big fan')

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
// const readableStream = fs.createReadStream('retro.txt')
// const writableStream = fs.createWriteStream('upper.txt')

// readableStream
// .pipe(t)
// .pipe(writableStream)

// console.log('finished')


// const {exec,execFile,spawn,fork} = require('child_process')
// const { stderr, stdout } = require('process')

// exec('dir',(err,stderr,stdout)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     console.log(stdout)
// })

// execFile('node',['retro.js'],(err,stderr,stdout)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     console.log(stdout)
// })


// const child = spawn('cmd.exe',['/c','dir'])

// child.stderr.on('err',(err)=>{
//     console.log(err)
// })

// child.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// child.on('close',(code)=>{
//     console.log(`${code} exited`)
// })

// const child = fork('retro.js')

// child.on('message',(msg)=>{
//     console.log('message from child',msg)
// })

// child.send("hi child")


// const Event = require('events')

// class MyEvent extends Event{}

// const e = new MyEvent()

// const greetName = (name) => {
//     console.log(`hello ${name}`)
// }

// e.on('greet',greetName)

// e.emit('greet','virumandi')
// e.emit('greet','virumandi')
// e.emit('greet','virumandi')

// e.removeListener('greet',greetName)


// const express = require('express')

// const app = express()

// app.use((req,res,next)=>{
//     console.log(req.method)
//     console.log(req.url)
//     next()
// })

// app.get('/hello',(req,res)=>{
//     res.send('hello basha')
// })

// app.get('/numbers',(req,res)=>{
//     const {first,second} = req.query
//     console.log('req.query',req.query)
//     const sum = parseInt(first) + parseInt(second)

//     res.send(`Sum of given two no is ${sum}`)
// })

// app.get('/numbers/:first/:second',(req,res)=>{
//     const {first,second} = req.params 
//     res.send(parseInt(first) + parseInt(second))
// })

// app.get('/check/:fileName',(req,res)=>{
//     const {fileName} = req.params

//     const checkFileExistsOrNot = fs.existsSync(fileName)

//     if(checkFileExistsOrNot){
//         res.send('There is no file like this')
//     }else{
//         fs.writeFile(fileName,new Date().toString(),(err)=>{
//             if(err){
//                 console.log(err)
//             }
//         })

//         res.send('see the file the data and time will be updated now')
//     }
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express = require('express')

// const app = express()

// const router = express.Router()

// router.use('/addTwoNo',(req,res,next)=>{
//     const {first,second} = req.query

//     fs.writeFile('addition.txt',(parseInt(first)+parseInt(second)).toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })

//     next()
// })

// router.get('/addTwoNo',(req,res)=>{
//     const {first,second} = req.query
    
//     res.status(200).send(parseInt(first) + parseInt(second))
// })

// app.use(router)


// app.listen(3000,()=>{
//     console.log('server is running')
// })

// const express = require('express')

// const app = express()

// const writeTheFile = (req,res,next)=>{
//     const {first,second} = req.query

//     fs.writeFile('file1.txt',(parseInt(first)+parseInt(second)).toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })

//     console.log("file is writed")

//     next()
// }

// app.get('/addTwoNo',writeTheFile,(req,res)=>{
//     const {first,second} = req.query

//     res.send(parseInt(first)+parseInt(second))
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })


const express = require('express')
const app = express()

const router = express.Router()

router.use((req,res,next)=>{
    console.log(req.method)
    next()
})

router.get('/router',(req,res)=>{
    res.send('router level middleware')
})

app.use(router)

app.use((err,req,res,next)=>{
    if(err){
        console.log(err)
    }else{
        next()
    }
})

app.listen(3000,()=>{
    console.log("server is running")
})