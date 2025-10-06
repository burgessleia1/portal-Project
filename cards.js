let cardsList = document.querySelector(".cards");

let cards = [
  { title: "HTML Project", link: "project_1/index.html" },
  { title: "CSS Project", link: "project_2/index.html" },
  { title: "JavaScript Project", link: "project_3/index.html" },
];

// Add another dynamically
cards.push({ title: "Final Portal Project", link: "portal/index.html" });

cards.map((card) => {
  cardsList.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.link}" target="_blank">Project Link</a>
        </div>
      </div>
    </div>
  `;
});
