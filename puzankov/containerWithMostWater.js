function getNumbers(num1, num2) {
    let result = []
    for (let i = num1; i < num2; i += 1 ) {
        result.push(i)
    }

    return result
}


console.log(getNumbers(6, 10))
