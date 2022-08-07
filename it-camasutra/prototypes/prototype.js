// __proto__ есть у всех объектов
const a = {}

console.log(a)

let age = 18
let maxAge = 20
let string = 'aaa'

console.log(age.__proto__ === string.__proto__)   // false
console.log(age.__proto__ === maxAge.__proto__)   // true


class Samurai {
}

function Component() {
}

const API = function () {
}

console.log(Samurai.prototype)
console.log(Component.prototype)
console.log(API.prototype)

let promise = new Promise(() => {
})
console.log(promise.__proto__ === Promise.prototype)  // true

let man = {}
console.log(man.__proto__ === Object.prototype)  // true

let users = []
console.log(users.__proto__ === Array.prototype)  // true

let newAge = 30
console.log(newAge.__proto__ === Number.prototype)  // true

class YoutubeChannel {}

let channel = new YoutubeChannel()
console.log(channel.__proto__ === YoutubeChannel.prototype)  // true

let areYouOk = true
console.log(areYouOk.__proto__ === Boolean.prototype)  // true


function Samuraichik(name) {
    this.name = name
}

Samuraichik.prototype.hello = function () {
    console.log(this.name)
}

let samuraiYarik = new Samuraichik('Yarik')
let samuraiAndrew = new Samuraichik('Andrew')
samuraiYarik.hello()
samuraiAndrew.hello()

