let theButton = document.querySelector('.toggle');
let theSlide = document.querySelector('.tired');

theButton.onclick = function (event) {
    event.preventDefault()
    this.classList.toggle('active');
    theSlide.classList.toggle('full');
};

function parentWidth(elem) {
    return elem.parentElement.clientWidth;
}

document.querySelector(".tired img").style.width = parentWidth(document.theSlide) + 'px';