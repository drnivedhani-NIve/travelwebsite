// Load Common Header and highlight active page
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Highlight Active Navbar Link
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active", "fw-bold", "text-warning"); // optional styling
      }
    });
  })
  .catch((error) => console.log("Header Load Error:", error));

// Load Footer
fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.log("Footer Load Error:", error));
