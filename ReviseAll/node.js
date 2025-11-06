// const fs = require('fs').promises
// const fs = require('fs')
// const path = require('path')

// fs.writeFile('date.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log("writed")

// fs.readFile("date.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     if(data){
//         console.log(data)
//     }
// })

// fs.readFile("date.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     if(data){
//         console.log(data.toString())
//     }
// })

// fs.rename('date.txt',"Date.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log('renamed')

// fs.appendFile('Date.txt',"\n how are you basha bhai",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log('file appended')

// fs.unlink("Date.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log("deleted successfully")


// for(let i=1;i<=10;i++){
//     fs.writeFile(`date${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log('writed')
// }

// read all files in a folder

// const folderPath = path.join(__dirname)
// fs.readdir(folderPath,(err,files)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     let txtFiles = files.filter((val)=>path.extname(val) == ".txt")

//     txtFiles.forEach((val)=>{
//         fs.readFile(val,'utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }

//             if(data){
//                 console.log(data)
//             }
//         })
//     })
// })

// let files = ['a.txt','b.txt','c.txt']

//my logic

// function read1(file,){
//     fs.readFile(file,'utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         fs.writeFile("output.txt",data,(err)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//         })
//     })
// }

// function read2(file,){
//     fs.readFile(file,'utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         let dataToWrite = data
//         fs.appendFile("output.txt",`\n ${dataToWrite}`,(err)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//         })
//     })
// }

// for(let i = 0;i<files.length;i++){
//     if(i == 0){
//         read1(files[i])
//     }else{
//         read2(files[i])
//     }
// }

//optimized version

// let files = ['a.txt','b.txt','c.txt']
// let outputFile = "output.txt"

// async function mergeContent(arr){
//     try {
//         const result = await Promise.all(arr.map(val=> fs.readFile(val,'utf-8')))

//         const finalData = result.join("\n")

//         await fs.writeFile(outputFile,finalData)

//         console.log("writed")
//     } catch (error) {
//         throw error
//     }
// }

// mergeContent(files)

// fs.readFile("output.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     if(data){
//     let wordCount = data.split(/\s+/)
//     console.log(wordCount.length)
//     let line = data.split(/\n/)
//     console.log(line.length)
//     }
// })


//rename

// let folder = path.join(__dirname)

// fs.readdir(folder,(err,files)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     let txtFiles = files.filter((val)=>path.extname(val) == ".txt")

//     txtFiles.forEach((val)=>{
//         console.log(val)
//         let renameSplit= val.split('.')
//         let rename = `${renameSplit[0]}.bak`
//         fs.rename(val,rename,(err)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//         })
//         console.log("renamed")
//     })
// })



//delete file

// let folder = path.join(__dirname)

// let currentDay = Date.now()
// let days = 1
// fs.readdir(folder,(err,files)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     files.forEach((val)=>{
//         fs.stat(val,(err,stats)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             let getFileStats = stats.mtimeMs
//             let getDaysDiff = currentDay - getFileStats
//             let diff = getDaysDiff / 1000 * 60 * 60 * 24

//             if(diff > days){
//                 fs.unlink(val,(err)=>{
//                     if(err){
//                         throw err
//                     }

//                     console.log("deleted")
//                 })
//             }
//         })
//     })
// })



//COPY FILE CONTENT

// fs.copyFile('data.txt','destination.txt',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log("file copied")
// })

//log message whenever a file is modified

// fs.watch('data.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// const fsPromise = require('fs/promises')

// async function readFile(file){
//     try {
//         const result = await fsPromise.readFile(file,'utf-8')
//         console.log(result)
//     } catch (error) {
//         throw error
//     }
// }

// readFile('data.txt')

// async function writeFile(fileName,data){
//     try {
//         await fsPromise.writeFile(fileName,data.toString())
//         console.log("writed")
//     } catch (error) {
//         throw error
//     }
// }

// writeFile("date1.txt",new Date())

//folder

// const fsPromise = require('fs/promises')
// let folder = path.join(__dirname,"logs")

// async function createFolderWriteFilesRead(){
//     try {
//         await fsPromise.mkdir(folder)
        
//         for(let i=1;i<=5;i++){
//             await fsPromise.writeFile(path.join(folder,`logs${i}.txt`),new Date().toString())
//             console.log(`log${i}.txt writed`)
//         }

//         let files = await fsPromise.readdir(folder)

//         files.sort()

//         for(let file of files){
//             const data = await fsPromise.readFile(path.join(folder,file),'utf-8')
//             console.log(`${file}:\n${data}`)
//         }
//     } catch (error) {
//         throw error
//     }
// }

// createFolderWriteFilesRead()

//streams

const { Console } = require('console')
const fs = require('fs')
// const readStream = fs.createReadStream("data.txt")

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//     console.log("reading completed")
// })

// readStream.on('error',(err)=>{
//     console.log(err)
// })


// const writeStream = fs.createWriteStream("bless.txt")
// writeStream.write("hello maamey god bless you")

// writeStream.on('finish',()=>{
//     console.log("writing finished")
// })

// writeStream.on('error',(err)=>{
//     console.log(err)
// })


//duplex

// const {Duplex} = require('stream')

// class Myduplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ""
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }

//     _read(chunk,encoding,callback){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const duplex = new Myduplex()

// duplex.write("hello maamey")
// duplex.end()

// duplex.on("finish",()=>{
//     console.log("writing finished")
// })

// duplex.on("error",(err)=>{
//     console.log("err",err)
// })

// duplex.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// duplex.on('end',()=>{
//     console.log("reading completed")
// })

// duplex.on("error",(err)=>{
//     console.log("error in reading",err)
// })

// transform stream

// const {Transform} = require('stream')
// class Mytransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let data = chunk.toString().toUpperCase()
//         this.push(data)
//         callback()
//     }
// }

// const transform = new Mytransform()
// const readFile = fs.createReadStream("data.txt")
// const writeFile = fs.createWriteStream("modified.txt")

// readFile
// .pipe(transform)
// .pipe(writeFile)
// .on('finish',()=>{
//     console.log("transformed")
// })

// 🧩 1️⃣ File Copy Stream (Read + Write Stream)

// Question:
// Write a Node.js script that copies the contents of input.txt to output.txt using streams — but without reading the entire file into memory.

// Concept Tested:
// Efficient stream piping, handling data and end events, memory optimization.

// ✅ Bonus Twist: Add a progress counter showing how many bytes have been copied so far.

// const readStream = fs.createReadStream('input.txt')
// const writeStream = fs.createWriteStream('output.txt')
// const fileSize = fs.statSync('input.txt').size
// let byteSize = 0
// readStream
// .on('data',(chunk)=>{
//     byteSize += chunk.length
//     const progress = ((byteSize/fileSize)*100)
//     console.log(progress)
// })
// .pipe(writeStream)
// .on('finish',()=>{
//     console.log("writing finished")
// })


// 🧩 2️⃣ Word Count Transform Stream

// Question:
// Create a Transform stream that reads text from a file, counts how many words appear in each chunk, and logs the cumulative total as the stream progresses.

// Concept Tested:

// Custom _transform() logic

// Handling partial words between chunks

// Stream flow control

// ✅ Bonus: Handle punctuation and newline characters gracefully.

// const {Transform} = require('stream')

// class MyTransform extends Transform{
//     constructor(){
//         super()
//         this.totalWordCount = 0
//     }
//     _transform(chunk,encoding,callback){
//         let data = chunk.toString()
//         let words = data.split(/\W+/).filter(Boolean);
//         this.totalWordCount += words.length
//         console.log(`incomingChunk length :${words.length} , totalLength :${this.totalWordCount}`)
//         callback()
//     }
// }

// const readStream = fs.createReadStream('data.txt')
// const transform = new MyTransform()
// readStream
// .pipe(transform)
// .on('finish',()=>{
//     console.log('finished')
// })


// 🧩 3️⃣ Duplex Stream Echo Server

// Question:
// Implement a Duplex stream that acts as an echo system:

// When you write data, it stores it.

// When you read, it returns the stored data in uppercase.

// Concept Tested:
// Understanding of bi-directional data flow in a single stream class (_read + _write coordination).

// ✅ Bonus: Delay the response by 1 second to simulate async data flow.

// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ""
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }

//     _read(size){
//         setTimeout(()=>{
//             if(this.data){
//                 this.push(this.data.toUpperCase())
//                 this.push(null)
//             }else{
//                 this.push(null)
//             }
//         },1000)
//     }
// }

// const duplex = new MyDuplex()

// duplex.write("hello mr basha you have got the job offer")

// duplex.write("\n god bless you maamay")

// duplex.end()

// duplex.on('data',(chunk)=>{
//         console.log(chunk.toString())
// })

// duplex.on('end',()=>{
//     console.log("ended")
// })

// duplex.on('error',(err)=>{
//     console.log(err)
// })



// 🧩 4️⃣ Chained Transform Streams

// Question:
// Create a pipeline of multiple transforms:

// Convert text to uppercase

// Replace spaces with hyphens (-)

// Count total characters written

// Then read from source.txt and write to output.txt.

// Concept Tested:

// Composing multiple transform streams

// Understanding .pipe() chaining

// Knowing when .on('finish') fires.

// ✅ Bonus: Add error handling in the pipeline using stream.pipeline().



// const { Transform, pipeline } = require('stream');

// class UpperCaseTransform extends Transform {
//   _transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// }

// class ReplaceTransform extends Transform {
//   _transform(chunk, encoding, callback) {
//     this.push(chunk.toString().replace(/\s+/g, '-'));
//     callback();
//   }
// }

// class CountCharTransform extends Transform {
//   constructor() {
//     super();
//     this.totalChars = 0;
//   }

//   _transform(chunk, encoding, callback) {
//     this.totalChars += chunk.length;
//     process.stdout.write(`\r📊 Characters processed: ${this.totalChars}`);
//     this.push(chunk);
//     callback();
//   }

//   _flush(callback) {
//     console.log(`\n✅ Total characters processed: ${this.totalChars}`);
//     callback();
//   }
// }

// const read = fs.createReadStream('data.txt');
// const write = fs.createWriteStream('output.txt');

// pipeline(
//   read,
//   new UpperCaseTransform(),
//   new ReplaceTransform(),
//   new CountCharTransform(),
//   write,
//   (err) => {
//     if (err) console.error('❌ Pipeline failed:', err);
//     else console.log('✅ Finished successfully!');
//   }
// );


// 🧩 5️⃣ Log Compression Stream

// Question:
// Read a large log file using a Readable stream, compress it using the built-in zlib Transform stream, and save it as logs.gz.

// Concept Tested:

// Integration of core Node.js streams (fs + zlib)

// Efficient file compression without full memory load.

// ✅ Bonus: Decompress it back and verify content.

// const read = fs.createReadStream('output.txt') 
// const write = fs.createWriteStream('compressedlogs.gz') 
// const compress = zlib.createGzip() 
// const {pipeline} = require('stream')
// pipeline( 
//     read,
//     compress,
//     write,
//     (err)=>{ 
//         if(err){ 
//             console.log('err',err)
//         }
//         else{ 
//             console.log("file compressed") 
//         } 
//     } 
// )

// const zlib = require('zlib')
// const read = fs.createReadStream('output.txt')
// const write = fs.createWriteStream('compressedlogs.gz')
// const compress = zlib.createGzip()

// const decompress = zlib.createGunzip()
// const writeDeCompress = fs.createWriteStream('decompressedlogs.gz')

// const {pipeline} = require('stream')


// pipeline(
//     read,
//     compress,
//     write,
//     (err)=>{
//         if(err){
//             console.log('err',err)
//         }else{
//             console.log("file compressed")
//         }
//         pipeline(
//     fs.createReadStream('compressedlogs.gz'),
//     decompress,
//     writeDeCompress,
//     (err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("decompressed")
//         }
//     }
// )
//     }
// )

// const {exec, execFile, spawn, fork} = require('child_process')

// exec('dir',(stderr,stdout,err)=>{
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

// execFile('node',['node2.js'],(err,stderr,stdout)=>{
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


// const newProcess = spawn('cmd.exe',['/c','dir'])

// newProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// newProcess.stderr.on('data',(err)=>{
//     console.log(err)
// })

// newProcess.on('close',(code)=>{
//     console.log("exited:",code)
// })


// const child = fork('node2.js')

// child.on('message',(msg)=>{
//     console.log('child message',msg)
// })

// child.send("good afternoon")

// const e = require('events')

// class Myevents extends e{}

// const event = new Myevents()

// const wish = (name)=>{
//     console.log(`hello ${name}`)
// }

// event.on('greet',wish)

// event.emit('greet','basha')

// event.once('greet',wish)

// event.emit('greet','basha')

// event.emit('greet','basha')

// event.emit('greet','basha')

// event.removeListener('greet',wish)

// event.emit('greet','basha')

// event.emit('greet','basha')


// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(401).json({message:"get method is blocked"})
//     }else{
//         next()
//     }
// })

// const express = require('express')

// const app = express()

// const checkHeader = ((req,res,next)=>{
//     if(req.header("basha") == "looking for job"){
//         next()
//     }else{
//         res.status(401).json({message:"invalid header"})
//     }
// })

// app.get("/hello",checkHeader,(req,res)=>{
//     res.send('hello bro')
// })

// app.post("/goodbye",(req,res)=>{
//     const data = req.body
//     res.send("welcome")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// proper router level middleware

// const express = require('express')
// const app = express()

// const router = express.Router()

// router.use((req,res,next)=>{
//     console.log(req.method)
//     next()
// })

// router.get("/basha",(req,res)=>{
//     res.send("hi router level middleware")
// })

// app.use("/api",router)

// app.get("/idiot",(req,res)=>{
//     res.send("hi am basha")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })



// const express = require('express')
// const app = express()

// function writeFile(file){
//     fs.writeFile(file,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     return
// }

// app.get("/getFile",(req,res)=>{
//     const {filename} = req.query

//     const checkExistOrNot = fs.existsSync(filename)

//     if(checkExistOrNot){
//         res.status(200).json({message:"you already have the file the file content is updated"})
//     }else{
//         writeFile(filename)
//         res.status(201).json({message:"file is created with current Date"})
//     }
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })