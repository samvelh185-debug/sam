import http from 'http';
import 'dotenv/config';
const hostname = "localhost";
const {PORT}=process.env;
const server = http.createServer (async function (req,res){
     res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.end();
})

console.log(PORT);
server.listen(PORT,hostname,()=>{
    console.log(`server is runing on ${PORT}`);
})