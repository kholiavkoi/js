let a = '9412435552433155123321'


function luckyNum(arr) {
    let objNums = Array.from(arr.toString()).reduce((obj, next) => {
        if (!obj[next]) {
            obj[next] = 1
        } else {
            obj[next]++
        }
        return obj
    }, {})

    let result = 0
    for (let key in objNums) {
        if (objNums[key] === +key) {
            result = Math.max(+key, result)
        }
    }

    return result
}


console.log(luckyNum(a))