const nums =  [2, 3,4 ,6,7,9]
for (i=0; i<nums.length; i++){
    console.log(nums[i]**2);
}
//second

for(let n of nums) {
    console.log(n**2)
}
//third
nums.forEach(( n,i,a )=>{console.log(n,i,a)})//first value is anarray second one is alwas the index value

// nums.forEach(n) => {
//   if(n%2 === 0){
//    console.log(n);
//   }
// }



      