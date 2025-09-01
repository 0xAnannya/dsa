//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.
//Output: [1,3,12,0,0]

const nums = [0, 1, 2, 4, 5, 6, 0];

const moveZeroes = (nums) => {
  let lastIndexFilled = 0,
    zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount += 1;
    } else {
      nums[lastIndexFilled] = nums[i];
      lastIndexFilled++;
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    nums[lastIndexFilled] = 0;
    lastIndexFilled++;
  }
  return nums;
};

const result = moveZeroes(nums);
console.log(result);

// zc=1, lz=0 nums=[1,1]
