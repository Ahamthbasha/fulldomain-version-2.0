// const fs = require('fs')
// fs.writeFile('abc.txt','i am ahamathbasha',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log('writing completed')


// fs.readFile('abc.txt','utf-8',(data,err)=>{
//     if(data){
//         console.log(data)
//     }

//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFile('abc.txt','\n basha',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appended')
// })


// fs.rename('abc.txt','file.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('rename')
// })


// fs.unlink('abc.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('deleted')
// })

// const check = fs.existsSync('abc.txt')
// console.log(check)

//promise 

// async function readFile(filename){
//     try {
//         const data = await fs.readFile(filename,'utf-8')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile('file.txt')

// const utils = require('util')

// const readFile = utils.promisify(fs.readFile)

// async function readedFile(filename){
//     try {
//         const data = await readFile(filename,'utf-8')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readedFile('file.txt')

//stream

// const fs = require('fs')

// const readFile = fs.createReadStream('file.txt')

// readFile.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const writeFile = fs.createWriteStream('joker.txt')

// writeFile.write("basha")

// console.log('writed')

// const {Duplex} = require('stream')

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data = chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d = new MyDuplex()
// d.write("basha the king maker")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const {Transform} = require('stream')

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const word = chunk.toString().toUpperCase()
//         this.push(word)
//         callback()
//     }
// }

// const t = new MyTransform()
// const read = fs.createReadStream('f.txt')
// const write = fs.createWriteStream('lower.txt')

// read
// .pipe(t)
// .pipe(write)

// console.log('writed')


//child process

// const {exec, execFile, spawn, fork} = require('child_process')
// const { error } = require('console')
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

// execFile('node',['new.js'],(err,stderr,stdout)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     console.log(stdout)
// })



// const child = spawn('cmd.exe',['/c','dir'])

// child.stderr.on('error',(error)=>{
//     console.log(error)
// })

// child.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// child.on('close',()=>{
//     console.log("executed")
// })

// //fork

// const child1 = fork('new.js')

// child1.on('message',(msg)=>{
//     console.log(msg)
// })

// child1.send("good afternoon child")

//event Emitter

// const event = require('events')

// class MyEvent extends event{}

// const e = new MyEvent()

// const greetName = (name)=>{
//     console.log(`${name}`)
// }

// e.on('greet',greetName)

// e.emit('greet','basha')

//app

// const fs = require('fs')

// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log(`method is ${req.method}`)
//     console.log(`url is ${req.url}`)
//     next()
// })

// app.get('/addNo',(req,res)=>{
//     const {first,second} = req.query
//     const sum = parseInt(first) + parseInt(second) 
//     res.send(`addition is ${sum}`)
// })

// app.get("/addition/:first/:second",(req,res)=>{
//     const {first,second} = req.params

//     const sum = parseInt(first) + parseInt(second)

//     res.send(`addition is ${sum}`)
// })

// app.get('/checkFile/:fileName',(req,res)=>{
//     const {fileName} = req.params

//     const check = fs.existsSync(fileName)

//     if(!check){
//         res.send('there is no file exists with that name')
//     }else{
//         fs.writeFile(fileName,new Date().toString(),(err)=>{
//             if(err){
//                 console.log(err)
//             }
//         })

//         res.send('with that fileName date is updated successfully')
//     }
// })

// app.use((err,req,res,next)=>{
//     console.log(err)
//     res.status(500).send('something went wrong')
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// })


//router


// const fs = require('fs')

// const express = require('express')
// const app = express()
// const router = express.Router()


// router.use((req,res,next)=>{
//     console.log('method is',req.method)
//     console.log('url is',req.url)
//     next()
// })

// app.use(router)

// app.get('/addTo',(req,res)=>{
//     const {first,second} = req.query

//     res.send(parseInt(first)+parseInt(second))
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//creating three files

// const fs = require('fs')

// for(let i=1;i<=3;i++){
//     fs.writeFile(`file${i}.txt`,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(`file is written ${i} times`)
//     })
// }


// const event = require('events')

// class MyEvent extends event{}

// const e = new MyEvent()

// const greetFn = (name)=>{
//     console.log(`hello ${name}`)
// }

// e.on('greet',greetFn)

// e.emit('emit',greetFn('basha'))


const object = {
    name:"ahamathbasha",
    greet(city){
        return `hello ${this.name}.From ${city}`
    }
}

const object2 = {
    name:"bob"
}

console.log(object.greet.call(object2,'america'))

console.log(object.greet.apply(object2,['india']))

const bindGreet = object.greet.bind(object2,'china')
console.log(bindGreet())

const pro = {
    name:'basha',
    age:30
}

const handler = {
    get(target,props){
       return props in target ? target[props] : 'no props'
    },

    set(target,props,value){
        if(props == 'name'){
            target[props] = value
        }

        if(props == 'age'){
            target[props] = value
        }
    }
}

const proxy = new Proxy(pro,handler)
console.log(proxy.name)
proxy.name = 'ahamthabsha'
console.log(proxy)
console.log(pro)


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let no = true
//         if(no){
//             resolve(no)
//         }else{
//             reject('invalid')
//         }
//     },100)
// })

// promise1
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let val = true
            if(val){
                resolve(val)
            }else{
                reject('invalid value')
            }
        })
    })
}

async function handle(){
    try {
        const result = await promise1()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

handle()