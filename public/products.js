const params = new URLSearchParams(window.location.search);
const requestedFilter = (params.get("category") || "all").toLowerCase();

const chips = Array.from(document.querySelectorAll(".filter-chip"));
const cards = Array.from(document.querySelectorAll(".product-card"));

const applyFilter = (filter) => {
  const normalized = filter === "bags" || filter === "collars" || filter === "totes" ? filter : "all";

  chips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === normalized);
  });

  cards.forEach((card) => {
    const matches = normalized === "all" || card.dataset.category === normalized;
    card.hidden = !matches;
  });

  const nextUrl = normalized === "all" ? "./products.html" : `./products.html?category=${normalized}`;
  window.history.replaceState({}, "", nextUrl);
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => applyFilter(chip.dataset.filter));
});

applyFilter(requestedFilter);
