'use strict';

var myModule = require('./myModule.js');

function call(err, data){
    if(err){
        console.log(err);
    }else {
        data.forEach(function(item){
            console.log(item);
        })
    }
}

myModule(process.argv[2], process.argv[3], call);

