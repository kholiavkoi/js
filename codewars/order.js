function order(words){
    if (words.length === 0) return ''
    const arr = new Array(words.split(' ').length).fill(0)
    words.split(' ').forEach((item, i) => {
        arr[item.match(/\d+/)[0] - 1] = item
    })

    return arr.join(' ')
}


console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // ""