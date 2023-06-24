let activeModType = 'All';
let activeVersion = 'All Versions';

// Function to filter mod cards by mod type and version
function filterMods() {
  const modContainers = document.querySelectorAll('.card-container');

  modContainers.forEach(function(container) {
    const modCards = container.querySelectorAll('.mod-card');
    let isVisibleContainer = false;

    modCards.forEach(function(card) {
      const modContent = card.querySelector('.mod-details');
      const modText = modContent.textContent;
      const modVersion = modContent.querySelector('p:nth-child(2)').textContent;

      // Check if the mod card matches the mod type and version
      const isVisible =
        (activeModType === 'All' || modText.includes(activeModType)) &&
        (activeVersion === 'All Versions' || modVersion.includes(activeVersion));

      // Toggle visibility based on mod type and version
      card.style.display = isVisible ? 'block' : 'none';

      if (isVisible) {
        isVisibleContainer = true;
      }
    });

    // Toggle visibility of the container based on card visibility
    container.style.display = isVisibleContainer ? 'block' : 'none';
  });
}

// Function to update active button
function updateActiveButton(buttons, currentButton) {
  buttons.forEach(function(btn) {
    if (btn === currentButton) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Function to set active mod type
function setActiveModType(modType, button) {
  if (!button.classList.contains('active')) {
    const typeButtons = document.querySelectorAll('.type-button');
    activeModType = modType;
    updateActiveButton(typeButtons, button);
    filterMods();
  }
}

// Function to set active version
function setActiveVersion(version, button) {
  if (!button.classList.contains('active')) {
    const versionButtons = document.querySelectorAll('.version-button');
    activeVersion = version;
    updateActiveButton(versionButtons, button);
    filterMods();
  }
}
