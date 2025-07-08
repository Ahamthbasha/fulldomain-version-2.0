// const http=require('http')

// const server=http.createServer((req,res)=>{

// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const { exec } = require('child_process');

// exec('dir', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Output:\n${stdout}`);
// });

// const { execFile } = require('child_process');

// // Correct: pass arguments as an array
// execFile('node', ['maamey.js'], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Output:\n${stdout}`);
// });




const { spawn } = require('child_process');

const ping = spawn('ping', ['google.com']);

ping.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

ping.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

ping.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});
