'use strict';

const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    let endString = '',
        count = 0;
    response.on('data', (data) => {
        endString += data;
        count+= data.length;
    });
    response.on('end', () => {
        console.log(count);
        console.log(endString);
    });
    response.on('error', console.error);
}).on('error', console.error);