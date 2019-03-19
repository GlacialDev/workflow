'use strict'

let http = require('http');
let hello = require('./functions/hello');

const port = 8080;

http.createServer((req, res) => { }).listen(port);

hello()
console.log(`Server running on port ${port}`);