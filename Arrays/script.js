const people = [
	{name: 'Iaroslav', age: 29, budget: 100000},
	{name: 'Maxim', age: 17, budget: 55000},
	{name: 'Roman', age: 24, budget: 23000},
	{name: 'Jack', age: 15, budget: 190000},
	{name: 'Vlad', age: 28, budget: 430000},
]

//ES5
// for (let i = 0; i < people.length; i++) {
// 	console.log(people[i])
// }

//ES6
// for (let person of people) {
// 	console.log(person)
// }

//ForEach
// people.forEach(function (person) {
// 	console.log(person)
// })

// people.forEach(person => console.log(person))

//Map
// const newPeople = people.map(person => {
// 	return person.age * 3
// })
// console.log(newPeople)

//Filter
// const adultsFor = []
// for (let i = 0; i < people.length; i++) {
// 	if (people[i].age >= 18) {
// 		adultsFor.push(people[i])
// 	}
// }
// console.log(adultsFor)

// const adults = people.filter(person => {
// 	if (person.age >= 18) {
// 		return true
// 	}
// })
// console.log(adults)

//Reduce
// let sum = 0
// for (let i = 0; i < people.length; i++) {
// 	sum += people[i].budget
// }

// console.log(sum)

// let result = people.reduce((prev, current) => {
// 	return prev + current.budget
// }, 0)
// console.log(result)

//Find
// const roman = people.find(person => person.name === 'Roman')
// console.log(roman)

//FindIndex
// const romanIndex = people.findIndex(person => person.name === 'Roman')
// console.log(romanIndex)

// ============
const amount = people
	.filter(person => person.budget >= 100000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: person.budget,
		}
	})
	.reduce((total, person) => {
		return total + person.budget
	}, 0)
console.log(amount)
