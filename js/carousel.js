const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const slides = document.querySelector(".slides");
const firstSlideClone = document.getElementById("slide1").cloneNode(true);
const lastSlideClone = document.getElementById("slide3").cloneNode(true);
const indexPoints = document.querySelectorAll(".index");
let compteur = 1;
slides.insertBefore(lastSlideClone, slides.children[0]);
slides.appendChild(firstSlideClone);

btnRight.addEventListener("click", () => {
    if (window.innerWidth <= 1365) {
        compteur = compteur + 1;
        slides.style.transition = "0.2s";
        slides.style.transform = "translateX(" + compteur * -100 + "vw)";
        if (compteur == 4) {
            compteur = 1;
            indexPoints[2].classList.remove("active");
            setTimeout(() => {
                slides.style.transition = "0s";
                slides.style.transform = "translateX(" + compteur * -100 + "vw)";
            }, 200);
        } else {
            indexPoints[compteur - 2].classList.remove("active");
        }
        indexPoints[compteur - 1].classList.add("active");
    }
})

btnLeft.addEventListener("click", () => {
    if (window.innerWidth <= 1365) {
        compteur = compteur - 1;
        slides.style.transition = "0.2s";
        slides.style.transform = "translateX(" + compteur * -100 + "vw)";
        if (compteur == 0) {
            compteur = 3;
            indexPoints[0].classList.remove("active");
            setTimeout(() => {
                slides.style.transition = "0s";
                slides.style.transform = "translateX(" + compteur * -100 + "vw)";
            }, 200);
        } else {
            indexPoints[compteur].classList.remove("active");
        }
        indexPoints[compteur - 1].classList.add("active");
    }
})

window.onload = () => {
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
    indexPoints[compteur - 1].classList.toggle("active");
}

