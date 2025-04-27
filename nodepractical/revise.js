// const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/hi'){
//         res.write('hello')
//         res.end()
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const fs=require('fs')

// fs.readFile('hello.js',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data.toString())
//     }
// })
// for(let i=1;i<=3;i++){
//     fs.writeFile(`date${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }

//         console.log("writed")
//     })
// }

// const express=require('express')
// const app=express()

// app.get('/sum',(req,res)=>{
//     let first=Number(req.query.first)
//     let second=Number(req.query.second)

//     res.send(`sum of two number is ${first+second}`)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const fs=require('fs')

// fs.writeFile('date4.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }

//     fs.readFile('date4.txt',(err,data)=>{
//         if(err){
//             console.log(err)
//         }

//         console.log(data.toString())
//     })
// })

// fs.writeFile('date5.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }

//     fs.appendFile('date5.txt','new beginning',(err)=>{
//         if(err){
//             console.log(err)
//         }

//         console.log("appended")
//     })
// })

// fs.unlink('date5.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("file is deleted")
// })

// fs.rename('date2.txt','dateFile.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("rename")
// })

// fs.writeFile('info.txt','abcd hello hi how are you',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.readFile('info.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data.split(' ').includes('bye'))
// })



// const readStream=fs.createReadStream('info.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//     console.log("ended")
// })

// const writeStream=fs.createWriteStream('info2.txt')

// writeStream.write('hi hello who are you')
// writeStream.end()

// writeStream.on('finish',()=>{
//     console.log("writing is finished")
// })

// const readStream=fs.createReadStream('info.txt')
// const writeStream=fs.createWriteStream('info5.txt')

// const {Transform}=require('stream')

// const upperCaseTransform=new Transform({
//     transform(chunk,encoding,callback){
//         const upperCase=chunk.toString().toUpperCase()
//         callback(null,upperCase)
//     }
// })

// readStream
// .pipe(upperCaseTransform)
// .pipe(writeStream)
// .on('finish',()=>{
//     console.log("writing is finished")
// })

// const event=require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// eventEmitter.on('greet',(name)=>{
//     console.log(`hello ${name}`)
// })

// eventEmitter.emit('greet','basha')

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(403).json({message:"access denied for get method request"})
//     }else{
//         next()
//     }
// })

// app.get("/data",(req,res)=>{
//     res.json({message:'list fetched'})
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const app=express()
// const crypto=require('crypto')

// const secretkey='ahamathbashaFkin'
// const IV='ahamathbashaF123'

// function encryptResponse(data){
//     let cipher=crypto.createCipheriv('aes-128-cbc',secretkey,IV)

//     let encrypt=cipher.update(data,'utf-8','hex')
//     encrypt += cipher.final('hex')
    
//     return encrypt
// }

// const encryptedResponse=((req,res,next)=>{
//     const originResponse=res.send

//     res.send=function(data){
//         if(typeof data === 'object'){
//             data=JSON.stringify(data)
//         }

//         const encryptedData=encryptResponse(data)
//         originResponse.call(this,encryptedData)
//     }

//     next()
// })
// app.use(encryptedResponse)



// app.get('/data',(req,res)=>{
//     res.send('data')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const {fork} = require('child_process')

// const child=fork('child.js')

// child.on('message',(msg)=>{
//     console.log('child message is:',msg)
// })

// child.send('hello child')

// const express=require('express')
// const app=express()

// function primeOrNor(no){
//     if(no < 2){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(no);i++){
//         if(no % i == 0){
//             return false
//         }
//     }

//     return true
// }

// app.get('/no/:n',(req,res)=>{
//     let no=primeOrNor(Number(req.params.n))?"prime":"not prime"


//     res.send(`${req.params.n} is ${no}`)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const path = require('path')
// const app=express()

// app.set('view engine','ejs')

// app.set('views',path.join(__dirname,'views'))

// app.use(express.static(path.join(__dirname,'public')))

// app.get('/render',(req,res)=>{
//     let name
//     res.render('index',{name})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const event=require('events')

// class customEmitter extends event{
//     startCounter(value){
//         let count=1

//         let counter=setInterval(()=>{
//             this.emit('count',count)
//             count++

//             if(count > value){
//                 clearInterval(counter)
//                 this.emit('stop')
//             }
//         })
//     }
// }

// const emitter=new customEmitter()

// emitter.on('count',(count)=>{
//     console.log('count is',count)
// })

// emitter.on('stop',()=>{
//     console.log("emitter is stopped")
// })

// emitter.startCounter(10)


const fs=require('fs')
const {promisify} = require('util')

const readFile=promisify(fs.readFile)

// readFile('date1.txt')
// .then((data)=>{
//     console.log(data.toString())
// })
// .catch((error)=>{
//     console.log(error)
// })

async function read(){
    try {
        const read=await readFile('date1.txt','utf-8')
        console.log(read)
    } catch (error) {
        console.log(error)
    }
}

read()