const twoSum = function (nums, targets) {
  const a = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(nums[i], targets - num in a);
    if (targets - num in a) {
      return [i, a[targets - num]];
    }

    a[num] = i;
  }
};

const nums = [3, 2, 3];
console.log(twoSum(nums, 6));
