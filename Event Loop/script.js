console.log('Start');
console.log('Start 2');

function timeOut2sec() {
    console.log('timeOut2sec');
}

setTimeout(function () {
    console.log('Inside Timeout');
}, 5000)

setTimeout(timeOut2sec, 2000)

console.log('End');