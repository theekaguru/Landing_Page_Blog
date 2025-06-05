document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector("nav ul");
  const dropdownLinks = document.querySelectorAll("nav ul li");

  // Toggle nav menu on mobile
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // Toggle dropdowns on click in mobile view
  dropdownLinks.forEach((li) => {
    li.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        const dropdown = this.querySelector(".dropdown-content");
        if (dropdown) {
          e.preventDefault(); // Prevent default anchor behavior
          dropdown.classList.toggle("show");
        }
      }
    });
  });
});
