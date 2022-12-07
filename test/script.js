function isPangram(num) {
    const local = num + num
    return {
        getLocal() {
            return local
        }
    }
}

// console.log(isPangram(10)())

console.log(isPangram(10).getLocal())