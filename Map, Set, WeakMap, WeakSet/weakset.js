const persons = [
	{name: 'Iaroslav'},
	{name: 'Kris'},
	{name: 'Mark'}
]

const personVisits = new WeakSet()

personVisits.add(persons[0]).add(persons[1])

persons.splice(1, 1)

console.log(personVisits.has(persons[0]));
console.log(personVisits.has(persons[1]));