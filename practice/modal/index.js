const fruits = [{
        id: 1,
        title: 'Яблоки',
        price: 20,
        img: 'https://klike.net/uploads/posts/2019-06/1561279259_1.jpg',
    },
    {
        id: 2,
        title: 'Вишня',
        price: 40,
        img: 'https://foodcity.ru/storage/products/October2018/NTqwdSD2SiXVflQqOfgi.jpg',
    },
    {
        id: 3,
        title: 'Мандарин',
        price: 30,
        img: 'https://caoinform.moscow/wp-content/uploads/sites/38/2019/11/3_1-2-1024x881.jpg',
    },
];

const toHtml = fruit => `
    <div class="col">
        <div class="card">
            <img style="height: 300px;" src='${fruit.img}' class=" card-img-top ">
            <div class="card-body ">
                <h5 class="card-title ">${fruit.title}</h5>
                <a href="# "class="btn btn-primary" data-btn='price' data-id='${fruit.id}'>Посмотреть цену</a>
                <a href="# "class="btn btn-danger">Удалить</a>
            </div>
        </div>
    </div>
`;

function render() {
    const html = fruits.map(fruit => toHtml(fruit)).join('');
    document.querySelector('#fruits').innerHTML = html;
}

render();

const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    footerButtons: [{
        text: 'Закрыть',
        type: 'primary',
        handler() {
            priceModal.close();
        },
    }, ],
});

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;

    if (btnType === 'price') {
        const fruit = fruits.find(f => f.id === id);
        priceModal.open();
        console.log(id, fruit);
    }
});