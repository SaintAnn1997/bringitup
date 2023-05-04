import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ buttons: '.next', container: '.page' });
    slider.render();

    const moduleSlider = new MainSlider({ container: '.moduleapp', buttons: '.next' });
    moduleSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slick-prev',
        next: '.feed__slick-next',
        activeClass: 'feed__item-active',
    });

    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const modulesPlayer = new VideoPlayer('.module__video .play', '.overlay')
    modulesPlayer.init();

    const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
    difference.init();

    const form = new Form('.form', 'http://localhost:3000/requests');
    form.init();

});