const apiKey = "YOUR_GOOGLE_API_KEY";  // Replace with your Google API key
const cx = "YOUR_CUSTOM_SEARCH_ENGINE_ID";  // Replace with your CSE ID

// Perform the search when the user clicks the "Search" button
function performSearch() {
  const query = document.getElementById("search-query").value.trim();
  
  if (query === "") {
    alert("Please enter a search query.");
    return;
  }

  // Fetch search results from Google Custom Search API
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Check if we have results
      if (data.items && data.items.length > 0) {
        displayResults(data.items);
      } else {
        displayNoResults();
      }
    })
    .catch(error => {
      console.error("Error fetching search results:", error);
      alert("There was an error with the search. Please try again.");
    });
}

// Display the filtered search results
function displayResults(results) {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = ''; // Clear previous results

  results.forEach(result => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${result.link}" target="_blank">${result.title}</a>`;
    resultsList.appendChild(listItem);
  });

  // Show results section and hide the search bar
  document.getElementById("search-results").classList.remove("hidden");
}

// Display a "No results found" message if no results match the query
function displayNoResults() {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = "<li>No results found. Try a different query.</li>";

  // Show results section and hide the search bar
  document.getElementById("search-results").classList.remove("hidden");
}
