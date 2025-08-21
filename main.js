window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading").classList.add("fade-out");

      // Setelah animasi fade-out selesai, redirect ke halaman utama
      setTimeout(() => {
        window.location.href = "utama/home.html";
      }, 1000); // delay fade-out
    }, 3500); // waktu efek ketik selesai
  });