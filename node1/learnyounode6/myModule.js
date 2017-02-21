'use strict';

var fs = require('fs');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, data){
        if(err){
            return callback(err);
        }
        var extArray = [];
        for(var i = 0; i<data.length; i++){
            var splitDoc = data[i].split('.');
            if(splitDoc[1] === ext) {
                extArray.push(data[i]);
            }
        }
        return callback(err, extArray);
    });
}
