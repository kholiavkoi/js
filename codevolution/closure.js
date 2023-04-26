function outer1() {
	let counter = 0
	function inner() {
		counter++
		console.log(counter)
	}
	inner()
}

outer1()
outer1()


function outer2() {
	let counter = 0
	function inner(){
		counter++
		console.log(counter)
	}

	return inner
}

let fn = outer2()
fn()
fn()