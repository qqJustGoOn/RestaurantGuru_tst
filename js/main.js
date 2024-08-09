document.addEventListener("DOMContentLoaded", function () {
  const currentFlag = document.getElementById("currentFlag"),
    container = document.getElementById("dropdawn-container"),
    closeBtn = document.querySelector(".close-button"),
    flags = document.querySelectorAll(".change-flag");
  function closeContainer() {
    container.classList.remove("switch-flag__show");
  }
  currentFlag.addEventListener("click", () => {
    container.classList.add("switch-flag__show");
  }),
    closeBtn.addEventListener("click", closeContainer),
    document.addEventListener("click", (e) => {
      container.contains(e.target) ||
        currentFlag.contains(e.target) ||
        closeContainer();
    }),
    flags.forEach((flag) => {
      flag.addEventListener("click", (e) => {
        e.preventDefault;
        const selectFlag = flag.querySelector(".switch-flag__image");
        (currentFlag.src = selectFlag.src), closeContainer();
      });
    });
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.1,
  spaceBetween: 6,
  loop: !1,
  grabCursor: !0,
  navigation: {
    nextEl: ".restaurant-button-next",
    prevEl: ".restaurant-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1.03, spaceBetween: 6 },
    440: { slidesPerView: 1.5, spaceBetween: 10 },
    568: { slidesPerView: 2, spaceBetween: 10 },
    700: { slidesPerView: 2.25, spaceBetween: 20 },
    820: { slidesPerView: 3, spaceBetween: 20 },
    954: { slidesPerView: 3.5, spaceBetween: 20 },
    1100: { slidesPerView: 4, spaceBetween: 20 },
  },
});
