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

console.log(map.get('name'))
