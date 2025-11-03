/*let a = 5;
a = a+6;
console.log(a);
let b = 9;
b ++;
console.log(b);*/

/*let a = 7;
a = 9*a;
console.log(a);
let x = 4 * 10 + 8;
let y = ++x;

console.log(y);
let i=5*8+2;
let z = i++;
console.log(z);
let greet="helo, I\'am here.";
console.log(greet);

let fname=prompt("Please enter your name:");
console.log(fname);*/
/*let firstName = "Lily";
let birthYear = 1985;
const country = "France";
let isStudent = true;
console.log(firstName,birthYear,country,isStudent);
console.log(typeof(isStudent));*/
/*let a = 45;
let b = 95;
console.log(a>b);
console.log(b>a);
console.log(a==b);
console.log(b+a);
let t = 29;
if(t > 30){
    console.log('it is hot!');
} else if(t>=15 && t<=30){
    console.log("Nice weather");
} else{
    console.log("It is cold")
}*/
/*function saluer(){
    console.log("bonjour");
}
saluer();

function greet(nom){
    console.log("salue " + nom +"!");
}
greet("Lily");

function add(a,b){
    return a+b;
}
let result = add(8,6);
console.log(result);

function welcome(){
    console.log("Welcome to JS!");
}
welcome();

function sum(x,y){
    return x + y;
}
let result1 = sum(12,10);
console.log(result1);

 function checkAge(age){
    if(age>=18){
        console.log("You are an adult");
    }else{
        console.log("You are a minor");
    }
 }
 
 checkAge(25);

for (let i = 0; i<11; i++){
    console.log("Number: " + i);
}

let y=5;
while(y>=1){
    console.log("Count: " +y );
    y--;

}
let colors = ["red", "green", "blue"];
for(y=0; y<colors.length; y++){
    console.log(colors[y]);
}
for(let color of colors){
    console.log(color);
}
let city =["ankara","erzurum","tokat","istanbul","bitlis"];
for(i=0; i<city.length;i++){
    console.log(city[i]);
}
for (let cityy of city){
    console.log(cityy);
}
city.forEach(city => console.log(city));*/
/*let fruits=["ananas","mango","cherry"];
fruits.forEach(fruit => console.log(fruit));
for(let frt of fruits){
    console.log(frt);
}
for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
let names=["ali","kemal","ahmet","ayse"];
names.push("osman");
names.push("kamil");

names.pop();

names.unshift("lily");
names[2]="KRAL";
console.log(names.includes("osman"));
console.log(names);
let namiz=names.map(nom => nom + nom);
console.log(namiz);

let numbers=[1,2,3,4,5];
let fois=numbers.map(t => t *10);
console.log(fois);

let mots = ["belle","beau","alle","caler","big"];
let bstart = mots.filter(mot => mot.startsWith("b"));
console.log(bstart);
let numbers=[451,56,258,789,12300];
let bigs =numbers.filter(num => num<= 200);
console.log(bigs);*/

/*let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(num => num *2);
console.log(double);
let nums=[4,8,15,2,0,1];
let sup = nums.filter(numm => numm >5);
console.log(sup);
let found=nums.find( pair => pair % 2 ===0  );
console.log(found);
nums.forEach(all =>console.log(all));

let person={
    fname : "lily",
    lname : "beckson",
    age: 25,
    isStudent : true,

}
console.log(person);
person.fname ="Lila";
console.log(person);
for(let key in person){
    console.log(key +":" + person[key]);
}

let car ={
    brand: "BMW",
    model: "G234",
    year: 2018,
    color: "Beige",

}
console.log(car);
car.price = 2500000;
car.color ="red";
console.log(car);
delete car.year;
console.log(car);
for(let key in car){
    console.log(key + ":" + car[key]);
} 
let users=[
    {name:"ayse",age:41},
    {name:"ali",age : 25},
    {name: "olga", age : 26}
];
console.log(users);
users.push({name:"tarik",age:36});
console.log(users);
users[0].work ="engineer";
console.log(users);
users[2].age= 85;
console.log(users);
users[3].work="teacher";
console.log(users);
let updatedUsers=users.map(u=>{
    return{
        ...u,
        work:"developer"
    };
}

);
console.log(updatedUsers);
let ages=users.map(a=> a.age);
console.log(ages);
let names=users.map(n=>n.name);
console.log(names);
for( let user of users){
    console.log(user.name + " is "+user.age+" years old. ");

}
for(let us of updatedUsers){
    console.log(us.name + " is "+us.work);
}

let products=[
    { name:"phone",price:2500,stock:55},
    { name:"powerbank",price:200,stock:255},
    { name:"cover",price:500,stock:550}
];
for(let product of products){
    console.log( "Name: " + product.name + " Price: " +product.price);
};
products.push(
    {name:"tablet",price:4500,stock:88}

)
console.log(products);

products[1].stock=555;
console.log(products);
let company = {
    name: "ALEX",
    employees:{
        dev:3,
        designer: 2,
        manager:1
    },
    location: "france"
    
};

console.log(Object.keys(company));
console.log(Object.values(company));
console.log(Object.entries(company));
console.log(company.employees.designer);
delete company.employees.dev;
console.log(company);

let users=[
    {name:"ally", age:28, role:"dev"},
     {name:"Kelly", age:18, role:"admin"},
      {name:"Sally", age:38, role:"manager"}
];
let allUsers=users.map(u=> u.name);
console.log(allUsers);
let older=users.filter(a=> a.age>=25);
console.log(older);
let found=users.find(ad=> ad.role ==="admin");
console.log(found);
users.forEach(user => console.log(user.name+" "+ user.role));
 */


class product{
    constructor(name,price){
        this.name=name;
        this.price=price;


    }
     showPrice(){
        console.log(this.name + " costs $"+ this.price);
    }
}
let phone = new product("samsung",1500);
let tablet = new product("ipad",4555);
phone.showPrice();
tablet.showPrice();
class car{
    constructor(brand,year,color){
        this.brand=brand;
        this.year=year;
        this.color=color;
    }
    showInfo(){
        console.log(`This car is a ${this.year} ${this.color} ${this.brand}`);
    }
}

let car1=new car("toyota",2000,"green");
let car2= new car("tesla",2025,"black");
car1.showInfo();
car2.showInfo();

class Student{
    constructor(name,grade,favoriteSubject){
        this.name=name;
        this.grade=grade;
        this.favoriteSubject=favoriteSubject;
    }
    introduce(){
        console.log(`I am ${this.name} in ${this.grade}. I love ${this.favoriteSubject}`);
    }
}

let s1=new Student("Lora",5, "Math");
let s2=new Student("Cherline",6,"science");
s1.introduce();
s2.introduce();