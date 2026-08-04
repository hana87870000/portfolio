"use strict";

{
  /* =========================
    ハンバーガーメニュー
  ========================= */

  const btn = document.querySelector(".header__menu-btn");
  const menu = document.querySelector(".hamburger-menu");
  const overlay = document.querySelector(".overlay");
  const menuLinks = document.querySelectorAll(".hamburger-menu__nav-link");

  if (btn && menu && overlay) {
    const openMenu = () => {
      btn.classList.add("is-active");
      menu.classList.add("is-active");
      overlay.classList.add("is-active");
      btn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      btn.classList.remove("is-active");
      menu.classList.remove("is-active");
      overlay.classList.remove("is-active");
      btn.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      const isOpen = btn.classList.contains("is-active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    btn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  /* =========================
    WORKS Swiper
  ========================= */

  const worksSwiperElement = document.querySelector(".works-swiper");

  if (worksSwiperElement && typeof Swiper !== "undefined") {
    new Swiper(worksSwiperElement, {
      slidesPerView: 1.35,
      spaceBetween: 16,
      centeredSlides: true,

      loop: true,
      speed: 600,

      autoplay: {
        delay: 1400,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },

      navigation: {
        prevEl: ".works-swiper__button--prev",
        nextEl: ".works-swiper__button--next",
      },
    });
  }

  new ScrollHint(".js-hoge");
}
