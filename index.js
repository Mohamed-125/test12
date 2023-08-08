const openNavBtn = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".mobile-nav-links");
const navLinksA = document.querySelectorAll(".mobile-nav-links a");
const closeNavBtn = document.querySelector(".fa-xmark");

[...navLinksA].forEach((a) =>
  a.addEventListener(
    "click",
    () => (navLinks.style.transform = "translate(100%)")
  )
);
openNavBtn?.addEventListener("click", () => {
  navLinks.style.transform = "translate(0)";
});

closeNavBtn.addEventListener("click", () => {
  navLinks.style.transform = "translate(100%)";
});
