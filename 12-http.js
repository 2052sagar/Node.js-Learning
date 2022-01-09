const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        //res.write();
        res.end("<h1>This is home page</h1>");
    }else if(req.url === '/about') {
       // res.write();
        res.end("<h1>This is about page</h1>");
    }else{
       // res.write();
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back to Home Page</a>
        `);
    }
   
})

server.listen(5000);