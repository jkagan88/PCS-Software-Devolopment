'use strict';

var fs = require('fs');

function filterDir(dir, ext){
    fs.readdir(dir, function(err, data){
        if(err){
            console.log(err);
        } else {
            var extArray = [];
            for(var i = 0; i<data.length; i++){
                var splitDoc = data[i].split('.');
                if(splitDoc[1] === ext) {
                    extArray.push(data[i]);
                }
            }
            extArray.forEach(function(element) {
                console.log(element);
            });
        }
    });
}

filterDir(process.argv[2], process.argv[3]);