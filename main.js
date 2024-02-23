const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuItemsContainer = document.querySelector(".menu-items-container");

menuIcon.addEventListener("click", () => {
  menuItemsContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  menuItemsContainer.classList.remove("active");
});
