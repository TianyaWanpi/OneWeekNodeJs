// 1,导入模块
const http = require('http');
const url = require('url');

// 2,创建实例
const server = http.createServer();

// 3,监听request
server.on('request' , (req,res) =>{
    let {query} = url.parse(req.url,true);
    console.log(query);
})

// 4,启动服务
server.listen(8080 , ()=>{
    console.log('server is running at http://127.0.0.1:8080');
})