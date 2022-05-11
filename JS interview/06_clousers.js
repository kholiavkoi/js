function sayHelloTo(name) {
    const message = 'Hello ' + name
    return function () {
        console.log(message)
    }
}

const helloToElena = sayHelloTo('Elena')
const helloToIgor = sayHelloTo('Igor')

helloToElena()
helloToIgor()

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw.join(' '))
        },
        add: function(framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
manager.add('Vue')
manager.print()


// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {  // undefined - change var on let to correct or make clouser
    setTimeout(function() {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}
for (var k = 0; k < fib.length; k++) {
    (function(j) {
        setTimeout(function() {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(k)
}