const people = [
	{name: 'Iaroslav', age: 29, budget: 100000},
	{name: 'Maxim', age: 22, budget: 55000},
	{name: 'Roman', age: 24, budget: 23000},
	{name: 'Jack', age: 26, budget: 190000},
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
people.forEach(function (person) {
	console.log(person)
})

people.forEach(person => console.log(person))

//Map
const newPeople = people.map(person => {})
