const fruits = [ 'apple','banana','orange','kiwi','pear','plum','strawberry'];
console.log(fruits.splice(4,3))


const newfruits = fruits.map((n)=>{return n.toLocaleUpperCase()});
console.log(newfruits);



(fruits.push("mango","peach"))
console.log(fruits)


const userArray = [
    {name:'john', age :'25', email:''},
    {name:'jane', age :'28', email:''},
    {name:'tom', age :'32', email:''},
    {name:'alice', age :'35', email:''},
]

userArray[0].age = ('341')
console.log(userArray)


// const obj = userArray[0];
// obj.email = 'john@gmail.com';
// console.log(obj)


// const updateusers = userArray.map((user)=>{
//     user.email.replace('email','gmail');
//     return user;
// });

// console.log(updateusers);

// const obj2 = {...obj, email:obj.email.replace('mail','gmail')};
// console.log(obj2)

// const updatedusers2 =  userArray.map((user)=>{
//     return{...user,email: user.email.replace('mail','gmail')}
// })

// console.log(updatedusers2)










