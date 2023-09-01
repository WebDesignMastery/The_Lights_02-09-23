const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__icons", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .crew h4", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__container .about__image", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__container .about__image.image__1", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about__content", {
  ...scrollRevealOption,
  delay: 500,
});

// cast container
ScrollReveal().reveal(".cast__card", {
  ...scrollRevealOption,
  interval: 500,
});

// media container
ScrollReveal().reveal(".media__card", {
  ...scrollRevealOption,
  interval: 500,
});
