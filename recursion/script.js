//Recursive method
const factorial = (n) => { 
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const answer = factorial(5)

console.log(answer);


//Iterative method
const iterFactorial = (n) => {
    const iter = (counter, acc) => {
        if (counter === 1) {
            return acc;
        }
        return iter(counter - 1, counter * acc);
    }
    return iter(n, 1)
}

const iterAnswer = iterFactorial (5)
console.log(iterAnswer);