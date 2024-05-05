const fs = require("fs");


// Synchronous , it will return something , Blocking request/operation
fs.writeFileSync("./test.txt","Hey we have created a file Synchronously");  // writeFileSync overrides the given file 


// Asynchronously , they expect a callback function , Non-Blocking request/operation
fs.writeFile("./dummy.txt","Hey we have created a file Asynchronously",(err) => {    // writeFile overrides the given file 

});


// Synchronous , it will return something
const result = fs.readFileSync("./contacts.txt","utf-8");

console.log(result);

// Asynchronously , they expect a callback function
fs.readFile("./contacts.txt","utf-8",(err,result) => {

    if(err){
        console.lof("Error",err);
    }
    else{
        console.log(result);
    }
});

// Synchronous 
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());   // It will not override the given file but append the content provided


//fs.cpSync("./test.txt","./copy.txt");  // it will copy the content of text.txt to copy.txt

//fs.unlinkSync("./copy.txt");  // it will delete the file

console.log(fs.statSync("./test.txt"));

fs.mkdirSync("my_docs");

fs.mkdirSync("my_docs/a/b",{recursive:true});