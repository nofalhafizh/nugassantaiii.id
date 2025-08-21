document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let pesanan = document.getElementById("pesanan").value;
    let catatan = document.getElementById("catatan").value;
    let pembayaran = document.getElementById("pembayaran").value;

    let message = `Halo Admin nugassantai.id,%0ASaya ingin memesan:%0A%0A👤 Nama: ${nama}%0A📌 Pesanan: ${pesanan}%0A📝 Catatan: ${catatan}%0A💳 Pembayaran: ${pembayaran}`;
    
    let whatsappURL = `https://wa.me/628811269774?text=${message}`;
    window.open(whatsappURL, "_blank");
  });