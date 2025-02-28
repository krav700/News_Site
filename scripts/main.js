// const messageButton = document.getElementById("contactButtonName");
// messageButton.addEventListener("click", () => {
//     window.open("../pages/messageSent.html", "_blank"); });

let slideIndex = 0;
let timer;

showSlides()

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    clearTimeout(timer);
    timer = 0;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    for (let i = 0; i < 3; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 4000);
}
