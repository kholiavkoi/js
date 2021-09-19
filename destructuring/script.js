//Arrays destructuring

function calcValues(a, b) {
	return [a + b, a - b, a * b, a / b]
}

const [sum, sub = 'No sub', mult, ...other] = calcValues(65, 42)
// let sum = result[0]
// let sub = result[1]

// const [sum, sub] = result

console.log(sum, mult, other, sub)

//Objects destructuring
const person = {
	name: 'Max',
	age: 20,
	address: {
		country: 'Ukraine',
		city: 'Kiev',
	},
}

// const name = person.name
// const {
//     name: firstName, 
//     age, 
//     car = 'No car', 
//     address: {city: homeTown, country}
// } = person

// const {name, ...others} = person
// console.log(name, others);

function logPerson({name, age}) {
    console.log(name + ' ' + age);
}

logPerson(person)