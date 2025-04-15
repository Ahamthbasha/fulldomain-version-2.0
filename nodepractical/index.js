// const http=require('http')

// const server=http.createServer((req,res)=>{

//     if(req.url==='/hi' && req.method === 'GET'){
//         res.write('hello')
//         res.end()
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

//date in three files
// const fs=require('fs')
// let date=new Date().toString()
// for(let i=1;i<=3;i++){
//     fs.writeFile(`file${i}.txt`,date,(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(`writed ${i} times`)
//         }
//     })
// }

//sum 

// const express=require('express')
// const app=express()

// app.get('/no',(req,res)=>{
//     const firstNo=Number(req.query.firstNo)
//     const secondNo=Number(req.query.secondNo)
//     res.send(`sum of two no is ${firstNo+secondNo}`)
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })

// read file

// const fs=require('fs')

// fs.readFile("file1.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// write and inside that read a file

// const fs=require('fs')
// let date=new Date().toString()
// fs.writeFile('new.txt',date,(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("writting completed")

//     fs.readFile('new.txt','utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     })
// })

// write a file and append good bye at last

// const fs=require('fs')

// fs.writeFile('Date.txt','hii',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("writing completed")

//     fs.appendFile('Date.txt','\n good bye',(err)=>{
//         if(err){
//             console.log(err)
//         }

//         console.log("appended")
//     })
// })

// write date into three files in an array there will be file name

// const fs=require('fs')

// const arr=['file1.txt', 'file2.txt', 'file3.txt']

// for(let i=0;i<arr.length;i++){
//     let val=arr[i]
//     fs.writeFile(val,new Date().toISOString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("writted")
//     })
// }

//delete a file

// const fs=require('fs')

// fs.unlink('file3.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('deleted')
// })

// open a file

// const fs=require('fs')

// fs.open('file1.txt','r',(err,fd)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(fd)
//     }

//     fs.close(fd,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("file is closed")
//         }
//     })
// })

//check a word is in the file or not

// const fs=require('fs')

// fs.writeFile('info.txt','abcd hello basha how are you',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('writted')
// })

// fs.readFile('info.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data.split(' ').includes('you'))
// })

//read stream

// const fs=require('fs')

// const read=fs.createReadStream('info.txt')

// read.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// read.on('end',()=>{
//     console.log("read is end")
// })

//write stream

// const fs=require('fs')

// const write=fs.createWriteStream('new.txt')

// write.write('hello  everyone')

// write.end()

// write.on('finish',()=>{
//     console.log("writing is finished")
// })

//buffer

// const buffer=new Buffer.from('abin','utf-8')
// console.log(buffer.toJSON())

//PIPE

// const fs=require('fs')

// const readable=fs.createReadStream('info.txt','utf-8')

// const writable=fs.createWriteStream('info2.txt')

// readable.pipe(writable)

// console.log('piped')

//event emitter

// const event = require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// eventEmitter.on('greet',(name)=>{
//     console.log(`hello ${name}`)
// })

// eventEmitter.emit('greet','ahamathbasha')

//event emitter upperCase and lowercase

// const event=require('events')

// class customEmitter extends event {}

// const eventEmitter = new customEmitter()

// eventEmitter.on('data',(str)=>{
//     console.log(str.toUpperCase())
// })

// eventEmitter.on('data',(str)=>{
//     console.log(str.toLowerCase())
// })

// eventEmitter.emit('data','ahamahtbasha')

// //eventEmitter with once 

// const event=require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// eventEmitter.once('login',(name)=>{
//     console.log(`${name} logged successfully`)
// })

// eventEmitter.emit('login','ahamathbasha')
// eventEmitter.emit('login','manikbasha')

//remove listener in event emitter

// const event=require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// const wishFn=(name)=>{
//     console.log(`Happy birthday ${name}`)
// }
// eventEmitter.on('wish',wishFn)
// eventEmitter.emit('wish','ahamathbasha')

// eventEmitter.removeListener('wish',wishFn)

// eventEmitter.emit('wish','basha')

//error handling in event emitter

// const event=require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// eventEmitter.on('error',(err)=>{
//     console.log(err)
// })

// eventEmitter.emit('error',new Error('something went wrong'))

//fetching data using eventEmitter

// const event=require('events')

// class customEmitter extends event{}

// const eventEmitter=new customEmitter()

// eventEmitter.on('fetch',async (url)=>{
//     const response=await fetch(url)
//     const result=await response.json()
//     console.log(result)
// })

// eventEmitter.emit('fetch',`https://jsonplaceholder.typicode.com/users`)

//block get req

// const express=require('express')

// const app=express()

// const users=[{id:1,name:"ahamathbasha"}]

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(403).json({message:"get is blocked"})
//         return
//     }else{
//         next()
//     }
// })

// app.get('/user',(req,res)=>{
//     res.json({users})
// })

// app.post('/addUser',(req,res)=>{
//     const newUser={
//         id:2,
//         name:"ahamathbasha"
//     }

//     users.push(newUser)

//     res.status(201).json({data:newUser})
// })

// app.get('/user/:userId',(req,res)=>{
//     console.log(req.params)
//     const userId = req.params.userId
//     console.log(users)
//     const user=users.find((x)=>x.id===Number(userId))

//     res.json({data:user})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//block request based on its headers

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     if(req.headers['x-auth-key'] === 'mySecretKey'){
//         next()
//     }else{
//         res.status(403).json({message:"Access Denied"})
//     }
// })

// app.get('/data',(req,res)=>{
//     res.json({message:"secret data access granted"})
// })

// app.listen(3000,()=>{
//     console.log("server is runing")
// })

//error handling middleware

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log(req.method)
// })

// app.get('/',(req,res)=>{
//     res.json({message:req.method})
// })

// app.use((err,req,res,next)=>{
//     console.log(err)
//     res.status(500).json({message:"Internal server error"})
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

//block a route for that you need to create a middleware

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     if(req.url==='/block'){
//         res.status(403).json({message:"This route is blocked"})
//         return
//     }else{
//         next()
//     }
// })

// app.get('/block',(req,res)=>{
//     res.json({message:req.method})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//create a middleware which log method and url 

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log(`request method is ${req.method} and url is ${req.url}`
//     )
//     next()
// })

// app.get("/data",(req,res)=>{
//     res.send('logging purpose')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//encrypt the response for all the request
// const express=require('express')
// const app=express()
// const crypto=require('crypto')

// let secretkey='ahamathbashaking'
// let IV='ahamathbashaF123'

// function encrypt(data){
//     let cipher=crypto.createCipheriv('aes-128-cbc',secretkey,IV)

//     let encrypt=cipher.update(data,'utf-8','hex')
//     encrypt+=cipher.final('hex')
//     return encrypt

// }

// const encryptResponse=(req,res,next)=>{
//     const originalResponse=res.send

//     res.send=function(data){
//         if(typeof data === 'object'){
//             data=JSON.stringify(data)
//         }

//         const encryptData=encrypt(data)
//         originalResponse.call(this,encryptData)
//     }
//     next()
// }
// app.use(encryptResponse)

// app.get('/basha',(req,res)=>{
//     res.send("hello")
// })

// app.get('/get',(req,res)=>{
//     res.send('hello')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//fork example
//create two file one is parent other one child


// const {fork} = require('child_process')

// const child=fork('./child.js')

// child.send({message:"ahamathbasha"})

// child.on('message',(data)=>{
//     console.log("message received from child",data)
// })

//main thread blocking

// const crypto=require('crypto')

// const start=new Date()

// crypto.pbkdf2Sync('password','salt',1000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',1000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',1000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',1000,512,'sha512')
// crypto.pbkdf2Sync('password','salt',1000,512,'sha512')

// console.log('hash',new Date() - start)

//asynchronous uses thread pool

// const crypto=require('crypto')

// const start=new Date()

// for(let i=0;i<4;i++){
//     crypto.pbkdf2('password','salt',10000,512,'sha512',()=>{
//         console.log(`hash ${i+1} , ${new Date() - start}`)
//     })
// }

//changing the thread pool size

// process.env.UV_THREADPOOL_SIZE=5

//take no from params and give response whether it is prime or not

// const express=require('express')
// const app=express()

// function primeOrNot(no){
//     if(no <=1){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(no);i++){
//         if(no%i == 0){
//             return false
//         }
//     }

//     return true
// }

// app.get("/no/:n",(req,res)=>{
//     let result=primeOrNot(Number(req.params.n)) ? "prime" :"Not prime"

//     res.send(result)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//render a html file

// const express=require('express')
// const app=express()
// const path=require('path')

// app.use(express.static(path.join(__dirname,'public')))

// app.get('/render',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))

// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//dynamci html file

// const express=require('express')
// const app=express()
// const path=require('path')

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

//program based on body parser it is depreceated because in express it has capabilities body parser example

// const express=require('express')
// const app=express()
// const bodyParser=require('body-parser')
// const path=require('path')

// app.set('view engine','ejs')

// app.set('views',path.join(__dirname,'views'))

// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({extended:false}))

// app.use(express.static(path.join(__dirname,'public')))

// app.get('/submit',(req,res)=>{
//     res.render('form')
// })

// app.post('/submit',(req,res)=>{
//     console.log(req.body)

//     const {username,email} = req.body

//     res.send(`username is ${username} and email is ${email}`)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//create a fork which perform math operation parent send a no child will multiply with other no and give the result

// const {fork} = require('child_process')

// const child=fork('./child.js')

// child.send({number:10})

// child.on('message',(result)=>{
//     console.log(`final result is ${result}`)
// })

//other file child code

// process.on('message',(msg)=>{
//     let result=msg.number * 10
//     process.send(result)
// })

//create a event emitter inside that create a method which will increase the count value until it matches the user enter value

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
//         },1000)
//     }
// }

// const eventEmitter=new customEmitter()

// eventEmitter.on('count',(val)=>{
//     console.log(`val is ${val}`)
// })

// eventEmitter.on('stop',()=>{
//     console.log("event is stopped")
// })

// eventEmitter.startCounter(10)

//reading file in different ways

// const fs=require('fs')

// fs.readFile('info.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

// const fs=require('fs/promises')

// fs.readFile('info.txt','utf-8')
// .then((data)=>{
//     console.log(data.toString())
// })
// .catch((err)=>{
//     console.log(err)
// })

// const fs=require('fs')
// const util=require('util')
// const readFile=util.promisify(fs.readFile)

// readFile('info.txt','utf-8')
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// const fs=require('fs').promises

// async function readFile(){
//     try{
//         const data=await fs.readFile('info.txt','utf-8')
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// readFile()

//writing a file in different ways

// const fs=require('fs').promises

// fs.writeFile('date.txt',new Date().toLocaleString(),(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("writing finished")
//     }
// })

// const fs=require('fs').promises
// const write = () => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('date1.txt', new Date().toString())
//         .then(() => resolve("writing completed"))
//         .catch((err) => reject(err));
//     });
//   };
  
//   write()
//     .then((msg) => {
//       console.log(msg);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
// const fs=require('fs').promises

// fs.writeFile('date1.txt',"God bless you maamey")
// .then(()=>console.log("writing completed"))
// .catch((err)=>console.log(err))

// const fs=require('fs/promises')

// async function writing(){
//     try {
//         fs.writeFile('info.txt','good night')
//         console.log("writing successful")
//     } catch (error) {
//         console.log(error)
//     }
// }

// writing()

//set a response header

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     if(req.headers['custom-header'] === 'ahamathbasha'){
//         next()
//     }else{
//        return res.status(403).json({message:"invalid"})
//     }
// })

// app.get("/check",(req,res)=>{
//     res.set('name','ahamathbasha')
//     res.send("i am allowed")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })