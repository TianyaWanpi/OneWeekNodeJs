// 1,导入http
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2,创建web服务实例
const server = http.createServer();

// 3,创建request监听实例
server.on( 'request' , (req,res) => {
    let pathname = req.url; 
    pathname = pathname === '/'?'index.html':pathname;
    let filename = path.join(__dirname,'public',pathname);
    fs.readFile(filename,(err,data) =>{
        if(err){
            res.statusCode = 500;
            res.end('server internal error')
        }else{
            res.end(data);
        }
   })  
})

// 4,导出服务
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})