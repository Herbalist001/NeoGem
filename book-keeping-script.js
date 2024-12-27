document.addEventListener("DOMContentLoaded", () => {
  const serviceLink = document.getElementById("service-link");
  const overlay = document.getElementById("overlay");

  // Open the overlay when "Services" is clicked
  serviceLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    overlay.style.display = "block"; // Show the overlay
  });

  // Close the overlay when clicking outside of it
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none"; // Hide the overlay
    }
  });
});
