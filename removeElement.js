var removeElement = function(nums,val){
    let count = 0
    if(nums.length === 0){
        return 0
    } else {
        for(let i= 0; i< nums.length;i++){
            if(nums[i] !== val){
                nums[count ++] =nums[i]
            }

        }
        console.log(nums)
        return count
    }
}

const nums = [1,1,2,3]
console.log(removeElement(nums,3))