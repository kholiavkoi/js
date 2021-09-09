//OBJECTS

const person = {
    name: 'Iaroslav',
    age: 29,
    job: 'Frontend'
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log(`Getting prop: ${prop}`);
        if (!(prop in target)) {
            return prop.split('_').map(p => target[p]).join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No such ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['name', 'age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop]
        return true
    }
})


//FUNCTIONS

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log(target, thisArg, args);

        return target.apply(thisArg, args).toUpperCase()
    }
})

//CLASSES

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...');
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop: ${prop}`);
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)