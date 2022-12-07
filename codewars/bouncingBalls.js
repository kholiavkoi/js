function bouncingBalls(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let count = -1
        while (h > window) {
            h *= bounce
            count += 2
        }

        return count
    }

    return -1
}


console.log(bouncingBalls(3.0, 0.66, 1.5))  // 3
console.log(bouncingBalls(30.0, 0.66, 1.5))  // 15