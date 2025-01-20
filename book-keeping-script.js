document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("chatboxOverlay");
  const chatbox = document.querySelector(".chatbox");

  overlay.addEventListener("click", (event) => {
    if (!chatbox.contains(event.target)) {
      overlay.style.display = "none";
    }
  });

  const openChatbox = document.getElementById("openChatbox");
  const chatboxLink = openChatbox.querySelector("a");

  chatboxLink.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.style.display = "flex";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceLink = document.getElementById("service-link");
  const overlay = document.getElementById("overlay");

  serviceLink.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".services img");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
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

function toggleOverlay() {
  const overlay = document.getElementById("chatboxOverlay");
  overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
}
