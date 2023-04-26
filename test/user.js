const user = {
	name: 'Yarik',
	age: 30,
	channel: 'You_kholiavko'
}

const nameAndChannel = getObjectValues(user, ['name', 'channel'])

function getObjectValues(obj, params) {
	const newObj = {}

	params.forEach((param) => {
		if (param in obj) {
			newObj[param] = obj[param]
		}
	})

	return newObj
}

console.log(nameAndChannel)