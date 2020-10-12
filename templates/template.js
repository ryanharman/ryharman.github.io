window.onload = function() {
  animateHTML();
  themeToggleListener();
}

// Provides animation when items come into view for the site
const animateHTML = function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
};

// JS for Dark Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

function themeToggleListener() {
  document.getElementById("theme").addEventListener("click", toggle => toggleTheme())
}