// function myFunc(callback) {
//     const a = [1, 2, 3]
//     let element = document.querySelector('.out')
//     callback(element, a)
// }

// function out(elem, arr) {
//     elem.innerHTML = arr.join(' ')
// }

// function out2(elem, arr) {
//     elem.innerHTML = arr.join('-')
// }

// myFunc(out)
// myFunc(out2)

function getApi(callback2) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback2(data)
        })
}

function showApi(d) {
    d.results.forEach(element => {
        console.log(element.name);
    });
}

function showApi2(d) {
    d.results.forEach(element => {
        document.querySelector('.out2').innerHTML += `<ul><li>${element.name}</li></ul>`
    });
}

getApi(showApi)
getApi(showApi2)