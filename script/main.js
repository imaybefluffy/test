function hamburger() {
  var header = document.getElementById("header");
  var hamburger = document.getElementById("hamburger");

  if (header.classList.contains("hamburger-menu")) {
    header.classList.remove("hamburger-menu");
    hamburger.classList.remove("borderless");
  } else {
    header.classList.add("hamburger-menu");
    hamburger.classList.add("borderless");
  }
}
