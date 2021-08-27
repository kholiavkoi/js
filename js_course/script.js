//function remove

var container = document.getElementById('container');
container.addEventListener('click', function(event) {
    if (event.target.className != 'remove-button') return;

    var pane = event.target.closest('.pane');
    pane.remove()
})

//function hidden/not hidden

for (let li of tree.querySelectorAll('li')) {  //его ж не объявляли нигде !!!
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

tree.addEventListener('click', function(e) {
    if (e.target.tagName != 'SPAN') return;
    let childrenContainer = e.target.parentNode.querySelector('ul')
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;

})

//function sort

let grid = document.getElementById('grid');

grid.addEventListener('click', function(event) {
    if (event.target.tagName != 'TH') return;

    let th = event.target;
    // если ячейка TH, тогда сортировать
      // cellIndex - это номер ячейки th:
      //   0 для первого столбца
      //   1 для второго и т.д.
    sortGrid(th.cellIndex, th.dataset.type);
})

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody')
    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) сравнивает две строки, нужен для сортировки ТУТ ВОПРОС colNum!
    let compare;

    switch(type) {
        case 'number': 
            compare = function(rowA, rowB) {
                console.log(rowA.cells)
                console.log(rowA.cells[colNum]);
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }
    // сортировка
    rowsArray.sort(compare);
    
    tbody.append(...rowsArray);
}


//tooltip example
let tooltipElem;

document.addEventListener('mouseover', function(event){
    let target = event.target;

    //если в data есть подсказка
    let tooltipHTML = target.dataset.tooltip;
    if (!tooltipHTML) return;

    // ...создадим элемент для подсказки
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHTML;
    document.body.append(tooltipElem);

    // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; //не заезжать за левый край окна

    let top = coords.top - tooltipElem.offsetHeight - 5;

    // если подсказка не помещается сверху, то отображать её снизу
    if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px'
})


document.addEventListener('mouseout', function(e){
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;   //зачем???
    }
})




const pane = document.querySelector('.pane')
const paneStyle = getComputedStyle(pane, '::before')
const fontSize = parseInt(paneStyle.fontSize)

pane.style.marginLeft = 20 + 'px'

console.log(fontSize);
