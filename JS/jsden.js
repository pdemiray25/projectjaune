

let fname = prompt("Enter your name:");

console.log(fname);
 let age = Number(prompt("Enter your age:"));

 function check(age){
    if(age>=18){
        console.log("You can get your driving lisence");
    } else{
        console.log("You can not get it");
    }
 }
 check(age);
 let sentence1=prompt("Hello"+fname +" " +lname);