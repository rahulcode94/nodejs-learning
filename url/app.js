const http = require("http")
const fs = require("fs")
const url = require("url");
const { error } = require("console");


//create server
const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} new req Recived\n`;

    const myUrl = url.parse(req.url,true);

    console.log(myUrl);

    fs.appendFile("log.txt",log,(error,data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your result for" + search);
            default:
                res.end("404 Not Found")
        }
    })
})

//listen on 8000 port
myServer.listen(8000,()=> console.log("I am starting"))
