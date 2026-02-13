const btn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

btn?.addEventListener("click", () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

// close mobile menu when clicking a link
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  });
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();
