function hamburger() {
  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var main = document.getElementById("main");
  var footer = document.getElementById("footer");

  if (header.classList.contains("hamburger-menu")) {
    header.classList.remove("hamburger-menu");
  } else {
    header.classList.add("hamburger-menu");
  }
}
