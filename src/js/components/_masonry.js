import Isotope from 'isotope-layout';
import { INIT, ACTIVE, ANIMATE } from '../constants';


const masonry = '.js-filter';
if (document.querySelector(masonry)) {
  var iso;
  
  const iso = new Isotope(masonry, {
    itemSelector: '.js-masonry-item',
    masonry: {
      columnWidth: '.js-masonry-width'
    }
  });

  iso.layout();
  $(masonry).addClass(INIT);

}
