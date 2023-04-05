function sumIntervals(arr) {
    arr.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < arr.length - 1; i++) {
        const [left1, right1] = arr[i]
        const [left2, right2] = arr[i + 1]
        if (right1 > left2) {
            arr[i] = [Math.min(left1, left2), Math.max(right1, right2)]
            arr.splice(i + 1, 1)
            i--
        }
    }

    return arr.map(([left, right]) => right - left).reduce((sum, next) => sum + next)
}



console.log(sumIntervals([[1, 2], [6, 10], [11, 15]]))  // 9
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]))  // 7
console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]))  // 19

