const animals = ['bembi', 'hippo', 'panda'];

function showArr(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] !== undefined) {
            out += `<div><img src="img//${arr[i]}.jpg"><span>${i}</span></div>`;
        }
    }
    document.querySelector(elem).innerHTML = out;
    document.querySelector('.out-1-source-length').innerHTML = 'Array length: ' + animals.length;
    document.querySelector('.out-1-source').innerHTML = 'const animals = [' + animals + ']';
}

showArr(animals, '.out-1-source-image')



function addToArray() {
    let index = +document.querySelector('.array-index').value;
    if (!Number.isInteger(index)) {
        alert('Только целые числа, алё');
        return false;
    };
    if (index > 50) {
        alert('Дядя, узбагойся! Это слишком много!');
        return false;
    } else if (index < 0) {
        alert('Ну ты не знаешь положительные числа???');
        return false;
    }
    animals[index] = document.querySelector('.array-element').value;
    showArr(animals, '.out-1-source-image')
}

document.querySelector('.add-to-array').addEventListener('click', addToArray)