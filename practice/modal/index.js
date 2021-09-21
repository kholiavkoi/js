const fruits = [
    { id: 1, title: "Яблоки", price: 20, img: 'https://klike.net/uploads/posts/2019-06/1561279259_1.jpg' },
    { id: 2, title: "Вишня", price: 40, img: 'https://foodcity.ru/storage/products/October2018/NTqwdSD2SiXVflQqOfgi.jpg' },
    { id: 3, title: "Мандарин", price: 30, img: 'https://caoinform.moscow/wp-content/uploads/sites/38/2019/11/3_1-2-1024x881.jpg' },
]


const modal = $.modal({
    title: 'Iaroslav Modal',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Some text in modal window</p>
    `,
    width: '400px',
    footerButtons: [{
            text: 'Ok',
            type: 'primary',
            handler() {
                console.log('Btn primary clicked');
                modal.close()
            }

        },
        {
            text: 'Cancel',
            type: 'danger',
            handler() {
                console.log('Btn danger clicked');
                modal.close()
            }
        }
    ]
})