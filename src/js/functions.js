const toggles = document.querySelectorAll("a.toggleSlider__toggle")
const firstBlurb = document.querySelectorAll(".toggleSlider__info-wrap__content-block--first")

const toogleLinks = document.querySelectorAll('.toggleSlider__hotspots__hotspot');
const toogleBlocks = document.querySelectorAll('.toggleSlider__info-wrap__content-block');

const imgWrap = document.querySelector('.toggleSlider__image-wrap');
const awakeImg = document.querySelector('.toggleSlider__image-wrap--awake img');

const closeBtn = document.querySelectorAll('.toggleSlider__info-wrap__content-block__close');

for (const btn of closeBtn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest(".toggleSlider__info-wrap__content-block").classList.remove('toggleSlider__info-wrap__content-block--visible');
    })
}

for (const toggle of toggles) {
    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest(".toggleSlider").classList.toggle('toggleSlider--toggled');
        Array.from(toogleBlocks).forEach(block => block.classList.remove('toggleSlider__info-wrap__content-block--visible'));
        if (window.innerWidth > 940) {
            Array.from(firstBlurb).forEach(item => item.classList.add('toggleSlider__info-wrap__content-block--visible'));
        }
        resizeImg('.toggleSlider__image-wrap--tired img');
        resizeHotspots('.toggleSlider__hotspots');
        resizeModal('.toggleSlider__info-wrap__content-block');
    })
}

Array.from(toogleLinks).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        Array.from(toogleBlocks).forEach(item => item.classList.remove('toggleSlider__info-wrap__content-block--visible'));
        const target = this.getAttribute('href');
        document.querySelector(target).classList.add('toggleSlider__info-wrap__content-block--visible');
    }, false);
});

window.addEventListener("resize", function () {
    resizeImg('.toggleSlider__image-wrap--tired img');
    resizeHotspots('.toggleSlider__hotspots');
    resizeModal('.toggleSlider__info-wrap__content-block');
    if (window.innerWidth >= 940) {
        Array.from(toogleBlocks).forEach(item => item.classList.remove('toggleSlider__info-wrap__content-block--visible'));
        Array.from(firstBlurb).forEach(item => item.classList.add('toggleSlider__info-wrap__content-block--visible'));
    } else {
        Array.from(firstBlurb).forEach(item => item.classList.remove('toggleSlider__info-wrap__content-block--visible'));
    }
});

window.addEventListener("load", function () {
    resizeImg('.toggleSlider__image-wrap--tired img');
    resizeHotspots('.toggleSlider__hotspots');
    resizeModal('.toggleSlider__info-wrap__content-block');
    if (window.innerWidth >= 940) {
        Array.from(firstBlurb).forEach(item => item.classList.add('toggleSlider__info-wrap__content-block--visible'));
    } else {
        Array.from(firstBlurb).forEach(item => item.classList.remove('toggleSlider__info-wrap__content-block--visible'));
    }
});

function resizeImg(className) {
    document.querySelectorAll(className).forEach(el => el.style.width = awakeImg.clientWidth + "px");
}

function resizeHotspots(className) {
    document.querySelectorAll(className).forEach(el => el.style.width = awakeImg.clientWidth + "px");
}

function resizeModal(className) {
    document.querySelectorAll(className).forEach(el => el.style.height = imgWrap.clientHeight + 30 + "px");
}