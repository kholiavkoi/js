function Person(fName, lName) {
	this.firstName = fName
	this.lastName = lName
}

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName) {
	// this = {}
	Person.call(this, fName, lName)
	this.isSuperHero = true
}
SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.fightCrime = function() {
	console.log('Fighting crime')
}
SuperHero.prototype.constructor = SuperHero

const batman = new SuperHero('Bruce', 'Wayne')


console.log(batman.getFullName())
batman.fightCrime()


// const person1 = new Person('Bruce', 'Wayne')
// const person2 = new Person('Clark', 'Kent')
//
// console.log(person1.getFullName())
// console.log(person2.getFullName())