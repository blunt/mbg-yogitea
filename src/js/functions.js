var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const toggles = document.querySelectorAll("a.toggle")
const firstBlurb = document.querySelectorAll(".first")

const toogleLinks = document.querySelectorAll('.hotspot');
const toogleBlocks = document.querySelectorAll('.content-block');

const imgWrap = document.querySelector('.image-wrap');
const awakeImg = document.querySelector('.image-wrap .awake img');

const closeBtn = document.querySelectorAll('.close');

for (const toggle of toggles) {
    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest(".slide-contain").classList.toggle('toggled');
        Array.from(toogleBlocks).forEach(block => block.classList.remove('visible'));
        if (viewportWidth > 940) {
            Array.from(firstBlurb).forEach(item => item.classList.add('visible'));
        }
    })
}

for (const btn of closeBtn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest(".content-block").classList.remove('visible');
    })
}

Array.from(toogleLinks).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        Array.from(toogleBlocks).forEach(item => item.classList.remove('visible'));
        const target = this.getAttribute('href');
        document.querySelector(target).classList.add('visible');
    }, false);
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

window.addEventListener("resize", function () {
    resizeImg('.image-wrap .tired img');
    resizeHotspots('.hot-spots');
    resizeModal('.content-block');
});

window.addEventListener("load", function () {
    resizeImg('.image-wrap .tired img');
    resizeHotspots('.hot-spots');
    resizeModal('.content-block');
    if (viewportWidth < 940) {
        Array.from(firstBlurb).forEach(item => item.classList.remove('visible'));
    } else {
        Array.from(firstBlurb).forEach(item => item.classList.add('visible'));
    }
});