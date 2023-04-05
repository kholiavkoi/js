function deadFish(str) {
    const res = []

    str.split('').reduce((cur, s) => {
        if (s === 'i') cur++
        if (s === 'd') cur--
        if (s === 's') cur = Math.pow(cur, 2)
        if (s === 'o') res.push(cur)

        return cur
    }, 0)


    return res
}


console.log(deadFish('iiisdoso'))  // [8, 64]
console.log(deadFish('iiisxxxdoso'))  // [8, 64]