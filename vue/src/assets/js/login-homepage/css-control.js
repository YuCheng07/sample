const searchBar = document.querySelector(".search-bar");
const searchBarInput = document.querySelector(".search-bar-input");
const closeIcon = document.querySelector(".xmark-icon");
const searchIcon = document.querySelector(".search-icon");
const searchBarLogoicon = document.querySelector(".search-bar-logo-svg");

searchIcon.addEventListener("click", () => {
  searchBarInput.classList.remove("search-bar-input-hidden");
  searchBar.classList.add("search-bar-width");
  closeIcon.classList.remove("xmark-icon-hidden");
  searchBarLogoicon.classList.add("search-bar-logo-svg-hidden");
});

searchBarInput.addEventListener("blur", () => {
  searchBarInput.classList.add("search-bar-input-hidden");
  closeIcon.classList.add("xmark-icon-hidden");
  searchBar.classList.remove("search-bar-width");
  searchBarLogoicon.classList.remove("search-bar-logo-svg-hidden");
});

closeIcon.addEventListener("click", () => {
  searchBarInput.classList.add("search-bar-input-hidden");
  closeIcon.classList.add("xmark-icon-hidden");
  searchBar.classList.remove("search-bar-width");
  searchBarLogoicon.classList.remove("search-bar-logo-svg-hidden");
});
