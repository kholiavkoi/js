const citiesUkraine = ['Киев', 'Днепр', 'Одесса', 'Львов', 'Харьков']
const citiesEurope = ['Берлин', 'Прага', 'Будапешт', 'Вена']

const citiesUkrPopulation = {
	Kiev: 12,
	Dnepr: 3,
	Odessa: 5,
	Lvov: 3,
	Kharkov: 7,
}

const citiesEuropePopulation = {
	Kiev: 6,
	Berlin: 10,
	Praha: 8,
	Budapest: 4,
	Viena: 2,
}

//Spread - разворачивает все элементы массива
// console.log(...citiesUkraine);

// const allCities = [...citiesUkraine, ...citiesEurope]
// const prevMethod = citiesUkraine.concat(citiesEurope)
// console.log(prevMethod);

// console.log({...citiesUkrPopulation, ...citiesEuropePopulation});

//-----------------------
// const numbers = [21, 32, 44, 23]
// console.log(Math.max(21, 32, 44, 23))
// console.log(Math.max(...numbers))

//Previous method
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(nodes);
// console.log(divs)

//Rest
function sum(a, b, ...rest) {
	return a + b + rest.reduce((i, a) => i + a, 0)
}

const num = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(sum(...num))

// const a = num[0]
// const b = num[1]

// const [a, b, ...other] = num

// console.log(a, b, other)

const person = {
	name: 'John',
	age: 25,
	city: 'Berlin',
	country: 'Germany',
}


const {name, age, ...address} = person
console.log(name, age, address);