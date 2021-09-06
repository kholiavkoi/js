const person = Object.create({
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear);
    }
}, {
    name: {
        value: 'Iaroslav',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1992,
        enumerable: true,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'green'
            console.log('Set age', value);
        }
    }
})

// person.name = 'Maxim'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key person1: ', key, person[key]);

    }
}

console.log(person);