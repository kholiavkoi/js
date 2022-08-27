const reverseString = require('./task/task_01')

// test(
//     'Проверяем реверс строки',
//     () => {
//         expect(reverseString('hello')).toBe('olleh')
//     }
// )

describe(
    'My test',
    () => {
        const testCase = [
            {
                inString: 'hello',
                expected: 'olleh'
            },
            {
                inString: 'blin ha',
                expected: 'ah nilb'
            },
            {
                inString: 'Привет как дела?',
                expected: '?алед как тевирП'
            }
        ]

        testCase.forEach(item => {
            it(
                `Входящая строка: ${item.inString} ожидаю: ${item.expected}`,
                () => {
                    const res = reverseString(item.inString)
                    expect(res).toBe(item.expected)
                }
            )
        })
    }
)

