const recipe = {
    flour: 500,
    sugar: 200,
    eggs: 1
}

const available = {
    flour: 1200,
    sugar: 1200,
    eggs: 5,
    milk: 200
}


function cakes(recipe, available) {
    const cakesTotal = {}

    Object.keys(recipe).forEach((item) => {
        if (available[item] === undefined) {
            cakesTotal[item] = 0
        } else {
            cakesTotal[item] = Math.floor(available[item] / recipe[item])
        }
    })

    return Math.min(...Object.values(cakesTotal))
}


console.log(cakes(recipe, available))