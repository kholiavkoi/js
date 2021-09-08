const person = {
    name: 'Iaroslav',
    age: 29,
    job: 'Frontend'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop: ${prop}`);
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No such ${prop} field in target`)
        }
    }
})