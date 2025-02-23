document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html") // Fetch the header file
    .then(response => response.text()) // Convert response to text
    .then(data => {
        document.getElementById("header").innerHTML = data; // Inject HTML

        // Get current page name
        let currentPage = window.location.pathname.split("/").pop() || "index.html"; 

        // Select all navigation links
        let navLinks = document.querySelectorAll("#header a");

        navLinks.forEach(link => {
            let linkHref = link.getAttribute("href");

            // Check if the link matches the current page or if it's Home
            if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
                link.classList.add("active"); // Add 'active' class
            } else {
                link.classList.remove("active"); // Remove from others
            }
        });
    })
    .catch(error => console.error("Error loading header:", error));
});





document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html") // Fetch the header file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("footer").innerHTML = data; // Inject HTML
        })
        .catch(error => console.error("Error loading header:", error));
});