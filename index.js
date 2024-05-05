const math = require("./math.js");  // this require function is from node.js


// agar hum require function k andar sirf ye likhe require("fs") , to wo fs module ko node ki directory m search karega , fs is the built in module in node.js
// agar hum require function k andar sirf ye likhe require("./fs") , to wo fs module ko current working directory m search karega



console.log("Hello Deepu");

console.log(math.add(2,5));

const http = require("http");

const fs = require("fs");

const url = require("url");  // pehle ye url ko node modules or dependencies m search karega agar usme nahi to bhi ye node js k built in modules m search karega

const myServer = http.createServer((req,res) => {

    if(req.url === "/favicon.ico"){
        return res.end();
    }

    const log = `${Date.now()} : ${req.url} New Request recieved \n`;

    const myUrl = url.parse(req.url,true);

    console.log(myUrl);

    fs.appendFile("log.txt",log,(err,data)=>{

        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":    //http://localhost:8000/about?myName=Deepanshu&useId=1
                const username = myUrl.query.myName;
                res.end(`I am ${username}`);
                break;
            case "/search":   //http://localhost:8000/search?search_query=javascript+tic+tac+toe
                const search = myUrl.query.search_query;
                res.end("Here are your results for "+search);
                break;
            default:
                res.end("404 not found");
        }
    });
});

myServer.listen(8000, ()=>{

    console.log("Server started on PORT");

});