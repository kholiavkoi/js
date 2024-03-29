let arr = [[1, 4], [2, 5], [6, 8], [10, 12], [10, 16]]

function merge(intervals) {
    if (intervals.length < 2) {
        return intervals
    }

    intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let interval of intervals) {
        let recent = result[result.length - 1]
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval)
        }
    }

    return result
}

console.log(merge(arr))