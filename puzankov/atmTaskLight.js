// REQUIREMENTS
// 1. Always deliver the lowest number of possible notes
// 2. It's possible to get the amount requested with available notes
// 3. The client balance is infinite
// 4. Amount of notes is infinite
// 5. Available notes 100, 50, 20, 10


function iWantToGet(amountRequired) {
    const availableNotes = [100, 50, 20, 10]
    let res = []

    if (amountRequired > 0) {
        for (let i = 0; i < availableNotes.length; i++) {
            let note = availableNotes[i]

            while (amountRequired - note >= 0) {
                amountRequired -= note
                res.push(note)
            }
        }
    } else {
        console.log('Please enter new amount')
    }

    return res
}


console.log(iWantToGet(260))