/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length) {
        if (nums[slow] != val) {
            ++slow;
            ++fast;

            continue;
        }

        if (nums[fast] == val) {
            ++fast;
            continue;
        }

        let temp = nums[slow];
        nums[slow] = nums[fast];
        nums[fast] = temp;

        ++slow;
        ++fast;
    }

    return slow;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] != val) {
            nums[index++] = nums[i];
        }
    }

    return index;
};
