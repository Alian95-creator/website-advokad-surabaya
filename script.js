
/* =====================================================
   KANTOR ADVOKAT PURWO WIDODO
   WEBSITE INTERACTION SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     1. MOBILE NAVIGATION
  ========================================== */

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {

    function setMenuState(isOpen) {

      menu.classList.toggle("active", isOpen);

      hamburger.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      hamburger.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
      );

    }


    hamburger.addEventListener("click", () => {

      const isOpen =
        hamburger.getAttribute("aria-expanded") === "true";

      setMenuState(!isOpen);

    });


    // Tutup menu setelah link diklik
    menu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {
        setMenuState(false);
      });

    });


    // Tutup menu ketika klik di luar navigasi
    document.addEventListener("click", event => {

      if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {

        setMenuState(false);

      }

    });


    // Tutup menu dengan tombol Escape
    document.addEventListener("keydown", event => {

      if (
        event.key === "Escape" &&
        menu.classList.contains("active")
      ) {

        setMenuState(false);
        hamburger.focus();

      }

    });


    // Reset menu ketika berpindah ke desktop
    window.addEventListener("resize", () => {

      if (window.matchMedia("(min-width: 761px)").matches) {

        setMenuState(false);

      }

    });

  }


  /* ==========================================
     2. HERO BACKGROUND SLIDER
  ========================================== */

  const hero = document.querySelector(".hero");

  const backgroundImages = [
    "img/pengadilan-negri-jatim.JPG",
    "img/background-2.JPG",
    "img/background-3.JPG"
  ];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  if (
    hero &&
    backgroundImages.length > 1 &&
    !reducedMotion
  ) {

    // Preload gambar agar pergantian lebih halus
    backgroundImages.slice(1).forEach(source => {

      const image = new Image();
      image.src = source;

    });


    let imageIndex = 0;
    let backgroundTimer = null;


    function changeBackground() {

      imageIndex++;

      if (imageIndex >= backgroundImages.length) {
        imageIndex = 0;
      }

      hero.style.backgroundImage =
        `url("${backgroundImages[imageIndex]}")`;

    }


    function startBackgroundSlider() {

      if (backgroundTimer !== null) return;

      backgroundTimer = window.setInterval(
        changeBackground,
        5000
      );

    }


    function stopBackgroundSlider() {

      if (backgroundTimer !== null) {

        window.clearInterval(backgroundTimer);
        backgroundTimer = null;

      }

    }


    startBackgroundSlider();


    // Hentikan animasi saat tab tidak aktif
    document.addEventListener("visibilitychange", () => {

      if (document.hidden) {

        stopBackgroundSlider();

      } else {

        startBackgroundSlider();

      }

    });

  }


  /* ==========================================
     3. SERVICE CARD DETAIL
  ========================================== */

  const serviceButtons = document.querySelectorAll(
    ".service-toggle"
  );


  serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

      const detailId = button.getAttribute("aria-controls");

      const detail = document.getElementById(detailId);

      if (!detail) return;


      const willOpen =
        button.getAttribute("aria-expanded") !== "true";


      // Tutup detail layanan lainnya
      serviceButtons.forEach(otherButton => {

        const otherId =
          otherButton.getAttribute("aria-controls");

        const otherDetail =
          document.getElementById(otherId);

        otherButton.setAttribute(
          "aria-expanded",
          "false"
        );

        if (otherDetail) {
          otherDetail.hidden = true;
        }

        const otherLabel =
          otherButton.querySelector("span");

        if (otherLabel) {
          otherLabel.textContent = "Lihat detail";
        }

      });


      // Buka detail yang dipilih
      if (willOpen) {

        button.setAttribute(
          "aria-expanded",
          "true"
        );

        detail.hidden = false;

        const label = button.querySelector("span");

        if (label) {
          label.textContent = "Tutup detail";
        }

      }

    });

  });


  /* ==========================================
     4. AUTO UPDATE FOOTER YEAR
  ========================================== */

  const yearElement =
    document.getElementById("current-year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* ==========================================
     5. GALLERY TOUCH SCROLL
  ========================================== */

  const gallery = document.querySelector(
    ".testimoni-slider"
  );

  if (gallery) {

    gallery.addEventListener("keydown", event => {

      if (event.key === "ArrowRight") {

        gallery.scrollBy({
          left: 280,
          behavior: "smooth"
        });

      }

      if (event.key === "ArrowLeft") {

        gallery.scrollBy({
          left: -280,
          behavior: "smooth"
        });

      }

    });

  }


  console.log(
    "Website Kantor Pengacara Purwo Widodo berhasil dimuat."
  );

});
