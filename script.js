function print(word) {
    console.log(word)
}

document.getElementById('promoclose').addEventListener('click', e => {
    document.getElementById('promo').style.display = 'none'
})

document.getElementById("hamburger").addEventListener('click', e => {
    const ddElement = document.getElementById("dd");
    const isOn = ddElement.classList.contains("on");

    ddElement.classList.toggle("on");

    document.querySelectorAll("#myhamburger").forEach(item => {
        if (isOn) {
            item.style.backgroundColor = 'silver';
        } else {
            item.style.backgroundColor = 'dimgray';
        }
    });
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

        } else {
            entry.target.classList.remove('show');

        }
    });
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))



var swiper = new Swiper(".card-holder", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: 'true'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});