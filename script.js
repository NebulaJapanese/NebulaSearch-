// Simulated search results (this could later be integrated with a real API)
const simulatedResults = [
  { title: "Nebula - Wikipedia", url: "https://en.wikipedia.org/wiki/Nebula" },
  { title: "What is a Nebula? - NASA", url: "https://www.nasa.gov/what-is-a-nebula" },
  { title: "Nebula – The Birthplace of Stars", url: "https://spaceplace.nasa.gov/nebulas" },
  { title: "Hubble Captures Stunning Images of Nebulas", url: "https://hubblesite.org/news/2020/24" },
  { title: "Nebula's Role in the Universe - Space.com", url: "https://www.space.com/nebula" },
];

// Perform the search when the user clicks the "Search" button
function performSearch() {
  const query = document.getElementById("search-query").value.trim().toLowerCase();
  
  if (query === "") {
    alert("Please enter a search query.");
    return;
  }

  // Simulating the search functionality (for now)
  const filteredResults = simulatedResults.filter(result => result.title.toLowerCase().includes(query));

  // If there are results, show them; otherwise, show a "No results found" message
  if (filteredResults.length > 0) {
    displayResults(filteredResults);
  } else {
    displayNoResults();
  }
}

// Display the filtered search results
function displayResults(results) {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = ''; // Clear previous results

  results.forEach(result => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
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
