window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    if (distance <= 500) {
        document.querySelector(".intro").style.transform="translateY("+1*distance+"px)";
        console.log(distance);
        console.log(window.innerHeight);
    }
})