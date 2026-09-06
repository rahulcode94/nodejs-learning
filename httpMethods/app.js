//HTTP methods describe what the client wants to do with a resource:
//get - read data
//post - create new user
//put - Replace existing data
// patch -update part of existing data
//delete -remove data


const http = require("http")
const url = require("url")


function myServer(req, res) {

    // const myurl = url.parse(req.url, true)
    // switch (myurl.pathname) {
    //     case "/":
    //         res.end("Home Page")
    //     case "/about":
    //         const uername = myurl.query.myname
    //         return res.end(`hi, ${uername}`)
    //         break;
    //     default:
    //         res.statusCode = 404
    //         return res.end("404 Not Found")

    // }



    if (req.method === "GET" && req.url === "/") {
        return res.end("Home Page");
    }

    if (req.method === "GET" && req.url === "/about") {
        return res.end("About Page");
    }

    if (req.method === "POST" && req.url === "/users") {
        return res.end("User created");
    }

    res.statusCode = 404;
    res.end("404 Not Found");

}

const server = http.createServer(myServer);
server.listen(8000, () => console.log("HTTP Methods Starting..."))