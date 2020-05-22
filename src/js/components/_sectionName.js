import { WIN, ACTIVE } from '../constants';

let section = $('[data-navigation-section]');

function onScroll(event) {
  var scrollPos = WIN.scrollTop();

  section.each(function() {
    let that = $(this);
    const title = that.data('navigation-section');
    const infoTitle = $('.js-hero-info-title');
    let headerHeight = $('.js-header').innerHeight();
    if (Math.floor(that.offset().top - headerHeight) <= scrollPos && Math.floor(that.offset().top - headerHeight) + that.innerHeight() >= scrollPos) {
      infoTitle.length && infoTitle.text(title);
    }
  });
};

WIN.on('scroll touchend', onScroll);
  
