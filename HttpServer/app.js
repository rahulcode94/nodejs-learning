const http = require('http')


//it expect one call back function
const myServer = http.createServer((req,res)=>{
    console.log("New request")
    res.end("Heloo Rahul")

});

//to run this server it require one port it is optional to give callback function
myServer.listen(8000,()=> console.log('Server Started!'))