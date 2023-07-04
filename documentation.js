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
    var a = createLinkElement(sublink, changeThirdSubheader);
    li.appendChild(a);
    subsectionLinks.appendChild(li);
  });

  // Clear third and fourth subsections
  clearSubsection('third');
  clearSubsection('fourth');
}

function changeThirdSubheader(sublinkText) {
  var thirdSubheader = document.getElementById('third-subsection-subheader');
  thirdSubheader.textContent = selectedMod + ': ' + sublinkText;

  selectedTopic = sublinkText; // Store the selected topic name

  var thirdSubsectionLinks = document.getElementById('third-subsection-links');
  thirdSubsectionLinks.innerHTML = '';

  var sublinks = [];

  if (selectedMod === 'fsFood Mod') {
    if (selectedTopic === 'How To Obtain') {
      sublinks = ['Watered Tin Can'];
    } else if (selectedTopic === 'Recipes') {
      sublinks = [
        'Tin Can',
        'Pufferfish Tin Can',
        'Cod Fish Tin Can',
        'Salmon Fish Tin Can',
        'Tropical Fish Tin Can',
        'Sweet Berries Soup'
      ];
    } else if (selectedTopic === 'Usage Guide') {
      sublinks = [
        'Pufferfish Tin Can',
        'Cod Fish Tin Can',
        'Salmon Fish Tin Can',
        'Tropical Fish Tin Can',
        'Sweet Berries Soup'
      ];
    }
  }

  sublinks.sort(); // Sort the sublinks alphabetically

  sublinks.forEach(function (sublink) {
    var li = document.createElement('li');
    var a = createLinkElement(sublink, changeFourthSubsection);
    li.appendChild(a);
    thirdSubsectionLinks.appendChild(li);
  });

  // Clear fourth subsection
  clearSubsection('fourth');
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

  if (selectedMod === 'fsFood Mod') {
    if (selectedTopic === 'How To Obtain') {
      if (content === 'Watered Tin Can') {
        fourthSubsectionContent.textContent =
          'Watered Tin Can can be obtained by right-clicking water with a Tin Can. (Make sure it\'s a source block)';
      }
    } else if (selectedTopic === 'Recipes') {
      var imagePath = imagePaths[content];
      if (imagePath) {
        insertImage(imagePath);
      }
    } else if (selectedTopic === 'Usage Guide') {
      var usageGuideText = {
        'Pufferfish Tin Can': 'When consumed (eaten), restores 2 hunger, and gives 0.2 saturation. (Is a snack)',
        'Cod Fish Tin Can': 'When consumed (eaten), restores 5 hunger, and gives 6 saturation. (Is a snack)',
        'Salmon Fish Tin Can': 'When consumed (eaten), restores 6 hunger, and gives 9.6 saturation. (Is a snack)',
        'Tropical Fish Tin Can': 'When consumed (eaten), restores 7 hunger, and gives 9.6 saturation. (Is a snack)',
        'Sweet Berries Soup': 'When consumed (eaten), restores 6 hunger, and gives 1 saturation. (Is not a snack)'
      };

      var usageText = usageGuideText[content];
      if (usageText) {
        fourthSubsectionContent.textContent = usageText;
      }
    }
  }
}

function insertImage(imagePath) {
  var fourthSubsectionContent = document.getElementById('fourth-subsection-content');
  fourthSubsectionContent.innerHTML = '';

  var img = document.createElement('img');
  img.src = imagePath;
  img.width = 250;
  img.style.display = 'block';
  img.style.margin = '0 auto';

  fourthSubsectionContent.appendChild(img);
}

function createLinkElement(linkText, clickHandler) {
  var a = document.createElement('a');
  a.href = 'javascript:void(0)';
  a.textContent = linkText;
  a.onclick = function () {
    clickHandler(linkText);
  };
  return a;
}

function clearSubsection(subsection) {
  var subheader = document.getElementById(subsection + '-subsection-subheader');
  subheader.textContent = '';

  try {
    var subsectionContent = document.getElementById(subsection + '-subsection-content');
    subsectionContent.textContent = '';
  } catch { }

  var subsectionLinks = document.getElementById(subsection + '-subsection-links');
  subsectionLinks.innerHTML = '';
}
