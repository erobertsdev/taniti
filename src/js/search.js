const searchButton = document.getElementById('search-btn'),
	searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', () => (searchResults.style.display = 'initial'));
