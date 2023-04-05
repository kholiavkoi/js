function sumsMatrix(arr) {
    const matrix = []
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = []
        for (let j = 0; j < arr.length; j++) {
            matrix[i][j] = sumArr(arr, i, j)
        }
    }

    return matrix

}

function sumArr(arr, i, j) {
    let sum = 0
    if (i <= j) {
        sum = arr.slice(i, j + 1).reduce((acc, item) => acc += item, 0)
    } else {
        sum = arr.slice(j, i + 1).reduce((acc, item) => acc += item, 0)
    }

    return sum
}


console.log(sumsMatrix([1, 2, 3]))