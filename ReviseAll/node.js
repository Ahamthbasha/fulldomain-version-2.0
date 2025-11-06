// const fs = require('fs').promises
const fs = require('fs')
const path = require('path')

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

let folder = path.join(__dirname)

let currentDay = Date.now()
let days = 1
fs.readdir(folder,(err,files)=>{
    if(err){
        console.log(err)
        return
    }

    files.forEach((val)=>{
        fs.stat(val,(err,stats)=>{
            if(err){
                console.log(err)
                return
            }
            let getFileStats = stats.mtimeMs
            let getDaysDiff = currentDay - getFileStats
            let diff = getDaysDiff / 1000 * 60 * 60 * 24

            if(diff > days){
                fs.unlink(val,(err)=>{
                    if(err){
                        throw err
                    }

                    console.log("deleted")
                })
            }
        })
    })
})