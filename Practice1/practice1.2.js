function findMax(nums) {
let max = 0;
   for(i = 0; i < nums.length; i++){
    if (nums[i] > max){
        max = nums[i];
    }
   }
   return max;
}

console.log(findMax([1,8,4,7,5,9,15,3,2]))