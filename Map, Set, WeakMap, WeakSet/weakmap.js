let weak = {
	name: 'weakmap',
};

// const array = [weak]

// weak = null

// console.log(array);

//----------------
const weakMap = new WeakMap([[weak, 'weak obj']]);

//get set delete has
weak = null;

// console.log(weakMap);

//==================

const cash = new WeakMap();

function cashUser(user) {
	if (!cash.has(user)) {
		cash.set(user, Date.now());
	}
	return cash.get(user);
}

let lena = { name: 'Lena' };
let maxim = { name: 'Maxim' };

cashUser(lena);
cashUser(maxim);

lena = null

console.log(cash.has(lena));
console.log(cash.has(maxim));
