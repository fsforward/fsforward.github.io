function filterImages() {
  var input = document.getElementById("search-input");
  var filter = input.value.toUpperCase();
  var images = document.getElementsByClassName("image");

  for (var i = 0; i < images.length; i++) {
    var imageName = images[i].getAttribute("data-name");
    if (imageName.toUpperCase().indexOf(filter) > -1) {
      images[i].style.display = "";
    } else {
      images[i].style.display = "none";
    }
  }
}
