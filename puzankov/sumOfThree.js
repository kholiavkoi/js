const array = [-1, 0, 1, 2, -1, -4]  // [[-1, -1, 2][-1, 0, 1]]

const threeOfSum = function (nums, target = 0) {
    const result = []
    if (nums.length < 3) return result

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--

                j++
                k--
                continue
            }
            if (sum < target) {
                j++
                continue
            }
            if (sum > target) {
                k--

            }
        }
    }

    return result
}


console.log(threeOfSum(array))