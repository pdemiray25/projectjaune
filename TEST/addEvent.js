document.addEventListener('DOMContentLoaded', () => {

    let shoppingList=document.getElementById("shoppingList");
    let input=document.getElementById("newItem");
    let addBtn=document.getElementById("addBtn");
    
    // Create a paragraph to show total items
    let totalItem = document.createElement("p");
    input.before(totalItem); // insert once

    input.addEventListener("input",function(){
        addBtn.disabled=input.value.trim() === "";
    });
    addBtn.addEventListener("click",function(){
        let newLi=document.createElement("li");
        newLi.textContent = input.value;
        shoppingList.append(newLi);
        input.value = "";
        addBtn.disabled=true;
        totalItem.textContent = "Your total item : " + shoppingList.children.length;
        
    });

    shoppingList.addEventListener("mouseover",function(e){
        if(e.target.tagName === "LI"){
         e.target.style.backgroundColor = "lightgreen";

        };
    });

    shoppingList.addEventListener("mouseout" , function(e){
        if(e.target.tagName ==="LI"){
            e.target.style.backgroundColor = "white";
        }
    });

    shoppingList.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.remove();
            totalItem.textContent = "Remaining item : " + shoppingList.children.length;
            
        };
    });

    let gallery=document.getElementById("gallery");
    let msg=document.getElementById("message");
    //CREATE IMG
    let newImg=document.createElement("img");
    newImg.src= "../images/paris.png";
    newImg.alt="paris";
    newImg.classList.add("pic");
    gallery.append(newImg);

    gallery.addEventListener("mouseover", function(e){
        if(e.target.tagName === "IMG"){
            e.target.style.border = "3px solid red";
        }
    });

    gallery.addEventListener("mouseout",function(e){
        if(e.target.tagName === "IMG"){
            e.target.style.border = "none";
        };
    });

    gallery.addEventListener("click",function(e){
        if(e.target.tagName=== "IMG"){
            msg.innerText = e.target.alt;
        };
    });

});

let form=document.getElementById("myForm");
let email=document.getElementById("email");
let output=document.getElementById("output");

form.addEventListener("submit",function(e){
    e.preventDefault();
    output.textContent="Submitted email: " +email.value;
});

let formm=document.getElementById("signupForm");
let nameInput=document.getElementById("name");
let emailInput=document.getElementById("email2");
let errorMsg=document.getElementById("errorMsg");

formm.addEventListener("submit",function(e){
    e.preventDefault();

    if(nameInput.value.trim() === "" || emailInput.value.trim()===""){
        errorMsg.textContent="❌ Please fill out all fields!";
    } else if(!emailInput.value.includes("@")){
        errorMsg.textContent="❌ Invalid email format!";
    }else{
        errorMsg.style.color="green";
        errorMsg.textContent="Form submitted successfully!";
        form.reset();
    }
});
 // LOCALSTORAGE
const userInput=document.getElementById("userInput");
const saveBtn=document.getElementById("saveBtn");
const msgee=document.getElementById("messagee");

const savedUser=localStorage.getItem("username");

if(savedUser){
    msgee.textContent="Welcome back, " +savedUser + "!";

}
saveBtn.addEventListener("click",function(){

    let usernew=userInput.value.trim();
    if(usernew !== ""){
        localStorage.setItem("username", usernew);
        msgee.textContent="Saved! Hello " +usernew +"!";
        userInput.value="";

    }
});

//LOCALSTORAGE

const userForm=document.getElementById("userForm");
const nameInputt=document.getElementById("nameInputt");
const emailInputt=document.getElementById("emailInputt");
const displayName=document.getElementById("displayName");
const displayEmail=document.getElementById("displayEmail");



document.addEventListener('DOMContentLoaded', ()=>{

    const savedName=localStorage.getItem("name");
    const savedEmail=localStorage.getItem("email");
    if(savedName){
        displayName.textContent= "Name: " +savedName;

    };
    if(savedEmail){
        displayEmail.textContent="Email: " +savedEmail;
    };
});
userForm.addEventListener("submit", function(e){
    e.preventDefault();
    let namee=nameInputt.value.trim();
    let mail=emailInputt.value.trim();
    if(namee === "" || mail === ""){
        alert("Please fill all fields!");
        return;
    }
    //Save to local storage
    localStorage.setItem("name",namee);
    localStorage.setItem("email",mail);

    displayName.textContent="Name: "+namee;
    displayEmail.textContent="Email: "+mail;
    userForm.reset();
});



