(function () {
  "use strict";
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  function closeMenu() {
    nav?.classList.remove("open");
    toggle?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
  }
  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(!!open));
  });
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
