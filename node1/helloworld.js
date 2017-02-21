'use strict';
'esversion: 6';

const http = require('http');

const trump = {
    name: 'donald',
    email: 'foo@foo.com'
};


http.createServer((request, response) => {
    response.setHeader('content-type', 'application/json');
    response.write(JSON.stringify(trump));
    response.end();
}).listen(80);
