function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }

    console.log(arr)
}

// no reverse method
// no return new array
console.log(reverse([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(reverse(['hello', 'world', 'how', 'are', 'you', '?'])) // ['?', 'you', 'are', 'how', 'world', 'hello']