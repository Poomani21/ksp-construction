
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Get the current page filename (e.g., "gallery.html")
    let currentPath = window.location.pathname.split("/").pop();

    // Default to index.html if on the root path "/"
    if (currentPath === "" || currentPath === "/") {
      currentPath = "index.html";
    }

    // 2. Function to highlight active items
    function setActiveMenuItem(selector) {
      const menuLinks = document.querySelectorAll(selector);

      menuLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (href && href === currentPath) {
          // Highlight the immediate <li>
          const parentLi = link.closest("li");
          if (parentLi) {
            parentLi.classList.add("active");

            // If it's a dropdown child, also highlight the main parent dropdown <li>
            const parentDropdown = parentLi.closest("ul").closest("li");
            if (parentDropdown) {
              parentDropdown.classList.add("active");
            }
          }
        }
      });
    }

    // Apply to Desktop Navigation
    setActiveMenuItem("#navigation a");

    // Apply to Mobile Menu (Runs after SlickNav / MeanMenu dynamically constructs its HTML)
    setTimeout(function () {
      setActiveMenuItem(".mobile_menu a, .slicknav_nav a, .mean-nav a");
    }, 300);
  });
