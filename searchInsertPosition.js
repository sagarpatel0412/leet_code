var searchInsert = function (nums, target) {
  const index = nums.indexOf(target)
  
  if(index > -1){
    return index;

  } else {
    
    nums.push(target);
    nums.sort((a, b) => {
      return a - b;
    });
    const index1 = nums.indexOf(target);
    console.log(index1);
    return index1;
  }

}
const nums = [1,3,5,6]
console.log(searchInsert(nums,4))