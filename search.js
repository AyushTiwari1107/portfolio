// JavaScript (search.js)
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
