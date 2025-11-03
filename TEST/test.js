
/*let title=document.getElementById("title");
let firstP=document.querySelector(".text");
let allP= document.querySelectorAll(".text");
let button=document.getElementById("btn");
let title2=document.getElementById("myTitle");
let firstPr=document.querySelector(".info");
let allPs=document.querySelectorAll(".info");
let buttonn=document.getElementById("myBtn");

let titlee=document.getElementById("mainTitle");
let first=document.querySelector(".info");
let allps=document.querySelectorAll(".info");
let altext=document.querySelectorAll(".text");
let buttone=document.getElementById("myBtnn");
let buton=document.querySelector("button[data-action='save']");
let input=document.querySelector("input[type='text']");
let input2=document.querySelector("input[ data-info='student']");
let text=document.getElementById("text");
text.innerText="Hello,let's start";
let mytitle=document.getElementById("myTitle");
mytitle.textContent="OH LA LA MAJ!";
let test=document.getElementById("test");
test.innerHTML="This is <i> italic from now <i/>";
test.style.color="red";
mytitle.style.color="blue";
mytitle.style.background="yellow";
buttone.style.color="green";
buttone.style.background="pink";
test.classList.add("highlightt");
let highlight=document.querySelector(".highlightt");
highlightt.style.background="purple";
let titre=document.getElementById("baslik");
titre.innerText="WELCOME TO DOM";
let prgraph=document.querySelector(".textt");
prgraph.textContent="Learning JS is amazing";
titre.style.color="blue";
titre.style.fontSize= "50px";
let para=document.querySelectorAll("p");
para[8].classList.add("texting");
para[8].style.color="purple";
para[8].style.background="yellow";
let box=document.getElementById("box");
let newP=document.createElement("p");
newP.textContent="ME BANANA";
box.append(newP);
let newR=document.createElement("p");
newR.textContent="ME CHERRY";
box.prepend(newR);
box.after(newR);
newR.remove();
let newPR=document.createElement("p");
newPR.textContent="I am created by DOM";
box.append(newPR);
newPR.classList.add("special");
newPR.style.color="red";
newPR.style.fontWeight="bold";
setTimeout(() => {
    newPR.remove();
}, 2000);*/
let first=document.createElement("p");
first.textContent="I am the first!";
let container=document.getElementById("container");
container.prepend(first);
let last=document.createElement("p");
last.textContent="I am the last!";
container.append(last);
last.classList.add("dynamic");
first.classList.add("dynamic");
first.style.color="blue";
last.style.color="green";
setTimeout(() => {
    last.remove();
}, 3000);
let remaining = container.querySelectorAll("p");
remaining.forEach(p => console.log(p.textContent));
let main=document.getElementById("mainTitle");
let newtitle=document.createElement("h1");
newtitle.textContent="DOM IS HERE";
main.before(newtitle);
// ADDEVENTLISTENER
let input=document.getElementById("myInput");
let display=document.getElementById("display");
 input.addEventListener("input",function(){
    display.textContent="Welcome " + input.value;

 });

 let book=document.getElementById("book");
 book.addEventListener("mouseover",
    function(){
        book.style.backgroundColor="green";
    }
 );
book.addEventListener("mouseout",
    function(){
        book.style.backgroundColor="orange";
    }
);

let myBut=document.getElementById("btner");
myBut.addEventListener("click",function(){
    myBut.innerText="Clicked!";

});
let inputBox=document.getElementById("inputBox");
let msg=document.getElementById("message");
inputBox.addEventListener("input",function(){
        msg.textContent="You typed: " +inputBox.value;
        msg.style.display="flex";
});
myBut.addEventListener("mouseover",function(){
    myBut.style.backgroundColor="yellow";
});
myBut.addEventListener("mouseout",function(){
    myBut.style.backgroundColor="grey";
});

let list=document.getElementById("list");
let newItem=document.getElementById("newItem");
let addBtn=document.getElementById("addBtn");
let total=document.getElementById("total");
let items=document.querySelectorAll("li");
//create new Li
let newLi=document.createElement("li");
newLi.textContent="New Item";
list.append(newLi);
//AddEventListeners
newItem.addEventListener("input",function(){
    addBtn.disabled=newItem.value.trim === "";
});

addBtn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.textContent = newItem.value;
    list.append(li);
    newItem.value="";
    addBtn.disabled=true;
    total.textContent=`Total item : ${list.children.length}`;

});
// e.target.remove 
list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.remove();
    total.textContent=`Total item : ${list.children.length}`;
        
    };
});
list.addEventListener("mouseover", function(e) {
    if(e.target.tagName === "LI") {          // check if mouse is on <li>
        e.target.style.backgroundColor = "lightblue";
    }
});

list.addEventListener("mouseout", function(e) {
    if(e.target.tagName === "LI") {
        e.target.style.backgroundColor = "white";
    }
});
list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        alert("You removed "+ e.target.textContent);
    }
});
 
addBtn.addEventListener("click", function(e){
    if(e.target.matches("button[data-action='save']")){
        alert("Saved");
    }

});
// addeventlistener tasks

let btn2=document.getElementById("btn2");
let inputBox2=document.getElementById("inputBox2");
let message2=document.getElementById("message2");
 btn2.addEventListener("click", function(){
    btn2.innerText="Click mee!";
 });
 inputBox2.addEventListener("input",function(){
    message2.textContent="hey you " + inputBox2.value;
 });
 btn2.addEventListener("mouseover",function(){
    btn2.style.backgroundColor="purple";

 });
 btn2.addEventListener("mouseout",function(){
    btn2.style.backgroundColor="green";
 });
//ADDEVENTLISTENER TODO LIST
 let container1=document.getElementById("container");
 let todolist=document.getElementById("todoList");
 let inputt=document.getElementById("newTodo");
 let addButton=document.getElementById("addBtn1");
 let totalTask=document.createElement("p");

 inputt.addEventListener("input",function(){
    addButton.disabled=inputt.value.trim === "";
 });

 addButton.addEventListener("click",function(){
    let newTask=document.createElement("li");
    newTask.textContent=inputt.value;
    todolist.append(newTask);
    newTask.classList.add("task");
    inputt.value="";
    addButton.disabled="true";
    totalTask.textContent= "Total task to do : " + todolist.children.length;
    todolist.after(totalTask);
 });
todolist.addEventListener("mouseover", function(event){
    if(event.target.tagName === "LI"){
        event.target.style.backgroundColor="lightyellow";

    };
});

todolist.addEventListener("mouseout",function(event){
    if(event.target.tagName=== "LI"){
        event.target.style.backgroundColor= "white";
    }
});
todolist.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        event.target.remove();
        totalTask.textContent = "Total tasks to do: " + todolist.children.length;
    };
});
let oldTask=todolist.querySelectorAll("li");
oldTask.forEach(li => li.classList.add("task"));

