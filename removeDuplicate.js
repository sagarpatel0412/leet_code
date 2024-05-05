var removeDuplicate = function(nums){
    if(nums.length === 0){
        return 0
    } else {
        let k =1
        for(let i =0;i<nums.length;i++){
            if(nums[i] !== nums[k-1]){
                nums[k]=nums[i]
                k++
            }
        }
        return k
    }
}

const nums = [1,1,2,2,3]
console.log(removeDuplicate(nums))