let limits = {
    30: 6,
    50: 100,
    100: 5,
    500: 2,
    1000: 5
}

function iWantGet(amountRequired, limits) {

    let nominals = Object.keys(limits).map(Number).sort((a,b) => b - a)

    return collect(amountRequired, nominals)
}

function collect(amount, nominals) {
    if (amount === 0) return {}
    if (!nominals.length) return

    let currentNominal = nominals[0]
    let availableNotes = limits[currentNominal]
    let notesNeeded = Math.floor(amount / currentNominal)
    let numberOfNotes = Math.min(availableNotes, notesNeeded)

    for ( let i = numberOfNotes; i >= 0; i--) {
        let result = collect(amount - i * currentNominal, nominals.slice(1))

        if (result) {
            return i ? {[currentNominal]: i, ...result} : result
        }
    }

}



console.log(iWantGet(230, limits)) // {30: 1, 100: 2}
// console.log(iWantGet(1000, limits)) // {1000: 1}
console.log(iWantGet(120, limits)) // {30: 4}
// console.log(iWantGet(275, limits))
// console.log(iWantGet(50000, limits))
