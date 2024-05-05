var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let indexMerged = m + n - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[indexMerged] = nums1[index1];
      index1--;
    } else {
      nums1[indexMerged] = nums2[index2];
      index2--;
    }
    indexMerged--;
  }

  while (index2 >= 0) {
    nums1[indexMerged] = nums2[index2];
    index2--;
    indexMerged--;
  }
   

};
const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
console.log(merge(nums1,3,nums2,3))
