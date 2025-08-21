window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.style.display = "none";
    mainContent.style.display = "block";
  }, 1500); // loading selama 1.5 detik
});
