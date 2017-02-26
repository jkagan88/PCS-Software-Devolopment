'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date(),
            month = now.getMonth() >= 9 ? parseInt(now.getMonth() + 1) : '0' + parseInt(now.getMonth() + 1);

        socket.write(now.getFullYear() + '-' + month +
            '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes());
        socket.end('\n');
    }).listen(+process.argv[2]);