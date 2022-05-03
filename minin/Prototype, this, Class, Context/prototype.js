const Animal = function(options) {
    this.name = options.name;
    this.color = options.color

    // this.voice = function() {
    //     console.log('Base voice from', this.name)
    // }
}

Animal.prototype.voice = function() {
    console.log('Base voice from', this.name)
}

const dog = new Animal({
    name: 'Jack',
    color: '#fff'
})

// dog.voice()


const Cat = function (options) {
    Animal.apply(this, arguments)
    this.hasTail = options.hasTail
    this.type = 'cat'
}

Cat.prototype = Object.create(Animal.prototype)

const cat = new Cat({
    name: 'Murzik',
    color: '#000',
    hasTail: true
})

console.log(cat)
