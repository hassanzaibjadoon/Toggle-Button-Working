// Select the toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check the user's preferred theme and set it
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
const currentTheme = savedTheme || (userPrefersDark ? 'dark-mode' : 'light-mode');
document.body.classList.add(currentTheme);

// Update the button text based on the current theme
themeToggleButton.textContent = currentTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

// Add event listener for button click
themeToggleButton.addEventListener('click', () => {
  // Toggle the theme class on the body
  const isDarkMode = document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode', !isDarkMode);

  // Update button text
  themeToggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  // Save the current theme in localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});
