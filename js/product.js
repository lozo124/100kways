/* Product Page JS — static-site/js/product.js */
(function () {
  "use strict";

  // ── Mobile drawer ──
  var menuBtn = document.querySelector(".js-prod-menu-btn");
  var closeBtn = document.querySelector(".js-prod-close-btn");
  var overlay = document.querySelector(".js-prod-overlay");
  var drawer = document.querySelector(".js-prod-drawer");

  function openDrawer() {
    overlay.classList.add("active");
    drawer.classList.add("active");
  }
  function closeDrawer() {
    overlay.classList.remove("active");
    drawer.classList.remove("active");
  }
  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  // ── Gallery: thumbnails (all screen sizes) ──
  var thumbs = document.querySelectorAll(".js-prod-thumb");
  var mainImg = document.querySelector(".js-prod-main-img");

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var src = this.dataset.src;
      if (mainImg && src) mainImg.src = src;
      thumbs.forEach(function (t) { t.classList.remove("active"); });
      this.classList.add("active");
    });
  });

  // ── Accordion ──
  var accordionBtns = document.querySelectorAll(".js-prod-accordion-btn");
  accordionBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var icon = this.querySelector(".prod-accordion__icon");
      if (!content) return;
      var isOpen = content.style.display !== "none" && content.style.display !== "";
      content.style.display = isOpen ? "none" : "block";
      if (icon) icon.textContent = isOpen ? "+" : "−";
    });
  });

  // ── Add to Cart hover ──
  var atcBtn = document.querySelector(".prod-atc");
  if (atcBtn) {
    atcBtn.addEventListener("mouseenter", function () { this.style.background = "#1e2655"; });
    atcBtn.addEventListener("mouseleave", function () { this.style.background = "#263069"; });
  }

  // ── Sticky bottom bar: show after scrolling 30% ──
  var stickyBar = document.querySelector(".js-prod-sticky-bar");
  if (stickyBar) {
    function onScroll() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && scrolled / pageHeight > 0.3) {
        stickyBar.classList.add("visible");
      } else {
        stickyBar.classList.remove("visible");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
