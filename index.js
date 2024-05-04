const math = require("./math.js");  // this require function is from node.js


// agar hum require function k andar sirf ye likhe require("fs") , to wo fs module ko node ki directory m search karega , fs is the built in module in node.js
// agar hum require function k andar sirf ye likhe require("./fs") , to wo fs module ko current working directory m search karega



console.log("Hello Deepu");

console.log(math.add(2,5));