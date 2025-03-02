let header = document.querySelector('.header');
let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos)
    {
        header.classList.remove('scroll');
    }
    else {
        header.classList.add('scroll');
    }

    prevScrollPos = currentScrollPos;
}

function leave() {
    console.log("HELLO?");
    window.open("https://news.bg/","_blank");
}