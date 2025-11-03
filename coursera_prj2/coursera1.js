window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let fName = document.getElementById("fname");
let modal = document.getElementById("modal");
let btn = document.getElementById("btn");
let closeModal = document.getElementById("closeModal");
let form = document.getElementById("form");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  let msg = document.getElementById("msg");
  msg.textContent = "Thank you " + fName.value + " for your Subscribe.";
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
  form.reset();               // ✅ form alanlarını temizle
  document.getElementById("msg").textContent = ""; // ✅ mesajı da sil
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    form.reset();             // ✅ dışa tıklayınca da temizle
    document.getElementById("msg").textContent = "";
  }
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function() {
  form.reset();
  modal.style.display = "none";
  document.getElementById("msg").textContent = "";
});



