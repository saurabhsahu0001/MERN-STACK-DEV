function addNums(a,b){
    let c=a+b;
    console.log(c);
}
addNums(23,92);

const getAvg = function(m1,m2,m3){
   const avg = (m1+m2+m3)/3;
//    console.log(avg);
   return avg;
}
getAvg(23,42,67);

const result = getAvg(23,42,67);
console.log(result);

const fact = (n) => {
    let f = 1;

    for( let i=1; i<=n; i++){
      f*=i;
    }
    return f;

}
let ans = fact(5);
console.log(ans);

// wap to check if a number is prime or not

let num = 11;
for (let i=2; i<num; i++){
    if(num%2 === 0){
        console.log('not prime');
        break;
    }else{
        console.log('prime');
    }

}