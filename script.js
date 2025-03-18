// Bouton Retour en Haut
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopButton = document.getElementById("scrollTop");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });
    
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
