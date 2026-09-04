const http = require("http")

// const localserver = http.createServer((req, res) => {
//     console.log(`${req.method} ${req.url}`);
//     console.log(req.headers);
//     res.end("This is practice server")

// })

// localserver.listen(8000, () => console.log("I am starting"))

const listener = function (req, res) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/html
    //res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World"
    //res.end('<h2 style="text-align: center;">Hello World</h2>');

    // res.writeHead(200, {
    //     'Content-Type': 'text/html',
    //     'X-Powered-By': 'Node.js',
    //     'Cache-Control': 'no-cache, no-store, must-revalidate',
    //     'Set-Cookie': 'sessionid=abc123; HttpOnly'
    // });

    // res.end('<h1>Hello, World!</h1>');



    const {method, url} = req
    res.end(` you made ${method} on this url ${url}`)

}

const server = http.createServer(listener)
server.listen(3000, () => console.log("Iam have startend"))