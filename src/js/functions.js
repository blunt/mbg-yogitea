const titles = document.querySelectorAll(".toggleSlider__section__title"),
    next = document.querySelectorAll(".toggleSlider__navigation__button--next")[0],
    prev = document.querySelectorAll(".toggleSlider__navigation__button--prev")[0];

next.addEventListener("click", function (event) {
    const wrapper = this.parentElement.nextElementSibling
    const cls = wrapper.classList;
    switch (true) {
        case cls.contains('toggleSlider__wrapper--one'):
            this.previousElementSibling.classList.remove('toggleSlider__navigation__button--hidden');
            wrapper.classList.remove('toggleSlider__wrapper--one');
            wrapper.classList.add('toggleSlider__wrapper--two');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--animated");
            }
            document.querySelectorAll(".toggleSlider__section--morning")[0].classList.add("toggleSlider__section--animated");
            break;
        case cls.contains('toggleSlider__wrapper--two'):
            wrapper.classList.remove('toggleSlider__wrapper--two');
            wrapper.classList.add('toggleSlider__wrapper--three');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--animated");
            }
            document.querySelectorAll(".toggleSlider__section--afternoon")[0].classList.add("toggleSlider__section--animated");
            break;
        case cls.contains('toggleSlider__wrapper--three'):
            wrapper.classList.remove('toggleSlider__wrapper--three');
            wrapper.classList.add('toggleSlider__wrapper--four');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--animated");
            }
            document.querySelectorAll(".toggleSlider__section--evening")[0].classList.add("toggleSlider__section--animated");
            break;
        case cls.contains('toggleSlider__wrapper--four'):
            this.classList.add('toggleSlider__navigation__button--hidden');
            wrapper.classList.remove('toggleSlider__wrapper--five');
            wrapper.classList.add('toggleSlider__wrapper--five');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--animated");
            }
            document.querySelectorAll(".toggleSlider__section--friday")[0].classList.add("toggleSlider__section--animated");
            break;
    }
});

prev.addEventListener("click", function (event) {
    const wrapper = this.parentElement.nextElementSibling
    const cls = wrapper.classList;
    switch (true) {
        case cls.contains('toggleSlider__wrapper--five'):
            this.nextElementSibling.classList.remove('toggleSlider__navigation__button--hidden');
            wrapper.classList.remove('toggleSlider__wrapper--five');
            wrapper.classList.add('toggleSlider__wrapper--four');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--open");
            }
            document.querySelectorAll(".toggleSlider__section--afternoon")[0].classList.add("toggleSlider__section--open");
            break;
        case cls.contains('toggleSlider__wrapper--four'):
            wrapper.classList.remove('toggleSlider__wrapper--four');
            wrapper.classList.add('toggleSlider__wrapper--three');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--open");
            }
            document.querySelectorAll(".toggleSlider__section--afternoon")[0].classList.add("toggleSlider__section--open");
            break;
        case cls.contains('toggleSlider__wrapper--three'):
            wrapper.classList.remove('toggleSlider__wrapper--three');
            wrapper.classList.add('toggleSlider__wrapper--two');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--open");
            }
            document.querySelectorAll(".toggleSlider__section--morning")[0].classList.add("toggleSlider__section--open");
            break;
        case cls.contains('toggleSlider__wrapper--two'):
            wrapper.classList.remove('toggleSlider__wrapper--two');
            wrapper.classList.add('toggleSlider__wrapper--one');
            this.classList.add('toggleSlider__navigation__button--hidden');
            for (const title of titles) {
                title.parentElement.classList.remove("toggleSlider__section--open");
            }
            document.querySelectorAll(".toggleSlider__section--tea")[0].classList.add("toggleSlider__section--open");
            break;
        case cls.contains('toggleSlider__wrapper--one'):
            this.classList.add('toggleSlider__navigation__button--hidden');
            break;
    }
});

window.onresize = function(event) {
    if (window.outerWidth == 1024) {
        for (const title of titles) {
            title.parentElement.classList.remove("toggleSlider__section--open");
            title.parentElement.classList.remove("toggleSlider__section--animated");
        }
        document.querySelectorAll(".toggleSlider__section--tea")[0].classList.add("toggleSlider__section--open");
    }
};

for (const title of titles) {
    title.addEventListener("click", function (event) {
        const cls = this.parentElement.classList;
        switch (true) {
            case cls.contains('toggleSlider__section--morning'):
                for (const title of titles) {
                    title.parentElement.classList.remove("toggleSlider__section--open");
                    title.parentElement.classList.remove('toggleSlider__section--animated');
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                this.parentElement.classList.toggle('toggleSlider__section--animated');
                break;
            case cls.contains('toggleSlider__section--afternoon'):
                for (const title of titles) {
                    if (title.parentElement.classList.contains('toggleSlider__section--morning')) {
                        title.parentElement.classList.add("toggleSlider__section--open");
                    } else {
                        title.parentElement.classList.remove("toggleSlider__section--open");
                    }
                    title.parentElement.classList.remove('toggleSlider__section--animated');
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                this.parentElement.classList.toggle('toggleSlider__section--animated');
                break;
            case cls.contains('toggleSlider__section--evening'):
                for (const title of titles) {
                    if (title.parentElement.classList.contains('toggleSlider__section--morning') || title.parentElement.classList.contains('toggleSlider__section--afternoon')) {
                        title.parentElement.classList.add("toggleSlider__section--open");
                    } else {
                        title.parentElement.classList.remove("toggleSlider__section--open");
                    }
                    title.parentElement.classList.remove('toggleSlider__section--animated');
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                this.parentElement.classList.toggle('toggleSlider__section--animated');
                break;
            case cls.contains('toggleSlider__section--friday'):
                    for (const title of titles) {
                        if (title.parentElement.classList.contains('toggleSlider__section--morning') || title.parentElement.classList.contains('toggleSlider__section--afternoon')  || title.parentElement.classList.contains('toggleSlider__section--evening')) {
                            title.parentElement.classList.add("toggleSlider__section--open");
                        }
                        title.parentElement.classList.remove('toggleSlider__section--animated');
                    }
                    this.parentElement.classList.toggle('toggleSlider__section--open');
                    this.parentElement.classList.toggle('toggleSlider__section--animated');
                    break;
            case cls.contains('toggleSlider__section--tea'):
                for (const title of titles) {
                    title.parentElement.classList.remove("toggleSlider__section--open");
                    title.parentElement.classList.remove("toggleSlider__section--animated");
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                this.parentElement.classList.toggle('toggleSlider__section--animated');
                break;
        }
    })
}