window.addEventListener('DOMContentLoaded', function() {
  // Check the screen width on initial page load
  checkScreenWidth();

  // Get references to the necessary elements
  var searchForm = document.querySelector('.search-form');
  var mainSection = document.querySelector('.main-section');
  var searchSection = document.querySelector('.search-section');
  var cardContainers = document.querySelectorAll('.search-section .card-container');
  var cards = document.querySelectorAll('.search-section .mod-card');

  // Add event listener to the search form
  searchForm.addEventListener('input', function(event) {
    var searchQuery = event.target.value.trim().toLowerCase();

    // Hide or show the main and search sections based on the search query
    if (searchQuery !== '') {
      mainSection.style.display = 'none';
      searchSection.style.display = 'block';

      // Filter and display the matching cards
      cards.forEach(function(card) {
        var cardTitle = card.querySelector('h3').textContent.toLowerCase();
        if (cardTitle.includes(searchQuery)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    } else {
      mainSection.style.display = 'block';
      searchSection.style.display = 'none';
    }
  });
});

window.addEventListener('resize', function() {
  // Check the screen width on window resize
  checkScreenWidth();
});

function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var urlParams = new URLSearchParams(window.location.search);
  var debugMode = urlParams.has('debug-mode');
  var debugWarning = document.getElementById('debugWarning');

  if (screenWidth < 600 && !debugMode) {
    // Redirect to denied page if screen width is less than 600px and not in debug mode
    if (!window.location.href.includes('access-denied.html')) {
      window.location.href = 'access-denied.html';
    }
  } else {
    // Redirect to index page if on denied page and screen width is greater than or equal to 600px, or in debug mode
    if (window.location.href.includes('access-denied.html')) {
      window.location.href = 'index.html';
    }

    if (debugMode) {
      // Show debug warning when in debug mode
      debugWarning.style.display = 'block';
    } else {
      // Hide debug warning when not in debug mode
      debugWarning.style.display = 'none';
    }
  }
}


function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}