// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: 'working',
//     }
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recieved', backendData);
//     }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: "aws",
//             port: 2000,
//             status: 'working',
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data);
//             }, 2000)
//         })
//     }).then(clientData => {
//         clientData.recievedFromPromise = true;
//         return clientData;
//     }).then(newData => {
//         console.log('Modified', newData);
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => {
//         console.log('Finally');
//     })

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// const sleep = function(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve()
//         }, ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 seconds'));
// sleep(3000).then(() => console.log('After 3 seconds'));

// Promise.all([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('All promises');
//     })

// Promise.race([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('Race promises');
//     })


//WEBDEV !!!

let a = 7;
console.log(a);

const b = new Promise(function(resolve, reject) {
    setTimeout(function() {
        a = 99;
        resolve();
    }, 2000)
})
b.then(function() {
    console.log(a);
})