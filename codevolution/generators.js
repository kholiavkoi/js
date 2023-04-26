function* generatorFunction() {
	yield 'Hello'
	yield 'World'
}

const generatorObj = generatorFunction()

for (const word of generatorObj) {
	console.log(word)
}