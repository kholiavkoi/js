// sum array

const arr = [[1, 2, 4], 3, 5, [2, 4, [2, 5]]]

const row = arr.flat(Infinity)
console.log(row)

function flat(n) {
    let res = []

    n.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    })

    return res
}
const flatMethod = flat(arr).reduce((prev, next) => prev + next)
console.log(flatMethod)

// setTimeout

for (var i = 0; i < 10; i++) {
    setTimeout((n) => {
        console.log(n)
    }, 0, i)
}

function fn (n) {
    return () => {
        console.log(n)
    }
}

for (var j = 0; j < 10; j++) {
    setTimeout(() => {
        fn(j)
    }, 0)
}


// asynchronous

console.log(1)

const a = new Promise((resolve, reject) => resolve(console.log(2)))

a.then(res => console.log(3))

setTimeout(() => {
    console.log(4)
}, 0)

console.log(5)


// request with xmlhttprequest and fetch

const req = new XMLHttpRequest()

req.open('GET', 'http://api.com')
req.send()

req.onload = function() {
    console.log(req.response)
}

const fetchReq = fetch('url', {
    method: 'GET'
})

fetchReq.then(res => res.json()).then(r => r)


// Promise All

function wait(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, true)
    })
}

function promiseAll(promises) {
    const res = []
    const q = promises.length

    return new Promise((resolve, reject) => {
        for (let i = 0; i < q; i++) {
            promises[i].then(response => {
                res.push(response)

                if (q === res.length) {
                    resolve(res)
                }
            })
        }
    })
}

promiseWaitEach([
    Promise.resolve(20),
    wait(1000),
    wait(2000),
    wait(3000),
    wait(4000),
    wait(5000),
    wait(6000),
]).then(r => {
    console.log(r)
})

async function promiseWaitEach(promise) {
    for await (let p of promise) {
        const d = await p
        console.log(d)
    }
}


// closures сумма элементов через замыкание

function sum(n) {
    let acc = n

    return function accumulate(i) {
        if (typeof i === 'number') {
            acc += i

            return accumulate
        }

        return acc
    }
}

console.log(sum(5)(2)(3)());

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "four");
});
// const p5 = new Promise((resolve, reject) => {
// // Этот промис прервёт Promise.all
//     reject("reject");
// });

function promiseAll(promises) {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                result[i] = res
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }).catch(err => reject(err))
        }
    })
}

promiseAll([p1, p2, p3, p4]).then(res => console.log(res))
