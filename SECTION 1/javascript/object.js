const user = {
    name : "raju",
    email : "raju@gmail.com",
    password : "1234abd"
};
console.log(user);

console.log(user.name);
//or
console.log(user['email']);

user.password = "xyz";
user.address = "def";
console.log(user)


user.address = {
    city : "lko",
    state : "up"
}
console.log (user)
// console.log (user.address.city)

user.post =['post1', 'post2']
console.log(user.post["0"]);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


const smartphone = {
    brand : 'samsung',
    color :  ['black','blue'],
    model : 's24'

}
console.log(smartphone.color['1'])

smartphone.color.push('white');
console.log(smartphone.color);

smartphone.color.splice(0,1,'grey');
console.log(smartphone.color);

const {email,password} = user;
console.log(email);
console.log(password);

const arr = [2,5,7,8];
const [a,d] = arr;
console.log(d);

let[x,y,z] = [10, 20, 30];
[x,z] = [z,x]
console.log(x,z);

const smartphoneArray = [
    {
    brand : 'samsung',
    color :  ['black','blue'],
    model : 's24',
    price :  9999,
   },
   {
    brand : 'oppo',
    color :  ['black','blue'],
    model : 'a10',
    price :  9499,
   },
   {
    brand : 'vivo',
    color :  ['black','blue'],
    model : 'v15',
    price :  11111
   },
   {
    brand : 'iphone',
    color :  ['black','blue'],
    model : '15',
    price :  60000
   },
   {
    brand : 'oneplus',
    color :  ['black','blue'],
    model : '10R',
    price :  62000
   },
   {
    brand : 'samsung2',
    color :  ['black','blue'],
    model : '10R',
    price : 11000
   },
   {
    brand : 'samsung3',
    color :  ['black','blue'],
    model : '10R',
    price :  13000
   },
]
console.log(smartphoneArray[3]);
console.log(smartphoneArray[4].model[1]);

//map and filter

const budgetphones = smartphoneArray.filter((phone)=>{return phone.price<50000});
console.log(budgetphones);

const smartphones = smartphoneArray.filter((phone)=>{return phone.brand === "samsung"});
console.log(smartphones);


const query = 'sam';
const samsungPhones = smartphoneArray.filter((phone)=>{return phone.brand.toLowerCase().includes(query.toLowerCase())});
console.log(samsungPhones);













