const http = require('http')
const fs = require('fs')


//it expect one call back function
const myServer = http.createServer((req, res) => {
    console.log("New request")
    res.end("Heloo Rahul")

});

//to run this server it require one port it is optional to give callback function
myServer.listen(8000, () => console.log('Server Started!'))


//using fs and record log
const logServer = http.createServer((req, res) => {
    const log = `${new Date().toISOString()}: ${req.url} New request received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/':
                return res.end('Home Page')
            case '/about':
                return res.end('This is about')
            default:
                res.statusCode = 404
                return res.end("404 Not Found")
        }
    })
    

})

logServer.listen(8001, () => console.log("Server starting.."))
