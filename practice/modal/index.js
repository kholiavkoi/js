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
            }
        },
        {
            text: 'Cancel',
            type: 'danger',
            handler() {
                console.log('Btn danger clicked');
            }
        }
    ]
})