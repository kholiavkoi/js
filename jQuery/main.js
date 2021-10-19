// jQuery(document).ready(function () {
//     $('h1').css({'color': 'red', 'fontSize': '50px'});
// })


// The same as above

// jQuery(function () {
//     $('.first').css({'color': 'red', 'fontSize': '50px'});
// })


jQuery(function () {
    // Data attr
    let id = $('h1').data('id')

    // Attributes

    $('h2[title$="world"]').css({'color': 'purple'})

    // :contains(), :empty, :parent, :has
    $('h3:contains("title")').css({'color': 'blue'})
    $('ul li:has("span")').css({'color': 'yellow'})
    $('table tr td:parent').css({'backgroundColor': 'red'})
    $('table tr td:empty').css({'backgroundColor': 'aqua'})

    //click(), dblclick, mouseenter, mouseleave

    // $('button').click(function() {
    //     console.log('test')
    // })

    // The same as above, but like addEventlistener (works with dynamic elements)
    $('.btn').on('click', function () {
        console.log('TEST')
    })

    $('.dbclick').dblclick(function () {
        console.log(123)
    })
    $('.enter').mouseenter(function () {
        console.log('enter')
    })
    $('.leave').mouseleave(function () {
        console.log('leave')
    })

    //keypress, keydown, keyup
    //change, submit
    $('input[name="name"]').change(function () {
        let value = $(this).val()
        $('input[name="submit"]').val(value)
    })

    $('form').submit(function (e) {
        e.preventDefault()
        console.log('submit')
    })

    // hide(), show(), delay(), animate(), attr()
    // fadeIn, fadeOut
    $('form').hide(1000).delay(2000).show()

    $('#animate').animate({'width': '200px'}, 2000)

    // resize, scroll
    $(window).resize(function () {
        // width(), height()
        let width = $(this).width()
        console.log(width)
    })

    // addClass, removeClass, toggleClass

    $('h1').addClass('red')
    $('h1').hover(function () {
        $(this).addClass('blue')
        $(this).on('click', function () {
            $(this).removeClass('blue')
        })
    })

    // text(), html()
    // append, prepend, after, before
    // remove, empty
    // wrap (оборачивает элемент), unwrap
})



