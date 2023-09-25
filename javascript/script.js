const btn = document.querySelector(".menu-btn");
const head = document.querySelector(".header");

btn.addEventListener("click", function () {
  head.classList.toggle("nav-open");
});
/////////////////////////////////

const links = document.querySelectorAll("a:link");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("navitem-a")) {
      head.classList.toggle("nav-open");
    }
  });
});

////////////////////

const heroEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroEl);

/////////////
