import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(buttons) {
        super(buttons);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            if (n === 3) {
                this.hanson.classList.add('animated')
                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            }
        } catch (e) { }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.plusSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) {}

            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
} 