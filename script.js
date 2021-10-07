const menuHamburgerIcon = document.querySelector('.hamburger-icon');
const menuCloseIcon = document.querySelector('.menu-overlay__close');
const menuOverlay = document.querySelector('.menu-overlay');
const featureTabs = document.querySelectorAll('.features__list li');
const features = document.querySelectorAll('.features__feature');

menuHamburgerIcon.addEventListener('click', () => {
  menuOverlay.classList.add('menu-overlay--active');
});

menuCloseIcon.addEventListener('click', () => {
  menuOverlay.classList.remove('menu-overlay--active');
});

for (let featureTab of featureTabs) {
  featureTab.addEventListener('click', function displayFeature() {
    featureIndex = Number(this.dataset['featureid'])-1;
    for (let featureTab of featureTabs) {
      featureTab.classList.remove('features__list--active');
    };
    for (let feature of features) {
      feature.classList.remove('feature--active');
    };

    featureTabs[featureIndex].classList.add('features__list--active');
    features[featureIndex].classList.add('feature--active');
  });
}