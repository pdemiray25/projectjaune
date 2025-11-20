/* HAMBURGER MENU */
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* AUDIO PLAYER */
const player = document.getElementById('player');
let currentBtn = null;

document.querySelectorAll('.play-icon').forEach(btn => {

  btn.addEventListener('click', () => {
    const audioSrc = btn.dataset.audio;

    // Eğer aynı ikon tekrar tıklandıysa → pause
    if (currentBtn === btn && !player.paused) {
      player.pause();
      btn.textContent = '▶';
      return;
    }

    // Daha önce çalan bir buton varsa ikonunu resetle
    if (currentBtn && currentBtn !== btn) {
      currentBtn.textContent = '▶';
    }

    // Yeni audio yükle
    player.src = audioSrc;
    player.play();

    // İkonu değiştir
    btn.textContent = '❚❚'; 
    currentBtn = btn;
  });
});

// Audio player durunca ikon geri dönsün
player.addEventListener('pause', () => {
  if (currentBtn) {
    currentBtn.textContent = '▶';
  }
});

const modal = document.getElementById("privacy-modal");
const link = document.getElementById("privacy-link");
const closeBtn = modal.querySelector(".close"); // modal içinden seçmek daha güvenli

link.onclick = e => {
  e.preventDefault();
  modal.classList.add("show");
};

closeBtn.onclick = () => modal.classList.remove("show");

window.onclick = e => {
  if(e.target === modal) modal.classList.remove("show");
};


