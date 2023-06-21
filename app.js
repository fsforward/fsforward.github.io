window.addEventListener('DOMContentLoaded', function() {
  // Check if not on mobile on initial page load
  checkIfNotMobile();

  // Rest of the code...

});

window.addEventListener('resize', function() {
  // Check if not on mobile on window resize
  checkIfNotMobile();
});

function checkIfNotMobile() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var urlParams = new URLSearchParams(window.location.search);
  var debugMode = urlParams.has('debug-mode');
  var debugWarning = document.getElementById('debugWarning');

  if (!isMobile && !debugMode) {
    // Redirect to denied page if not on a mobile device and not in debug mode
    if (!window.location.href.includes('access-denied.html')) {
      window.location.href = 'access-denied.html';
    }
  } else {
    // Redirect to index page if on denied page and on a mobile device, or in debug mode
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

