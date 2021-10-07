const menuHamburgerIcon = document.querySelector('.hamburger-icon');
const menuCloseIcon = document.querySelector('.menu-overlay__close');
const menuOverlay = document.querySelector('.menu-overlay');

const featureTabs = document.querySelectorAll('.features__list li');
const features = document.querySelectorAll('.features__feature');

const questionBlocks = document.querySelectorAll('.questions__questions > div');

const subscribeInput = document.querySelector('.subscribe input');
const subscribeSubmitBtn = document.querySelector('.subscribe a');
const subscribeInputError = document.querySelector('.subscribe__input-error');

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
};

for (let questionBlock of questionBlocks) {
  questionBlock.addEventListener('click', function displayAnswer() {
    questionBlock.classList.toggle('question-opened')
  });
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

subscribeSubmitBtn.addEventListener('click', function submitEmail() {
  const email = subscribeInput.value;

  if (email.length === 0 || !validateEmail(email)) {
    subscribeInputError.classList.add('subscribe__input-error--active');
  };
});

subscribeInput.addEventListener('keydown', () => {
  subscribeInputError.classList.remove('subscribe__input-error--active');
});