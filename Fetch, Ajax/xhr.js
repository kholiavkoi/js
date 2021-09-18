const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json'
		xhr.setRequestHeader('Content-type', 'application/json')

		xhr.onload = function () {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}

		xhr.onerror = () => {
			reject(xhr.response)
		}

		xhr.send(JSON.stringify(body))
	})
}

// sendRequest('GET', requestUrl)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.then((err) => console.log(err));

const body = {
	name: 'Iaroslav',
	age: 29,
}

sendRequest('POST', requestUrl, body)
	.then(data => {
		console.log(data)
	})
	.then(err => console.log(err))
