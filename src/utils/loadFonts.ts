const FontFaceObserver = require('fontfaceobserver');

document.documentElement.className += ' poppins-regular-inactive';

const PoppinsRegular = new FontFaceObserver('PoppinsRegular');

PoppinsRegular.load().then(() => {
  document.documentElement.classList.remove('poppins-regular-inactive');
  document.documentElement.classList.add('poppins-regular-active');
  sessionStorage.foutFontsLoaded = true;
});
