// Immediate Invoked Function Expression
let result = []

for (var i = 0; i < 5; i++) {
    result.push(function () {
        console.log(i)
    })
}
result[1]() // 5
result[4]() // 5


let newResult = []
for (var j = 0; j < 5; j++) {
    (function () {
        var k = j
        newResult.push(function() {
            console.log(k)
        })
    })()
}

newResult[2]() // 2
newResult[4]() // 4