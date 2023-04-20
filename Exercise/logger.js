
let url = 'http://mylogger.io/log';

function loggg(message) {
    // Send an HTTP request
    console.log(message);
}

function lo(message) {
    // Send an HTTP request
    console.log(message + message + message);
    //console.log(module);
}

module.exports.asd = loggg;
module.exports.lo = lo;