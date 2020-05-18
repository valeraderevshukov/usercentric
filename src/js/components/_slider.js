import slick from 'slick-carousel';

const sliders = $('.js-sliders');


sliders.each((i,el) => {
  const sliderFor = $(el).find('.js-slider-img');
  const sliderNav = $(el).find('.js-slider-nav');
  var status = $(el).find('.js-slider-nav-counter');

  sliderFor.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    const currentSl = i < 10 ? `0${i}` : i;
    const length = slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount;
    status.text(currentSl + '/' + length);
  });

  
  sliderNav.on('init', () => {
    $(el).find('.slick-dots').attr('data-anim', 'from-bottom');
  });

  sliderFor.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNav[0]
  });
  sliderNav.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: sliderFor[0],
    dots: true,
    arrows: false,
    focusOnSelect: true,
    adaptiveHeight: true
  });
});


