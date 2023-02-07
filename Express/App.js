const express = require('express')
const app = express()
const port = 3000

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// app.listen(port,()=>[
//     console.log(`Example app listening on port ${port}`)
// ])

const myLogger = function (req,res,next) {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.get('/', function(req,res){
    res.send('Hello World@');
});

app.listen(3000);