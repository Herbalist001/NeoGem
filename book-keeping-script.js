document.addEventListener("DOMContentLoaded", () => {
  const openChatboxButton = document.getElementById("openChatbox");
  const overlay = document.getElementById("chatboxOverlay");
  const closeButton = document.getElementById("closeButton");
  const sendButton = document.getElementById("sendButton");

  // Open chatbox overlay
  openChatboxButton.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  // Close chatbox overlay
  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Send button functionality (for demonstration)
  sendButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log(`Sending email to: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Close the chatbox overlay after "sending"
    overlay.style.display = "none";
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".services img");

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.1, // Trigger when 10% of the image is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  images.forEach((image) => {
    observer.observe(image);
  });
});
