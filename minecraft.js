let activeModType = 'All';
let activeVersion = 'All Versions';

// Function to update the paragraph text based on the active button
function updateParagraphText() {
    const paragraph = document.querySelector('.left-div p');

    if (activeModType === 'All') {
        paragraph.innerHTML = 'Welcome to the Minecraft Mods section! Here, you can explore a wide variety of mods that enhance and expand your Minecraft experience. To navigate through the mods, use the buttons provided to filter by mod types and versions. Discover exciting new gameplay features, stunning visual enhancements, and innovative creations, all made by talented modders. Immerse yourself in the vibrant world of Minecraft mods and unleash your creativity!';
    } else if (activeModType === 'Fabric') {
        paragraph.innerHTML = 'If you\'re looking for a lightweight and efficient modding experience, you\'re in the right place. Fabric is a popular mod loader that prioritizes performance and speed, allowing mods to load quickly and seamlessly. With Fabric mods, you can enjoy a smooth gameplay experience without sacrificing performance. Dive into the world of Fabric mods and discover a wide range of optimizations, quality-of-life improvements, and unique gameplay mechanics. Elevate your Minecraft adventure with the power of Fabric!';
    } else if (activeModType === 'Forge') {
        paragraph.innerHTML = 'Forge has long been a cornerstone of the modding community, offering a vast selection of mods that have shaped Minecraft\'s history. Even today, Forge maintains a thriving community and an extensive library of mods to choose from. With Forge mods, you can delve into a world of endless possibilities, from adding new dimensions and technologies to introducing captivating quests and challenging adventures. Join the legacy of Forge mods and unleash your imagination as you explore the limitless creativity and countless adventures that await!';
    }
}

// Function to filter mod cards by mod type and version
function filterMods() {
    const modContainers = document.querySelectorAll('.mod-card');

    modContainers.forEach(function (card) {
        const modContent = card.querySelector('.mod-details');
        const modType = modContent.querySelector('p:nth-child(2)').textContent.split(' | ')[0];
        const modVersion = modContent.querySelector('p:nth-child(2)').textContent.split(' | ')[1];

        const isVisible =
            (activeModType === 'All' || modType === activeModType) &&
            (activeVersion === 'All Versions' || modVersion === activeVersion);

        card.style.display = isVisible ? 'block' : 'none';
    });

    // Update the paragraph text after filtering
    updateParagraphText();
}

// Function to update active button
function updateActiveButton(buttons, currentButton) {
    buttons.forEach(function (btn) {
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

// Initialize the paragraph text
updateParagraphText();

// Add event listeners to mod cards
const modCards = document.querySelectorAll('.mod-card');
modCards.forEach(function (card) {
    card.addEventListener('click', function () {
        const paragraph = document.querySelector('.left-div p');
        const modName = card.querySelector('.mod-details h3').textContent;
        const modType = card.querySelector('.mod-details p:nth-child(2)').textContent.split(' | ')[0];
        const modVersion = card.querySelector('.mod-details p:nth-child(2)').textContent.split(' | ')[1];
        const modAuthor = card.querySelector('.mod-details .author').textContent;
        const modImage = card.querySelector('.mod-info img').getAttribute('src');
        const authorHTML = modAuthor.includes('fsForward') ? modAuthor.replace('fsForward', 'fsForward<i class=\'bx bxs-badge-check\'></i>') : modAuthor;

        // Define specific descriptions for each mod
        let description = '';
        if (modName === 'fsMod') {
            description = 'HI';
        } else if (modName === 'WorldD') {
            description = 'THIS IS A MOD';
        } else if (modName === 'Medical Resources') {
            description = 'Pinguin!';
        } else if (modName === 'NerdsAlert Legacy') {
            description = 'Oops!';
        } else if (modName === 'NerdsAlert O.G') {
            description = 'WHAT THE ****';
        }

        paragraph.innerHTML = `
          <div class="card-container-card">
            <div class="card">
              <img src="${modImage}" alt="Mod Logo" width="150" height="150">
              <div class="card-content">
                <h3 class="card-title">${modName}</h3>
                <p>${modType} | ${modVersion}</p>
                <p class="author">By ${authorHTML}</p>
              </div>
            </div>
            <p>${description}</p>
          </div>`;

        // Define the file size for the selected mod
        const fileSize = "10MB"; // Replace with the actual file size

        // Add button HTML
        paragraph.innerHTML += `
          <div class="button-container">
            <a class="face-button" href="Downloads/Executables/${modName} Installer.exe">
              <div class="face-primary">
                <span class="icon"></span>
                <i class='bx bxs-download'></i>${modName} Installer
              </div>
              <div class="face-secondary">
                <span class="icon fa fa-hdd-o"></span>
                Size: ${fileSize}
              </div>
            </a>
          </div>`;
    });
});
