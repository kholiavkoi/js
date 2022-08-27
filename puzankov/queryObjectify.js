const inData = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark'


function queryObjectify(str) {
    let res = {}
    str = str.split('&')  // ['user.name.firstname=Bob', 'user.name.lastname=Smith' ...]
    str = str.map(i => i.split('.')) // [['user', 'name', 'firstname=Bob'], ['user', 'name', 'lastname=Smith'] ...]

    for (let i = 0; i < str.length; i++) {
        let cur = res

        for (let key = 0; key < str[i].length ; key++) {
            let name = str[i][key]
            if (key === str[i].length - 1) {
                name = name.split('=')  // [firstname, Bob]
                cur[name[0]] = decodeURIComponent(name[1])
                break
            }
            if (cur[name]) {
                cur = cur[name]
            } else {
                cur[name] = {}
                cur = cur[name]
            }
        }
    }



    return res
}

console.log(queryObjectify(inData));



// {
//     'user': {
//         'name': {
//             'firstname': 'Bob',
//             'lastname': 'Smith'
//         },
//         'favoritecolor': 'Light Blue'
//     },
//     'experiments': {
//         'theme': 'dark'
//     }
// }