function filterImages() {
  const searchValue = document.getElementById("search-input").value.toLowerCase();
  const images = document.getElementsByClassName("image");

  for (let i = 0; i < images.length; i++) {
    const name = images[i].getAttribute("data-name").toLowerCase();
    if (name.indexOf(searchValue) === -1) {
      // image does not match search input, hide it
      images[i].style.display = "none";
    } else {
      // image matches search input, show it
      images[i].style.display = "block";
      // get position of visible images
      const rect = images[i].getBoundingClientRect();
      // set the position of hidden images to match the visible images
      for (let j = 0; j < images.length; j++) {
        if (images[j].style.display === "none") {
          images[j].style.top = rect.top + "px";
          images[j].style.left = rect.left + "px";
          break;
        }
      }
    }
  }
}
