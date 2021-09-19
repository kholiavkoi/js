const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
	const headers = {
		'Content-type': 'application/json',
	}
	return fetch(requestUrl, {
		method: method,
		body: JSON.stringify(body),
		headers: headers,
	}).then(response => {
		if (response.ok) {
			return response.json()
		}
		return response.json().then(error => {
			const e = new Error('Что-то пошло не так')
			e.data = error
			console.log(e.data)
			throw e
		})
	})
}

// sendRequest('GET', requestUrl)
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.then(err => console.log(err)) 

const body = {
	name: 'Iaroslav',
	age: 29,
}

sendRequest('POST', requestUrl, body)
	.then(data => {
		console.log(data)
	})
	.then(err => console.log(err))
