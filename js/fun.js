let introCard = document.querySelector(".intro");
window.addEventListener("scroll", function() {
    distance = window.scrollY;
    if (distance <= 500) {
        introCard.style.transform="matrix(1, 0, 0, 1, 0, "+Math.floor(distance)+")";
    }
})