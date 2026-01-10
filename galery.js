const images = document.querySelectorAll(".gallery-container img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    images.forEach(img => {
        img.onclick = () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        }
    });

    lightbox.onclick = () => {
        lightbox.style.display = "none";
    }