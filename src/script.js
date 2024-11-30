document.addEventListener("DOMContentLoaded", function () {
  const heroServices = document.querySelector(".hero-services");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(heroServices);
});

document.addEventListener("DOMContentLoaded", function () {
  const packageGrid = document.querySelector(".package-grid");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(packageGrid);
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceMenu = document.querySelector(".service-menu");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(serviceMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceMenu2 = document.querySelector(".service-menu-2");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(serviceMenu2);
});

// fade in left

document.addEventListener("DOMContentLoaded", function () {
  const aLeft = document.querySelector(".a-left");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(aLeft);
});

//multiple fade in right

const elementsToAnimate = document.querySelectorAll(".a-right");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.1 }
);

elementsToAnimate.forEach((element) => observer.observe(element));
