let btn = document.querySelectorAll('.button')
let text = document.querySelectorAll('.text')

arrBtn = Array.from(btn)
arrText = Array.from(text)

for (let i = 0; i < arrBtn.length; i++) {
	
	arrBtn[i].addEventListener('click', function () {
        for (let j = 0; j < arrText.length; j++) {
			arrText[j].classList.remove('active')
		}
		if (!this.nextElementSibling.classList.contains('active')) {
			this.nextElementSibling.classList.add('active')
			this.innerText = 'Close'
		} else {
			this.nextElementSibling.classList.remove('active')
			this.innerText = 'Open'
		}
	})
}


// for (let i = 0; i < btn.length; i++) {
// 	btn[i].addEventListener('click', function () {
//         for(let textItem of text) {
//             textItem.classList.remove('active')
//         }
// 		if (!this.nextElementSibling.classList.contains('active')) {
// 			this.nextElementSibling.classList.add('active')
// 			this.innerText = 'Close'
// 		} else {
// 			this.nextElementSibling.classList.remove('active')
// 			this.innerText = 'Open'
// 		}
// 	})
// }

// for (let i = 0; i < btn.length; i++) {
// 	btn[i].addEventListener('click', function () {
//         text.forEach( item => item.classList.remove('active'))
// 		if (!this.nextElementSibling.classList.contains('active')) {
// 			this.nextElementSibling.classList.add('active')
// 			this.innerText = 'Close'
// 		} else {
// 			this.nextElementSibling.classList.remove('active')
// 			this.innerText = 'Open'
// 		}
// 	})
// }

// btn.forEach((btnItem) => {
// 	btnItem.addEventListener('click', function () {
//         text.forEach( item => item.classList.remove('active'))
// 		if (!this.nextElementSibling.classList.contains('active')) {
// 			this.nextElementSibling.classList.add('active')
// 			this.innerText = 'Close'
// 		} else {
// 			this.nextElementSibling.classList.remove('active')
// 			this.innerText = 'Open'
// 		}
// 	})
// }) 



