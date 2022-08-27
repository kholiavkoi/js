let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

// let result = ['link', 'menu-item', 'menu', 'header', 'footer']

let sortClassnames = (arr) => {
    let obj = {}
    arr.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item] += 1
        }
    })

    return Object.keys(obj).sort((a, b) => {
        return obj[b] - obj[a]
    })



}


console.log(sortClassnames(classNames))