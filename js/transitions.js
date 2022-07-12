let targe = document.querySelector("#About");
let t = targe.offsetHeight;

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.add("transition300s");
        if(entry.isIntersecting){
            entry.target.style="opacity: 1";
            entry.target.style.transform="translateY(0px)";
        }
        else{
            entry.target.style="opacity: 0";
            entry.target.style.transform="translateY(50px)";
        }
    });
}, {rootMargin: "0px 0px -100px"});

document.querySelectorAll(".section").forEach(element => {
    observer.observe(element);
});
