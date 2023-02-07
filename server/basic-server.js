const http = require('http');
const PORT = 4999;
const ip = 'localhost';
const cors = require('cors');
const express = require('express')
const app = express()

app.use(cors());
app.use(express.json({strict : false}))

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.post('/upper', function (req,res){
  res.json(req.body.toUpperCase());
})

app.post('/lower', function (req,res){
  res.json(req.body.toLowerCase());
})

app.use(function(req,res,next){
  res.status(404).send('404 Err')
})

app.use(function(err,req,res, next){
  console.err(err.stack)
  res.status(500).send('500 Err')
})

app.listen(PORT,ip,()=>{
  console.log(`http server listen on ${ip}:${PORT}`);
})
// const server = http.createServer((req, res) => {
//   if (req.method === 'OPTIONS'){
//     res.writeHead(200, defaultCorsHeader)
//     res.end()
//   }
//   if (req.method === 'POST'){
//     let body = []
//     req.on('data',chunk => {
//       body.push(chunk)
//     }).on('end',()=>{
//       body = Buffer.concat(body).toString();
//       res.writeHead(201, defaultCorsHeader);
//       if (req.url === '/upper') res.end(body.toUpperCase())
//       if (req.url === '/lower') res.end(body.toLowerCase())
//       else{
//         res.writeHead(404, defaultCorsHeader)
//         res.end();
//       }
//     })
//   }
// })
//   if (req.method === 'POST') {
//     if (req.url === '/lower') {
//       let data = '';
//       req.on('data', chunk => {
//         data = data + chunk;
//       });
//       req.on('end', () => {
//         data = data.toLowerCase();
//         res.writeHead(201, defaultCorsHeader);
//         res.end(data);
//       });
//     } else if (req.url === '/upper') {
//       let data = '';
//       req.on('data', chunk => {
//         data = data + chunk;
//       });
//       req.on('end', () => {
//         data = data.toUpperCase();
//         res.writeHead(201, defaultCorsHeader);
//         res.end(data);
//       });
//     } else {
//       res.writeHead(404, defaultCorsHeader);
//       res.end();
//     }
//   }
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200, defaultCorsHeader);
//     res.end();
//   }
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };