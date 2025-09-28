let sum = 0
function sumArray(nums){
    for(i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum
}
console.log(sumArray([1,2,3,4]))