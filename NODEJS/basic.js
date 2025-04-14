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
// }

//cookie

// const express=require('express')
// const cookieParser=require('cookie-parser')

// const app=express()
// app.use(cookieParser())

// app.get('/set-cookie',(req,res)=>{
//     res.cookie('username','ahamathbasha',{maxAge:86400000})
//     res.write("cookie set")
//     res.end("finsish")
// })

// app.get('/get-cookie',(req,res)=>{
//     const username=req.cookies.username
//     res.send(username)
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })

//session

// const express=require('express')
// const session=require('express-session')

// const app=express()

// app.use(session({
//     secret:'mySeckretKey',
//     resave:false,
//     saveUninitialized:true,
//     cookie:{maxAge:60000}
// }))

// app.get('/login',(req,res)=>{
//     req.session.user="ahamathbasha"
//     res.send("session created")
// })

// app.get('/user',(req,res)=>{
//     if(req.session.user){
//         res.send(req.session.user)
//     }else{
//         res.send("no user")
//     }
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })

//cors

// const express=require('express')
// const cors=require('cors')

// const app=express()

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST'],
//     allowedHeaders:['Content-Type','Authorization'],
//     credentials:true
// }))

// app.get('/setData',(req,res)=>{
//     res.json({message:"cors is working"})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//preflightRequest

// const express=require('express')
// const cors=require('cors')

// const app=express()

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT'],
//     allowedHeaders:['Content-Type','Authorization'],
//     credentials:true
// }))

// app.use(express.json())

// app.put('/update',(req,res)=>{
//     res.json('put request received and updated')
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// //client code trigger preflight request

// fetch('http://localhost:3000/update',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json',
//         'Authorization':'token'
//     },
//     credentials:'include'
// }).then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


//options

// const express=require('express')
// const app=express()

// app.options('/update',(req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')

//     res.setHeader('Access-control-Allow-Methods','PUT,POST,DELETE')

//     res.setHeader('Access-Control-Allow-Heders','Content-Type,Authorization')

//     res.setHeader('Access-Control-Allow-Credentials',true)

//     res.statusCode(204)
// })

// app.use(express.json())

// app.put('/update',(req,res)=>{
//     res.json({message:"patch request and response"})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// fetch('http://localhost:3000/update',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json',
//         'Authorization':'i'
//     },
//     credentials:'include'
// })
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// const express=require('express')
// const app=express()

// app.set('title','kaatubharani')
// console.log(app.get('title'))

// app.get('/go',(req,res)=>{
//     res.send("hello")
// })

// app.post('/submit',(req,res)=>{
//     res.send("data is submitted")
// })

// app.put('/user/:id',(req,res)=>{
//     res.send(`${req.params.id} updated`)
// })

// app.patch('/user/:id',(req,res)=>{
//     res.send(`${req.params.id} updated`)
// })

// app.delete('/user/:id',(req,res)=>{
//     res.send(`${req.params.id} user deleted`)
// })

// app.all('/handle',(req,res)=>{
//     res.send('handled')
// })

// app.route('/hello')
// .get((req,res)=>res.send("hello route"))
// .post((req,res)=>res.send("hello post"))



// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const app=express()

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     console.log(req.method)
//     next()
// })

// app.get('/see',(req,res)=>{
//     res.send("hello")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const app=express()

// app.use(express.static('public'))

// app.listen(3000,()=>{
//     console.log("hello world")
// })

//route params

// const express=require('express')
// const app=express()

// app.get('/user/:id',(req,res)=>{
//     res.send(`id is ${req.params.id}`)
// })

// app.get('/search',(req,res)=>{
//     res.send(`${req.query.name}`)
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//APPLICATION LEVEL MIDDLEWARE

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log(req.method)
//     next()
// })


// app.get('/get',(req,res)=>{
//     res.send("response sended")
// })

// app.listen(3000,()=>{
//     console.log("server si running")
// })

//authentication middleware

// const express=require('express')
// const app=express()

// function auth(req,res,next){
//     const token=req.headers['authorization']

//     if(token === 'seckretToken'){
//         next()
//     }else{
//         res.send('err')
//     }
// }

// app.get('/payment',auth,(req,res)=>{
//     res.send('see the page')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })


// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.status(403).json({message:"access blocked"})
//     }else{
//         next()
//     }
// })

// app.get('/get',(req,res)=>{
//     res.send('i am back')
// })

// app.post('/user',(req,res)=>{
//     res.send('post method have access)
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

//error handling middleware
// const express=require('express')
// const app=express()

// app.get('/error',(req,res)=>{
//     throw new Error("something went wrong")
// })

// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.status(500).json({error:err.message})
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

//third party middleware

// const express=require('express')
// const app=express()

// const morgan=require('morgan')

// app.use(morgan('dev'))

// app.get('/hello',(req,res)=>{
//     res.send("hello")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//middleware function

// const express=require('express')
// const app=express()

// const loggerMiddleware=((req,res,next)=>{
//     console.log(`${req.method} and ${req.url}`)
//     next()
// })


// app.use(loggerMiddleware)

// app.get('/get',(req,res)=>{
//     res.write("hello")
//     res.end()
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })

//middleware lifecycle

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log(`${req.method} and ${req.url}`)
//     next()
// })

// app.use((req,res,next)=>{
//     req.requestTime=new Date()
//     console.log('middleware2 time added')
//     next()
// })

// app.get('/get',(req,res)=>{
//     res.send(req.requestTime)
// })

// app.use((err,req,res,next)=>{
//     res.status(500).json({error:err.message})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//passing two middlewares in a route

// const express=require('express')
// const app=express()

// const logMethod=((req,res,next)=>{
//     console.log(req.method)
//     next()
// })

// const logRequest=((req,res,next)=>{
//     console.log(req.url)
//     next()
// })

// app.get('/get',logMethod,logRequest,(req,res)=>{
//     res.status(200).json({message:"success"})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//DYNAMIC ROUTING

// const express=require('express')
// const app=express()

// app.get('/user/:id',(req,res)=>{
//     res.send(`user id is:${req.params.id}`)
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//url encoder

// const query='node.js @##!'
// const encodeUri=encodeURIComponent(query)
// console.log(encodeUri)

//session

// const express=require('express')
// const session=require('express-session')

// const app=express()

// app.use(session({
//     secret:'mySecretKey',
//     resave:false,
//     saveUninitialized:false
// }))

// app.get('/user',(req,res)=>{
//     req.session.username='ahamathabasha'
//     console.log(req.session)
//     res.json({message:"session created"})
// })

// app.get('/checksession',(req,res)=>{
//     if(req.session.username){
//         res.json({message:req.session.username})
//     }else{
//         res.json({message:"no session created"})
//     }
// })

// app.get('/logout',(req,res)=>{
//    req.session.destroy()
//    console.log(req.session)
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//cookie

// const express=require('express')
// const cookieParser=require('cookie-parser')
// const app=express()

// app.use(cookieParser('mySecretKey'))

// app.get('/set-cookie',(req,res)=>{
//     res.cookie('username','ahamathbasha',{
//         maxAge:1000 * 60 * 60,
//         httpOnly:true,
//         signed:true
//     })
//     res.send('cookie setted')
// })


// app.get('/get-cookie',(req,res)=>{
//     res.json({message:req.signedCookies.username})
// })

// app.get('/clear-cookie',(req,res)=>{
//     res.clearCookie('username')
//     res.send("cookie cleared")
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const cookieParser=require('cookie-parser')
// const session=require('express-session')
// const app=express()

// app.use(cookieParser('myCookieparseSecret'))

// app.use(session({
//     secret:'mySessionSecret',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:1000*60*5,
//         httpOnly:true
//     }
// }))

// app.get('/login',(req,res)=>{
//     req.session.username="ahamathbasha"

//     res.cookie('visitor',true,{
//         maxAge:1000*60*5,
//         httpOnly:true,
//         signed:true
//     })

//     res.send('cookie and session is set')
// })

// app.get('/profile',(req,res)=>{
//     if(req.session.username){
//         res.send(`${req.session.username} sessions cookie is ${req.sessionID} and ${req.cookies}`)        
//     }else{
//         res.send(`no session and cookie`)
//     }
// })

// app.get('/logout',(req,res)=>{
//     req.session.destroy()
//     res.clearCookie('connect-sid')
//     res.clearCookie('visitor')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

//build own api

// const express=require('express')
// const app=express()

// app.use(express.json())

// const user=[{id:101,name:"ahamathbasha"}]

// app.get('/user',(req,res)=>{
//     res.json({message:user})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const mongoose=require('mongoose')
// const app=express()

// mongoose.connect('mongodb://127.0.0.1:27017/mydb')
// .then(()=>console.log('connected to mongodb'))

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//request and response

// const express=require('express')
// const app=express()

// app.use(express.json())

// app.get('/get',(req,res)=>{
//     res.send(req.query.name)
// })

// app.get('/value/:id',(req,res)=>{
//     res.send(req.params.id)
// })

// app.post('/data',(req,res)=>{
//     const {name,age} = req.body
//     res.send(`name is ${name} and age is ${age}`)
// })

// app.get('/url',(req,res)=>{
//     res.send(req.url)
// })

// app.get('/method',(req,res)=>{
//     res.send(req.method)
// })

// app.get('/check',(req,res)=>{
//     const userAgent=req.headers['user-agent']
//     const customHeader=req.headers['x-custom-header']

//     res.send(`user agent is ${userAgent} and customHeader is ${customHeader}`)
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

// const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.method== 'POST' && req.url == '/submit'){
//         let body=''

//         req.on('data',(chunk)=>{
//             body+=chunk.toString()
//         })

//         req.on('end',()=>{
//             const data=JSON.parse(body)
//             res.writeHead(200,{"content-type":"application/json"})
//             res.end(JSON.stringify({message:"data received",data}))
//         })
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.url='/'){
//         res.setHeader('Content-Type','application/json')
//         res.setHeader('x-Custom-Header','HelloWorld')

//         res.writeHead(200)
//         res.end(JSON.stringify({message:"header setted"}))
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const express=require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.set('Content-Type','application/json')
//     res.set('x-Custom-Header','express')

//     res.send({message:"header set"})
// })

// app.get('/string',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/obj',(req,res)=>{
//     res.send({name:"ahamath",age:30})
// })

// app.get('/arr',(req,res)=>{
//     res.send([1,2,3,4])
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//res.redirect

// const express=require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.redirect(301,'/new')
// })

// app.get('/new',(req,res)=>{
//     res.send("this is permanent")
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('hello')
//     res.write("basha")

//     res.end()
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const http=require('http')

// const server=http.createServer((req,res)=>{
    
// })

// server.listen(3000,'localhost',()=>{
//     console.log(server.address())
//     console.log("server is running")
// })

// setTimeout(()=>{
//     server.close(()=>{
//         console.log("server is closed")
//     })
// },5000)


//http

// const http=require('http')

// const server=http.createServer((req,res)=>{
    
//     http.get('http://jsonplaceholder.typicode.com/posts/1',(apiRes)=>{
//         let data=''

//         apiRes.on('data',(chunk)=>{
//             data+=chunk.toString()
//         })

//         apiRes.on('end',()=>{
//             console.log(data)
//         res.writeHead(200,{'Content-Type':'application/json'})

//         res.end(data)
//         })
//     })
// })

// server.listen(3000,()=>{
//     console.log('server is running')
// })

// const http=require('http')

// const data=JSON.stringify({
//     title:"hello",
//     body:'This is from node.js',
//     userId:10
// })

// const options={
//     hostname:'jsonplaceholder.typicode.com',
//     path:'/posts',
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json',
//         'Content-Length':data.length
//     }
// }

// let req=http.request(options,(res)=>{
    
//     let result=''

//     res.on('data',(chunk)=>{
//         result+=chunk
//     })

//     res.on('end',()=>{
//         console.log(result)
//     })
// })

// req.write(data)
// req.end()

// const EventEmitter=require('events')
// const { emit } = require('process')
// const emitter=new EventEmitter()

// emitter.on('greet',(name)=>{
//     console.log(`hello ${name}`)
// })

// emitter.emit('greet','ahamathbasha')

// const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('hello')
// })

// server.on('connection',()=>{
//     console.log("new connection request")
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

const fs = require('fs');
setTimeout(() => {
  console.log("1. setTimeout (Timers Phase)");
}, 0);
setImmediate(() => {
  console.log("2. setImmediate (Check Phase)");
});
fs.readFile(__filename, () => {
  console.log("3. fs.readFile (Poll Phase)");
  setImmediate(() => {
    console.log("4. Inside I/O: setImmediate (Check Phase)");
  });
  setTimeout(() => {
    console.log("5. Inside I/O: setTimeout (Timers Phase)");
  }, 0);
});
console.log("6. Synchronous Log");