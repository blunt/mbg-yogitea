const titles = document.querySelectorAll(".toggleSlider__section__title")

for (const title of titles) {
    title.addEventListener("click", function (event) {
        const cls = this.parentElement.classList;
        switch (true) {
            case cls.contains('toggleSlider__section--morning'):
                for (const title of titles) {
                    title.parentElement.classList.remove("toggleSlider__section--open");
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                break;
            case cls.contains('toggleSlider__section--afternoon'):
                for (const title of titles) {
                    if (title.parentElement.classList.contains('toggleSlider__section--morning')) {
                        title.parentElement.classList.add("toggleSlider__section--open");
                    } else {
                        title.parentElement.classList.remove("toggleSlider__section--open");
                    }
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                break;
            case cls.contains('toggleSlider__section--evening'):
                for (const title of titles) {
                    if (title.parentElement.classList.contains('toggleSlider__section--morning') || title.parentElement.classList.contains('toggleSlider__section--afternoon')) {
                        title.parentElement.classList.add("toggleSlider__section--open");
                    }
                }
                this.parentElement.classList.toggle('toggleSlider__section--open');
                break;
            case cls.contains('toggleSlider__section--tea'):
                for (const title of titles) {
                    title.parentElement.classList.remove("toggleSlider__section--open");
                }
                break;
        }
    })
}