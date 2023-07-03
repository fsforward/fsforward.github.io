var selectedMod = ''; // Variable to store the selected mod name
var selectedTopic = ''; // Variable to store the selected topic name

function changeSubheader(linkText, sublinkText) {
    var subheader = document.getElementById('subsection-subheader');
    subheader.textContent = linkText + ': ' + sublinkText;

    selectedMod = linkText; // Store the selected mod name

    var subsectionLinks = document.getElementById('subsection-links');
    subsectionLinks.innerHTML = '';

    var sublinks = ['How to obtain items', 'Recipes', 'Usage Guide'];
    sublinks.sort(); // Sort the sublinks alphabetically

    sublinks.forEach(function (sublink) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = sublink;
        a.onclick = function () {
            changeThirdSubheader(sublink);
        };
        li.appendChild(a);
        subsectionLinks.appendChild(li);
    });

    // Clear third and fourth subsections
    var thirdSubheader = document.getElementById('third-subsection-subheader');
    thirdSubheader.textContent = '';
    var thirdSubsectionLinks = document.getElementById('third-subsection-links');
    thirdSubsectionLinks.innerHTML = '';
    var fourthSubsectionSubheader = document.getElementById('fourth-subsection-subheader');
    fourthSubsectionSubheader.textContent = '';
    var fourthSubsectionContent = document.getElementById('fourth-subsection-content');
    fourthSubsectionContent.textContent = '';
}

function changeThirdSubheader(sublinkText) {
    var thirdSubheader = document.getElementById('third-subsection-subheader');
    thirdSubheader.textContent = selectedMod + ': ' + sublinkText;

    selectedTopic = sublinkText; // Store the selected topic name

    var thirdSubsectionLinks = document.getElementById('third-subsection-links');
    thirdSubsectionLinks.innerHTML = '';

    var sublinks = [];

    if (selectedMod === 'fsFoodMod') {
        if (selectedTopic === 'How to obtain items') {
            sublinks = ['Tin Can', 'Pufferfish Tin Can', 'Cod Fish Tin Can', 'Salmon Fish Tin Can', 'Tropical Fish Tin Can'];
        } else if (selectedTopic === 'Recipes') {
            sublinks = ['Tin Can', 'Pufferfish Tin Can', 'Cod Fish Tin Can', 'Salmon Fish Tin Can', 'Tropical Fish Tin Can'];
        } else if (selectedTopic === 'Usage Guide') {
            sublinks = ['Tin Can', 'Pufferfish Tin Can', 'Cod Fish Tin Can', 'Salmon Fish Tin Can', 'Tropical Fish Tin Can'];
        }
    } 

    sublinks.sort(); // Sort the sublinks alphabetically

    sublinks.forEach(function (sublink) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = 'javascript:void(0)';
        a.textContent = sublink;
        a.onclick = function () {
            changeFourthSubsection(sublink);
        };
        li.appendChild(a);
        thirdSubsectionLinks.appendChild(li);
    });

    // Clear fourth subsection
    var fourthSubsectionSubheader = document.getElementById('fourth-subsection-subheader');
    fourthSubsectionSubheader.textContent = '';
    var fourthSubsectionContent = document.getElementById('fourth-subsection-content');
    fourthSubsectionContent.textContent = '';
}

function changeFourthSubsection(content) {
    var fourthSubsectionSubheader = document.getElementById('fourth-subsection-subheader');
    var fourthSubsectionContent = document.getElementById('fourth-subsection-content');

    if (selectedMod === 'fsFoodMod' && selectedTopic === 'How to obtain items') {
        fourthSubsectionSubheader.textContent = selectedMod + ': How to obtain ' + content;
        if (content === 'Tin Can') {
            fourthSubsectionContent.textContent = 'Tin Can can be crafted with 5 iron ingots.';
        } else if (content === 'Cod Fish Tin Can') {
            fourthSubsectionContent.textContent = 'Cod Fish Tin Can can be obtained by fishing in specific areas.';
        }
    } else if (selectedMod === 'fsFoodMod' && selectedTopic === 'Recipes') {
        fourthSubsectionSubheader.textContent = selectedMod + ': Recipe for ' + content;
        if (content === 'Salmon Fish Tin Can') {
            fourthSubsectionContent.textContent = 'Salmon Fish Tin Can recipe requires salmon and tin can.';
        }
    } else if (selectedMod === 'fsFoodMod' && selectedTopic === 'Usage Guide') {
        fourthSubsectionSubheader.textContent = selectedMod + ': Usage guide for ' + content;
        if (content === 'Pufferfish Tin Can') {
            fourthSubsectionContent.textContent = 'Pufferfish Tin Can can be used as a potion ingredient.';
        }
    }
}
