function print(start, end) {
    let cur = start

    setTimeout(function go() {
        console.log(cur)
        if (cur < end) {
            setTimeout(go, 1000)
        }
        cur++
    }, 10000)
}

print(0, 10)

// function printNumbers(start, end) {
//     let current = start
//
//     function go() {
//         console.log(current)
//         if (current === end) {
//             clearInterval(timerId)
//         }
//         current++
//     }
//
//     go()
//
//     let timerId = setInterval(go, 1000)
// }
//
// printNumbers(0, 10)