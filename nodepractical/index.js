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

const fs=require('fs')

fs.writeFile('info.txt','abcd hello basha how are you',(err)=>{
    if(err){
        console.log(err)
    }

    console.log('writted')
})

fs.readFile('info.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }

    console.log(data.split(' ').includes('you'))
})