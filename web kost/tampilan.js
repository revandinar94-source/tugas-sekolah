// Navbar active otomatis
const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Tombol BOOK NOW
const bookBtn = document.querySelector(".btn");

if (bookBtn) {
    bookBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Silakan isi form booking kost 😊");
        window.location.href = "booking.html";
    });
}

// Klik card fitur
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Informasi detail akan dibuka");
    });
});

// Smooth scroll (jika nanti pakai anchor)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Sosial media demo
document.querySelectorAll(".sosmed a").forEach(link => {
    link.addEventListener("click", () => {
        alert("Menuju sosial media kami 📱");
    });
});
