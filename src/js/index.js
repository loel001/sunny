const containerSwiperSunny = document.querySelector(`.sunny__catalog.catalog`);
const wrapperSwiperSunny = containerSwiperSunny.querySelector(`ul`);
const slideSwiperSunny = Array.prototype.slice.call(containerSwiperSunny.querySelectorAll(`ul li`));

let mySwiperMobile = null;

if (window.innerWidth < 1024) {
  containerSwiperSunny.classList.add(`swiper-container`);
  wrapperSwiperSunny.classList.add(`swiper-wrapper`);
  slideSwiperSunny.forEach((elem) => {
    elem.classList.add(`swiper-slide`);
  });
  const newSwiperMobile = () => {
    return new Swiper(`.sunny__catalog.catalog`, {
      direction: `horizontal`,
      spaceBetween: 15,
      slidesPerView: 1,
      initialSlide: 0,
      loop: true,
    })
  };
  mySwiperMobile = newSwiperMobile();
}

console.log(1);
