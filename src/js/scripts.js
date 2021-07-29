// Back to top button
const topButton = document.getElementById('top-btn');
topButton.addEventListener('click', () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
