document.addEventListener("DOMContentLoaded", () =>{
   
    const form=document.getElementById("signupForm");
    const signupUser=document.getElementById("signupUser");
    const signupPass=document.getElementById("signupPass");
    const signupMsg=document.getElementById("signupMsg");
    const loginForm=document.getElementById("loginForm");
    const loginUser=document.getElementById("loginUser");
    const loginPass=document.getElementById("loginPass");
    const loginMsg=document.getElementById("loginMsg");
    const userData = {}; 
    // SIGNUP


    form.addEventListener("submit" , function(e){
        e.preventDefault();
            let username=signupUser.value.trim();
            let password=signupPass.value.trim();

        if(username === "" || password === ""){
            signupMsg.textContent="Please fill all fields!";
            signupMsg.style.color="red";
        } else{
           userData.username =username;
           userData.password = password; 
           signupMsg.textContent="Signup successful!";
           signupMsg.style.color="green";
           form.reset();
        };
    });

    //LOGIN
        

    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        let user=loginUser.value.trim();
        let pass=loginPass.value.trim();

        if(user === "" || pass === ""){
            loginMsg.textContent="Please fill all fields!";
            loginMsg.style.color="red";
        }else if(user===userData.username && pass===userData.password){
            loginMsg.textContent="Login successful!";
            loginMsg.style.color="green";
            loginForm.reset();
        }
        else{
            loginMsg.textContent="Invalid credentials!";
            loginMsg.style.color="red";
         
        };
    });







});