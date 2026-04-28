// Dark mode toggle script
const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle('dark');

  // Save user preference in localStorage
  const isDarkMode = htmlElement.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Attach toggle function to a button
const darkModeButton = document.getElementById('dark-mode-toggle');
if (darkModeButton) {
  darkModeButton.addEventListener('click', toggleDarkMode);
}