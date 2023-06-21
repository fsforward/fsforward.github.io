window.addEventListener('DOMContentLoaded', function() {
  // Check if not on desktop on initial page load
  checkIfNotDesktop();

  // Rest of the code...

});

window.addEventListener('resize', function() {
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




function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}
