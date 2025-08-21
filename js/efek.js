// blog.js

// Fungsi tombol back
document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.getElementById("backBtn");
  
    if (backBtn) {
      backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.history.back();
      });
    }
  });
  
  // Smooth scroll untuk anchor link
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Efek fade-in saat discroll
  const fadeElems = document.querySelectorAll(".fade-in");
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // hanya animasi sekali
      }
    });
  }, {
    threshold: 0.2 // muncul ketika 20% elemen terlihat
  });
  
  fadeElems.forEach(el => observer.observe(el));
  