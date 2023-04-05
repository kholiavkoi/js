const array = [-1, 2, 3, 5, 7, 9, 12]

const search = (arr, target) => {
    let left = 0
    let right = array.length - 1
    let mid

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left
        console.log(mid)
        if (target === arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}

console.log(search(array, 9))