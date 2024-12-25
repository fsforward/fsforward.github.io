const files = [
    "downloads/sarahs_card_generator-launcher.exe",
];

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function calculateFontSize(gameName) {
    const baseSize = 16; // Base font size in pixels
    const maxLength = 25; // Maximum length before resizing
    if (gameName.length > maxLength) {
        // Reduce font size proportionally
        const sizeReduction = ((gameName.length - maxLength) / 2);
        return Math.max(baseSize - sizeReduction, 12); // Minimum font size of 12px
    }
    return baseSize;
}

function getFileExtension(filePath) {
    // Extract the file extension from the file path, including the dot
    const fileName = filePath.split('/').pop();
    const lastDotIndex = fileName.lastIndexOf('.');
    return fileName.slice(lastDotIndex); // Return from the last dot to the end
}

function createDownloadCard(filePath) {
    // Extract game name and version from the file path
    const fileName = filePath.split('/').pop();
    const nameAndVersion = fileName.split('-');
    let gameName = nameAndVersion[0].replace(/_/g, ' '); // Replaces underscores with spaces
    gameName = capitalizeWords(gameName); // Capitalize first letters of words

    let gameVersion;
    // Check if the file name contains '-launcher'
    if (fileName.includes('-launcher')) {
        gameVersion = "Info in launcher | 28MB"; // If it contains -launcher
    } else {
        // Get the entire version string (everything between the first hyphen and the last dot)
        gameVersion = nameAndVersion.slice(1).join('-').split('.')[0] + '.' + nameAndVersion.slice(1).join('-').split('.')[1] + '.' + nameAndVersion.slice(1).join('-').split('.')[2];
    }

    // Generate the image file path based on the base file name
    const baseFileName = fileName.split('-')[0]; // Get the base file name before the version or launcher
    const imagePath = `images/${baseFileName}.jpg`;

    // Create card elements
    const card = document.createElement('div');
    card.classList.add('download-card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const gameImage = document.createElement('img');
    gameImage.src = imagePath; // Use the generated image path

    const info = document.createElement('div');
    info.classList.add('info');

    const title = document.createElement('div');
    title.classList.add('download-title');
    title.textContent = gameName;
    title.style.fontSize = `${calculateFontSize(gameName)}px`; // Set dynamic font size

    const version = document.createElement('div');
    version.classList.add('download-version');
    version.textContent = gameVersion; // Using the correct version format

    const downloadBtn = document.createElement('a');
    downloadBtn.classList.add('download-btn');
    downloadBtn.innerHTML = `${getFileExtension(filePath)} <i class='bx bxl-windows' style='color:#e4bde8'></i>`; // Set button inner HTML
    downloadBtn.href = filePath;

    // Append info (name and version) to the info div
    info.appendChild(title);
    info.appendChild(version);

    // Append image and info to the card content
    cardContent.appendChild(gameImage);
    cardContent.appendChild(info);

    // Append card content and button to the card
    card.appendChild(cardContent);
    card.appendChild(downloadBtn);

    // Append card to container
    document.getElementById('cards-container').appendChild(card);
}

// Automatically add cards based on file paths
files.forEach(createDownloadCard);
