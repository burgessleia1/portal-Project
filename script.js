let currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.getElementById("lastUpdated").textContent = currentDate;

// Example: log when a project is clicked
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log(`Opening: ${link.textContent}`);
  });
});

