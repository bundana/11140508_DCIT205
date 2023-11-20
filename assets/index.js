document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.menu');

  burgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Represents a Swiper instance.
   * @class
   * @param {string|HTMLElement} container - The container element or selector for the Swiper.
   * @param {Object} options - The options for configuring the Swiper.
   * @param {number} options.slidesPerView - The number of slides to display per view.
   * @param {number} options.spaceBetween - The space between slides.
   * @param {Object} options.navigation - The navigation options for the Swiper.
   * @param {string|HTMLElement} options.navigation.nextEl - The element or selector for the next button.
   * @param {string|HTMLElement} options.navigation.prevEl - The element or selector for the previous button.
   * @param {Object} options.pagination - The pagination options for the Swiper.
   * @param {string|HTMLElement} options.pagination.el - The element or selector for the pagination container.
   * @param {boolean} options.pagination.clickable - Whether the pagination is clickable.
   */
  const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});
