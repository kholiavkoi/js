// a();

// var a = function() {
//     console.log("hahaha");
// };

// function Parent() {
//     console.log(this);
// }

// var parent = new Parent();

// console.log(parent);
// console.log(a);
// var a = 4;

// function fn() {
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }

// fn();

// function BestWishes() {
//     this.a = 4;
//     this.b = 10;
//     this.fn = function() {
//         return this;
//     }
// }

// var bestWishes = new BestWishes()

// console.log(bestWishes);


// var arr = [1, 2, 3];
// var arr1 = arr;
// arr1.push(4);
// console.log(arr, arr1);

// var str = "Hello"
// var str1 = str;
// str += ', Bob';

// console.log(str, str1);


var container = document.getElementById('container');
container.addEventListener('click', function(event) {
    if (event.target.className != 'remove-button') return;

    var pane = event.target.closest('.pane');
    pane.remove()
})

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

tree.addEventListener('click', function(e) {
    if (e.target.tagName != 'SPAN') return;
    let childrenContainer = e.target.parentNode.querySelector('ul')
    console.log(childrenContainer)
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;

})