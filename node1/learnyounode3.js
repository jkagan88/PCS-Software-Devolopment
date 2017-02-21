'use strict';

var fs = require('fs');

let doc = fs.readFileSync(process.argv[2]);

let str = doc.toString();
var split = str.split('\n');


console.log(split.length-1);