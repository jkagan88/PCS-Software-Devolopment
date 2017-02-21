'use strict';

const hello = 'Hello World';

function reverser(text){
    var reversed = text.split('').reverse().join('');
    return reversed;
}

console.log(reverser(hello));