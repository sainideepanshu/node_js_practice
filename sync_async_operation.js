const fs = require("fs");

const os = require("os");

console.log(os.cpus().length);

// console.log("1");

// const result = fs.readFileSync("./contacts.txt","utf-8");

// console.log(result);

// console.log("2");


console.log("1");


fs.readFile("./contacts.txt","utf-8",(err,result) => {

    if(err){
        console.lof("Error",err);
    }
    else{
        console.log(result);
    }
});


console.log("2");

console.log("3");


// Default thread pool size = 4

// We can increase it depending on the cores of our CPU/machine