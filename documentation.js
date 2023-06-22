// Get references to the necessary elements
const documentationLinks = document.querySelectorAll('.documentation-list-one a');
const modDocumentationHeader = document.getElementById('modDocumentationHeader');
const modDetailsList = document.querySelector('#fsModDetails .mod-details-list-one');
const modDetailsContent = document.getElementById('modDetailsContent');
const modDetailsContentAnswer = document.getElementById('modDetailsContentAnswer');

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

        // Update the header of the second subsection
        modDocumentationHeader.textContent = modName + ' Documentation';

        // Clear the content of the third and fourth subsections if they contain anything
        modDetailsContent.innerHTML = '';
        modDetailsContentAnswer.innerHTML = '';

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

                // Clear the content of the fourth subsection if it contains anything
                modDetailsContentAnswer.innerHTML = '';

                // Update the content in the third and fourth subsections
                if (modName === 'fsMod') {
                    if (linkName === 'How to obtain items') {
                        const links = ['Tin Can', 'Cod Fish Tin Can'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    } else if (linkName === 'Recipes') {
                        const links = ['Salmon Fish Tin Can'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    } else if (linkName === 'Usage Guide') {
                        const links = ['Pufferfish Tin Can'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    }
                } else if (modName === 'MedicalResources') {
                    if (linkName === 'How to obtain items') {
                        const links = ['Green Herb'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    } else if (linkName === 'Recipes') {
                        const links = ['Bandage'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    } else if (linkName === 'Usage Guide') {
                        const links = ['Medkit'];
                        createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                    }
                }

                // Add your additional mod conditions and link contents here
                // else if (modName === 'AnotherMod') {
                //     if (linkName === 'How to obtain items') {
                //         const links = ['Link1', 'Link2'];
                //         createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                //     } else if (linkName === 'Recipes') {
                //         const links = ['Link3', 'Link4'];
                //         createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                //     } else if (linkName === 'Usage Guide') {
                //         const links = ['Link5', 'Link6'];
                //         createLinksAndParagraphs(modDetailsContent, modDetailsContentAnswer, links);
                //     }
                // }
            });
        });
    });
});

// Function to create links and paragraphs in the third and fourth subsections
function createLinksAndParagraphs(subsection3, subsection4, links) {
    links.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = '#';
        linkElement.textContent = link;
        listItem.appendChild(linkElement);
        subsection3.appendChild(listItem);

        linkElement.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Clear the content of the fourth subsection if it contains anything
            subsection4.innerHTML = '';

            // Update the content in the fourth subsection
            const paragraph = document.createElement('p');
            paragraph.textContent = 'Replace this with the actual content for ' + link;
            subsection4.appendChild(paragraph);
        });
    });
}
