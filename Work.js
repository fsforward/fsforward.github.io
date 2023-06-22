// Get references to the necessary elements
const documentationLinks = document.querySelectorAll('.documentation-list-one a');
const modDocumentationHeader = document.getElementById('modDocumentationHeader');
const modDetailsList = document.querySelector('#fsModDetails .mod-details-list-one');
const modDetailsContent = document.getElementById('modDetailsContent');

// Create an array to store the link names
const linkNames = ['How to obtain items', 'Recipes', 'Usage Guide'];

// Sort the link names alphabetically
linkNames.sort();


// Add event listeners to the documentation links
documentationLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the mod name and the clicked link's text content
        const modName = this.getAttribute('data-mod');
        const linkText = this.textContent;

        // Update the header and content of the second subsection
        modDocumentationHeader.textContent = modName + ' Documentation';

        // Clear the content of the third subsection if it contains anything
        modDetailsContent.innerHTML = '';

        // Create a new list for the second subsection
        modDetailsList.innerHTML = '';

        // Loop through the sorted link names
        linkNames.forEach(linkName => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = linkName;
            listItem.appendChild(link);
            modDetailsList.appendChild(listItem);

            // Add event listener to the new link within the second subsection
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default link behavior

                // Update the header and content of the third subsection
                modDetailsContent.innerHTML = '';
                const thirdSubsectionHeader = document.createElement('h3');
                thirdSubsectionHeader.textContent = modName + ' ' + linkName;
                modDetailsContent.appendChild(thirdSubsectionHeader);

                // Update the paragraph content in the third subsection
                const paragraph = document.createElement('p');
                let paragraphContent = '';
                if (modName === 'fsMod') {
                    if (linkName === 'How to obtain items') {
                        paragraphContent = 'wood';
                    } else if (linkName === 'Recipes') {
                        paragraphContent = 'stone';
                    } else if (linkName === 'Usage Guide') {
                        paragraphContent = 'sand';
                    }
                } else if (modName === 'NerdsAlert-Legacy') {
                    if (linkName === 'How to obtain items') {
                        paragraphContent = 'bedrock';
                    } else if (linkName === 'Recipes') {
                        paragraphContent = 'white glass';
                    } else if (linkName === 'Usage Guide') {
                        paragraphContent = 'gravel';
                    }
                } else if (modName === 'NerdsAlert-OG') {
                    if (linkName === 'How to obtain items') {
                        paragraphContent = 'air';
                    } else if (linkName === 'Recipes') {
                        paragraphContent = 'boat';
                    } else if (linkName === 'Usage Guide') {
                        paragraphContent = 'stick';
                    }
                } else if (modName === 'WorldD') {
                    if (linkName === 'How to obtain items') {
                        paragraphContent = 'pickaxe';
                    } else if (linkName === 'Recipes') {
                        paragraphContent = 'sword';
                    } else if (linkName === 'Usage Guide') {
                        paragraphContent = 'shovel';
                    }
                }
                paragraph.textContent = paragraphContent;
                modDetailsContent.appendChild(paragraph);
            });
        });
    });
});
