function deepCount(a, count = 0) {
	for (let i = 0; i < a.length; i++) {
		if (!Array.isArray(a[i])) {
			count += 1
		} else {
			console.log(a[i])
			count += 1
			return deepCount(a[i], count)
		}
	}
	return count
}

// console.log(deepCount([])) // 0
// console.log(deepCount([1, 2, 3])) // 3
// console.log(deepCount(["x", "y", ["z"]])) // 4
// console.log(deepCount([1, 2, [3, 4, [5]]])) // 7
// console.log(deepCount([[[[[[[[[]]]]]]]]])) // 8
console.log(deepCount([21,[[]],[[]]])) // 5