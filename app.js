window.addEventListener('DOMContentLoaded', function () {
  // Check if not on desktop on initial page load
  checkIfNotDesktop();

  // Get references to the necessary elements
  var searchForm = document.querySelector('.search-form');
  var mainSection = document.querySelector('.main-section');
  var searchSection = document.querySelector('.search-section');
  var cards = document.querySelectorAll('.search-section .mod-card');

  // Add event listener to the search form
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Rest of the search logic here...
  });

  searchForm.addEventListener('input', function (event) {
    var searchQuery = event.target.value.trim().toLowerCase();

    // Hide or show the main and search sections based on the search query
    if (searchQuery !== '') {
      mainSection.style.display = 'none';
      searchSection.style.display = 'block';

      // Filter and display the matching cards
      cards.forEach(function (card) {
        var cardTitle = card.querySelector('h3').textContent.toLowerCase();
        var cardWords = cardTitle.split(' ');

        var showCard = cardWords.some(function (word) {
          return word.startsWith(searchQuery);
        });

        if (showCard) {
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

  // Add event listeners to mod cards
  cards.forEach(function (card) {
    var openButton = card.querySelector('.open-button');
    var closeButton = card.querySelector('.close-button');
    var modalId = card.dataset.modalId;

    openButton.addEventListener('click', function () {
      openPopup(modalId);
    });

    closeButton.addEventListener('click', function () {
      closePopup(modalId);
    });
  });
});

window.addEventListener('resize', function () {
  // Check if not on desktop on window resize
  checkIfNotDesktop();
});

function checkIfNotDesktop() {
  var isNotDesktop = !window.matchMedia('(pointer: fine)').matches;
  var urlParams = new URLSearchParams(window.location.search);
  var debugMode = urlParams.has('debug-mode');
  var debugWarning = document.getElementById('debugWarning');

  if (isNotDesktop && !debugMode) {
    // Redirect to denied page if not on desktop and not in debug mode
    if (!window.location.href.includes('access-denied.html')) {
      window.location.href = 'access-denied.html';
    }
  } else {
    // Redirect to index page if on denied page and on desktop, or in debug mode
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

// JavaScript function to show the modal
function openPopup(modalId) {
  var modal = document.getElementById(modalId);

  modal.style.display = 'flex';
  setTimeout(function () {
    modal.classList.add('show');
    modal.querySelector('.modal-content').classList.add('show');
  }, 10);
}

// JavaScript function to close the modal
function closePopup(modalId) {
  var modal = document.getElementById(modalId);

  modal.classList.remove('show');
  modal.querySelector('.modal-content').classList.remove('show');

  setTimeout(function () {
    modal.style.display = 'none';
  }, 300);
}

function toggleHiddenContent(modalId) {
  var modal = document.getElementById(modalId);
  var hiddenContent = modal.querySelector('.hidden-content');
  var arrowBtn = modal.querySelector('.arrow-btn');

  hiddenContent.classList.toggle('show-content');
  arrowBtn.classList.toggle('open');
}