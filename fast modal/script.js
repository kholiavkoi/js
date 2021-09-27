// $('.close-modal').click(function () {
//     const name = $(this).attr('modal');
//     $(`#${name}`).toggleClass('modal-opened');
//   });

//   $('.modal-open').click(function () {
//     const name = $(this).attr('modal');
//     $(`#${name}`).toggleClass('modal-opened');
//   });

const modal = document.getElementById('modal-form')
const modalClose = document.querySelector('.close-modal')

modalClose.addEventListener('click', function () {
	modal.classList.toggle('modal-opened')
})

// document.querySelector('.modal-open').addEventListener('click', () => {
// 	this.toggleClass('modal-opened')
// })   =========> тут написать на чем срабатывает