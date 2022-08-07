const seats1 = [1, 0, 0, 0, 1, 0, 1] // 2
const seats2 = [1, 0, 0, 0] // 3
const seats3 = [0, 1] // 1

const maxDistToClosest = (seats) => {
    let max = 0
    let count = 0
    let i = 0

    if (seats[i] === 0) {
        while (seats[i] === 0) {
            i++
            count += 1
        }
        max = count
        count = 0
    }

    for ( ; i < seats.length; i++) {
        let current = seats[i]

        if (i === seats.length - 1 && current === 0) {
            count += 1
            max = Math.max(max, count)
            break
        }

        if (current === 1) {
            count = 0
        } else {
            count += 1
            max = Math.max(max, Math.ceil(count / 2))
        }
    }


    return max
}


console.log(maxDistToClosest(seats1))
console.log(maxDistToClosest(seats2))
console.log(maxDistToClosest(seats3))