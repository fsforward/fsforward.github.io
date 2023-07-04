var selectedMod = ''; // Variable to store the selected mod name
var selectedTopic = ''; // Variable to store the selected topic name

function changeSubheader(linkText, sublinkText) {
    var subheader = document.getElementById('subsection-subheader');
    subheader.textContent = linkText + ': ' + sublinkText;

    selectedMod = linkText; // Store the selected mod name

    var subsectionLinks = document.getElementById('subsection-links');
    subsectionLinks.innerHTML = '';

    var sublinks = ['How To Obtain', 'Recipes', 'Usage Guide'];
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
        if (selectedTopic === 'How To Obtain') {
            sublinks = ['Watered Tin Can'];
        } else if (selectedTopic === 'Recipes') {
            sublinks = ['Tin Can', 'Pufferfish Tin Can', 'Cod Fish Tin Can', 'Salmon Fish Tin Can', 'Tropical Fish Tin Can', 'Sweet Berries Soup'];
        } else if (selectedTopic === 'Usage Guide') {
            sublinks = ['Pufferfish Tin Can', 'Cod Fish Tin Can', 'Salmon Fish Tin Can', 'Tropical Fish Tin Can', 'Sweet Berries Soup'];
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

// Mapping of content to image paths
var imagePaths = {
    'Tin Can': 'Images/Documentation/fsFood%20Mod/tin_can.png',
    'Pufferfish Tin Can': 'Images/Documentation/fsFood%20Mod/pufferfish_tin_can.png',
    'Cod Fish Tin Can': 'Images/Documentation/fsFood%20Mod/cod_fish_tin_can.png',
    'Salmon Fish Tin Can': 'Images/Documentation/fsFood%20Mod/salmon_fish_tin_can.png',
    'Tropical Fish Tin Can': 'Images/Documentation/fsFood%20Mod/tropical_fish_tin_can.png',
    'Sweet Berries Soup': 'Images/Documentation/fsFood%20Mod/sweet_berries_soup.png'
  };
  
  function changeFourthSubsection(content) {
    var fourthSubsectionSubheader = document.getElementById('fourth-subsection-subheader');
    var fourthSubsectionContent = document.getElementById('fourth-subsection-content');
  
    fourthSubsectionSubheader.textContent = selectedMod + ': ' + selectedTopic + ' ' + content;
  
    if (selectedMod === 'fsFoodMod') {
      if (selectedTopic === 'How To Obtain') {
        if (content === 'Watered Tin Can') {
          fourthSubsectionContent.textContent = 'Watered Tin Can can be obtained by right-clicking water with a Tin Can. (Make sure it\'s a source block)';
        }
      } else if (selectedTopic === 'Recipes') {
        var imagePath = imagePaths[content];
        if (imagePath) {
          insertImage(imagePath);
        }
      } else if (selectedTopic === 'Usage Guide') {
        if (content === 'Pufferfish Tin Can') {
          fourthSubsectionContent.textContent = 'Pufferfish Tin Can can be used as a potion ingredient.';
        }
      }
    }
  }
  
  function insertImage(imagePath) {
    var fourthSubsectionContent = document.getElementById('fourth-subsection-content');
    fourthSubsectionContent.innerHTML = '';
  
    var img = document.createElement('img');
    img.src = imagePath;
    img.width = 300;
    img.style.display = 'block';
    img.style.margin = '0 auto';
  
    fourthSubsectionContent.appendChild(img);
  }
