let currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
// Example: log when a project is clicked
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Opening: ${link.textContent}`);
  });
});
