let randomInt = require('./task/task_03')

describe('Test random num', () => {
    const testCases = [
        {
            from: 100,
            to: 110
        },
        {
            from: 200,
            to: 201
        }
    ]

    testCases.forEach(test => {
        it(`From: ${test.from} to ${test.to}`,
            () => {
                const res = randomInt(test.from, test.to)
                console.log(res)
                expect(res).toBeGreaterThanOrEqual(test.from)
                expect(res).toBeLessThanOrEqual(test.to)
            }
        )
    })
})