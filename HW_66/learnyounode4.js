'use strict';

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
    if(err){
        console.log(err);
    } else {
        let str = data.toString();
        var split = str.split('\n');
        console.log(split.length-1);
    }
});

