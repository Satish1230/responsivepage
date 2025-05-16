// Grab cards & total display
const cards = document.querySelectorAll(".card");
const totalEl = document.querySelector(".total");

// When a radio changes, update UI
cards.forEach((card) => {
  const radio = card.querySelector('input[type="radio"]');
  radio.addEventListener("change", () => {
    // deactivate all
    cards.forEach((c) => c.classList.remove("active"));
    // activate this one
    card.classList.add("active");
    // update total
    const price = parseFloat(card.dataset.price);
    totalEl.textContent = `Total : $${price.toFixed(2)} USD`;
  });
});

// default to first selected
const first = cards[0];
first.querySelector("input").checked = true;
first.classList.add("active");
totalEl.textContent = `Total : $${parseFloat(first.dataset.price).toFixed(
  2
)} USD`;
