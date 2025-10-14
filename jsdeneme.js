/* let score= 8;
console.log("Mid-level skills:",score>0 && score<10);
let timeRemaining=0;
let energy=10;
console.log("GAME OVER:",timeRemaining==0 || energy==0)
let num1=2;
let num2=5;
let test1=num1%2;
let test2=num2%2;
let result1=test1==0;
result2=test2==0;
console.log("Is",num1,"an even mumber?",result1);
console.log("Is",num2,"an even number?",result2);*/

/*console.log(5+10);

let now="Now in ";
let three=3;
let d="D!";
console.log(now + three + d);
let counter=0;
counter+=5;
counter+=3;
console.log(counter);
console.log("hello" ,"no");
let name="Your name?";
alert("Welcome"+ name);*/

/*let result=50;
if(result>60)
{
    console.log("PASSED")
}
else{
    console.log("FAILED!")
}*/
/*let result="second";
if(result=="first"){
    console.log("GOLD")
}
else if(result=="second"){
    console.log("SILVER")
}
else if(result=="third"){
    console.log("BRONZ")
}
else{
    console.log("NO MEDAL")
};*/
/*let age=14;
if(age>=18){
    console.log("ADULT!")
}else {
    console.log("MINOR")
};
let score=95;
if(score>=90){
    console.log("A+")
}
else if(score>60 && score<89){
    console.log("B+")
}
else{
    console.log("Needs improvement")
};
let IsMember=true;
let points=90;
if(IsMember && points>=100){
    console.log("Silver")
}
else{
    console.log("No Reward")
};*/
/*let color="white";
switch(color){
    case "red":
        console.log("STOP");
        break;
        case "yelllow":
            console.log("WAIT");
            break;
            case "green":
                console.log("GO!");
                break;
                default:
                    console.log("Unkonwn color");
}

let level=3;
switch(level)
{
    case 1:
        console.log("BEGINNER");
        break;
        case 2:
            console.log("Intermediate");
            break;
            case 3:
                console.log("Advanced");
                break;
                default:
                    console.log("No level");
}*/
/*let age=50;
if(age>=65){
    console.log("You get your income from your pension")
}else if(age>=18 && age<65){
    console.log("Each month you get a salary")

}else if(age<18){
    console.log( "You get an allowance")
}else{
    console.log("The value of the age variable is not numerical")
};

let day="sunday";

switch(day){
    case "monday":
        console.log("do something");
        break;
        case "tuesday":
            console.log("do washing");
            break;
            case "wednesday":
                console.log("go to library");
                break;
                case "thursday":
                    console.log("do shopping");
                    break;
                    case "friday":
                        console.log("go to mosque");
                        break;
                        case "saturday":
                            console.log("sleep well");
                            break;
                            case "sunday":
                                console.log("clean up house");
                                break;
                                default:
                                    console.log("there is no such day");
}
*/
/*for(var i=3; i>=0; i--){
    console.log(i)
} console.log("GO!");
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}*/


/*var j = 5;
while (j > 0) {
    console.log(j);
    j = j - 1;
};
console.log('Counting completed!');
for(let i=1; i<=5 ; i++){
    console.log(i)
}console.log("Counting Completed!");

for(let i=5; i>=1 ; i--){
    console.log(i)
}console.log("Countdown finished");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}console.log('Counting completed!');
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};*/


/*for(let i=1; i<=3; i++){
    for(let j=1; j<=4; j++){
        console.log(i," x ", j,"=" ,i*j);
    }
}
const nums = [1,2,3];
let s = "";
for (let i = 0; i < nums.length; i++) {
  s += nums[i] + (i < nums.length - 1 ? ", " : "");
}
console.log(s);*/

/*function addTwoNums(a,b){
    let c=a+b;
    console.log(c);
}
addTwoNums(6,5);
addTwoNums(200,45);

let fruits=["apple", "banana", "orange", "grape"];
console.log(fruits[2]);
console.log(fruits[3]);

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!");
        } else {
            console.log(i*100, arr[i]);
        }
    }
}*/

/*function listArrayItems(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]=='banana'){
            console.log(i*10, arr[i] + "=yellow fruit")
        }
        else if(arr[i]=='grape'){
            console.log(i*10,'this is grape')
        }
        else{
            console.log(i*10,arr[i])
        }
    }
}
let fruits=['apple', 'banana', 'cherry', 'mango', 'grape'];
listArrayItems(fruits);

function letterFinder(word,match){
    for(i=0; i<word.length;i++){
        if(word[i]===match){
            console.log('Found the', match, 'at', i); 
        }
        else{
            console.log('---No match found at', i) ;
        }
    }
}
letterFinder('kelebek','e');
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2);
house2.windows=8;
console.log(house2);

var car = {}; 
car.color = "red"; 
car["color"] = "green"; 
car["speed"] = 200; 
car.speed = 100; 
console.log(car);*/
/*let a=2;
let b=8;
console.log(a+b);
let clothes=[];
clothes.push('skirt');
clothes.push('tshirt');
clothes.push("jean");
clothes.push("scarf");
clothes.push("robe");
console.log(clothes);
clothes.pop();
console.log(clothes);
clothes.push("shoes");
console.log(clothes);
console.log(clothes[3]);
let favCar={};
favCar.color="white";
favCar.model="istC4";
console.log(favCar);

function addTwoNums(a,b){
    console.log(a+b);
}
addTwoNums(5 ,"5");

function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color}; background: ${background}; font-size: ${fontSize};`;
    console.log(message, style);

}

function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    
    if (reason === "birthday") {
        console.log("%cHappy birthday", fontStyle);  
    } else if (reason === "champions") {
        console.log("%cCongrats on the title!", fontStyle);  
    } else {
        console.log("%cHave a nice day!", fontStyle);  // default mesaj
    }
}
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize, txt, reason) {
     consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
 let message = `%c${txt}`;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    
    console.log(message, style);
}

function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    
    if (reason === "birthday") {
        console.log("%cHappy birthday", fontStyle);  
    } else if (reason === "champions") {
        console.log("%cCongrats on the title!", fontStyle);  
    } else {
        console.log("%cHave a nice day!", fontStyle);  // default mesaj
    }
}
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize, txt, reason) {
     consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
var result;
console.log(result);
result = 7; */

let result;
console.log(result);
result = 7;