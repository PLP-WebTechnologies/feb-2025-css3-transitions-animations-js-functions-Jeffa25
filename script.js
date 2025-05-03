// Load saved theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  });
  
  // Toggle theme and store preference
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("preferredTheme", theme);
  });
  
  // Animate image on button click
  document.getElementById("startAnimation").addEventListener("click", () => {
    const img = document.getElementById("animateImage");
    img.classList.remove("animate-spin"); // Restart animation
    void img.offsetWidth; // Trigger reflow
    img.classList.add("animate-spin");
  });
  