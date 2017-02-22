'use strict';

const http = require('http');

// function urlString(url){
//     http.get(url, (response) => {
//         response.setEncoding('utf8');
//         let endString = '',
//             count = 0;
//         response.on('data', (data) => {
//             endString += data;
//             count+= data.length;
//         });
//         response.on('end', () => {
//             console.log(endString);
//         });
//         response.on('error', console.error);
//     }).on('error', console.error);
// }

// for(let i=2; i<process.argv.length; i++){
//     urlString(process.argv[i]);
// }

for(let i=2; i<process.argv.length; i++){ 
    var countArray = [],
        length = process.argv.length-2,
        responseArray = [];

    http.get(process.argv[i], (response) => {
        response.setEncoding('utf8');
        let endString = '';

        response.on('data', (data) => {
            endString += data;
        });
        response.on('end', () => {
            countArray.push('');
            responseArray[i-2] = endString;
            if(length === countArray.length){
                responseArray.forEach(function(element) {
                    console.log(element);
                });
            }   
        });
        response.on('error', console.error);
    }).on('error', console.error);
}