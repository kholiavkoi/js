const obj = {
	name: 'Iaroslav',
	age: 29,
	job: 'Frontend',
}

const arr = [
	['name', 'Iaroslav'],
	['age', 29],
	['job', 'Frontend'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(arr))

const map = new Map(arr)

map
.set('newField', 22)
.set(obj, 'object data')
.set(NaN, 'It NaN')
// console.log(map.get(NaN));

// map.delete('job')
// console.log(map.has('job'));
// console.log(map.size);
// map.clear()
// console.log(map.size);

// ----------------------------

// for (let [key, value] of map) {
// 	console.log(key, value);
// }

// for (let val of map.values()) {
// 	console.log(val);
// }

// for (let key of map.keys()) {
// 	console.log(key);
// }

// map.forEach((val, key, m) => {
// 	console.log(val, key);
// })

//------------------------------

// const array = Array.from(map)
// console.log(array)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

//-----------------------------

const users = [
	{name: 'Iaroslav'},
	{name: 'Kris'},
	{name: 'Mark'}
]

const visits = new Map()

visits
	.set(users[0], new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
	.set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
	return visits.get(user);
}

// console.log(lastVisit(users[1]));




