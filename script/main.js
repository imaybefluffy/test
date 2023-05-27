var header = document.getElementById("header");
var contactButton = document.getElementById("contact");
var contactIcon = document.getElementById("contact-icon");

function contact() {
  if (header.classList.contains("contact-info-menu")) {
    header.classList.remove("contact-info-menu");
    contactButton.classList.remove("borderless");
    contactIcon.classList.add("fa-address-card-o");
    contactIcon.classList.remove("fa-close");
  } else {
    header.classList.add("contact-info-menu");
    contactButton.classList.add("borderless");
    contactIcon.classList.remove("fa-address-card-o");
    contactIcon.classList.add("fa-close");
  }
}
