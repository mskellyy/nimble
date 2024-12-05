// fade in up, right, left

const elementsToAnimate = document.querySelectorAll(".a-right, .a-left, .a-up");

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

// contetti button

$("button").on("click", function () {
  function random(max) {
    return Math.random() * (max - 0) + 0;
  }

  var c = document.createDocumentFragment();
  for (var i = 0; i < 100; i++) {
    var styles =
      "transform: translate3d(" +
      (random(500) - 250) +
      "px, " +
      (random(200) - 150) +
      "px, 0) rotate(" +
      random(360) +
      "deg);\
                  background: hsla(" +
      random(360) +
      ",100%,50%,1);\
                  animation: bang 700ms ease-out forwards;\
                  opacity: 0";

    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
  }
  // document.body.appendChild(c);
  $(this).append(c);
});
