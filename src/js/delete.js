const deleteButton = document.getElementById('delete-btn'),
	cancelButton = document.getElementById('cancel-btn'),
	confirmSection = document.getElementById('confirm');

deleteButton.addEventListener('click', () => (confirmSection.style.display = 'block'));
cancelButton.addEventListener('click', () => (confirmSection.style.display = 'none'));
