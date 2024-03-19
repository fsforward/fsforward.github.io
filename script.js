document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.getElementById("cards-container");

    // Assume the "downloads" variable contains the list of folders and version numbers in the "downloads" directory
    const downloads = [
        "fsPNGTuber:V1.1.0",
        // Add more folder names and version numbers as needed
    ];

    // Loop through each folder in the "downloads" directory
    downloads.forEach(item => {
        // Split folder name and version number
        const [folder, version] = item.split(":");

        // Create a card for each folder
        const card = document.createElement("div");
        card.classList.add("card");

        // Add icon (assuming icon URL is based on folder name)
        const icon = document.createElement("div");
        icon.classList.add("icon");
        const iconImg = document.createElement("img");
        iconImg.src = `/media/images/${folder}-${version}.png`; // Adjust path as needed
        iconImg.alt = "App Icon";
        iconImg.width = 50;
        icon.appendChild(iconImg);
        card.appendChild(icon);

        // Add content
        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = folder;
        content.appendChild(title);

        // Add space
        const space = document.createElement("p");
        space.innerHTML = "<p style='font-size: x-small;'>&nbsp;</p>";
        content.appendChild(space);

        // Add Download button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download";
        downloadButton.classList.add("download-button");
        content.appendChild(downloadButton);

        // Add author
        const author = document.createElement("p");
        author.classList.add("author");
        author.innerHTML = "사라 환 <i class='bx bx-badge-check'></i>";
        content.appendChild(author);

        // Add version
        const versionElement = document.createElement("p");
        versionElement.classList.add("version");
        versionElement.innerHTML = `<i class='bx bxl-windows'></i> <a href='${folder}.html'>${version}</a>`;
        content.appendChild(versionElement);

        card.appendChild(content);
        cardsContainer.appendChild(card);

        // Add event listeners
        card.addEventListener("mouseenter", function() {
            this.classList.add("hover");
        });

        card.addEventListener("mouseleave", function() {
            this.classList.remove("hover");
        });

        downloadButton.addEventListener("click", function() {
            const zipUrl = `downloads/${folder}/release/${folder}-${version}.zip`;
            window.location.href = zipUrl;
        });
    });
});
