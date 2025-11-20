   const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
      const player = document.getElementById('player');
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const audioSrc = btn.dataset.audio;
      player.src = audioSrc;
      player.play();
    });
  });
  
  //Navbar
/*
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});*/
   // Petit script pour rendre les boutons de catégorie interactifs (filtre visuel simple)
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Tu peux étendre : filtrer dynamiquement les lignes de podcasts
        alert('Filtre : ' + btn.dataset.cat + ' (à implémenter côté JS)');
      });
    });
  const playerr = document.getElementById('player');
let currentBtn = null;

document.querySelectorAll('.play-btn').forEach(btn => {
  const icon = btn.querySelector('.icon'); // sadece span ile oynuyoruz

  btn.addEventListener('click', () => {
    const audioSrc = btn.dataset.audio;

    // Aynı butona tıklanıyorsa pause/play toggle
    if (currentBtn === btn && !player.paused) {
      player.pause();
      icon.textContent = '▶';
      return;
    }

    // Önceki buton varsa resetle
    if (currentBtn && currentBtn !== btn) {
      currentBtn.querySelector('.icon').textContent = '▶';
    }

    // Yeni audio
    player.src = audioSrc;
    player.play();

    // İkonu play → pause
    icon.textContent = '❚❚';

    // current button güncelle
    currentBtn = btn;
  });
});

// Player durduğunda buton simgesini geri döndür
player.addEventListener('pause', () => {
  if (currentBtn) {
    currentBtn.querySelector('.icon').textContent = '▶';
  }
});

