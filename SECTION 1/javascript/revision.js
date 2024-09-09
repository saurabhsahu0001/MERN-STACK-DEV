const nums = [2,5,7,9,3];
for (let i = 0; i<nums.length ; i++);
console.log(nums[i],i)


nums.forEach( (n,i) => {console.log(n,i);});



function addnums1(a,b){
    const c = a+b;
    return c;
}


const res1 = addnums1(2,3);
console.log(res1);

const addnums2 = function(a,b){
    const c = a+b;
    return c;

}

const addnums3 = (a,b) =>{
    const c=a+b;
    return c;
}




