// Smooth scrolling for anchor links in the navigation menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
        });
    });
});
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim(); // Get the search term

        if (searchTerm !== "") {
            // Perform the search or redirection to a search results page
            alert("Searching for: " + searchTerm);
        }
    });
});
