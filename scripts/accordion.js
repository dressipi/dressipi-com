const accordionButtons = document.querySelectorAll("button.accordion-button");

function toggleAccordion() {
  const expanded = this.getAttribute("aria-expanded");

  for (i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].setAttribute("aria-expanded", "false");
  }

  if (expanded === "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

accordionButtons.forEach((accordionButton) => accordionButton.addEventListener("click", toggleAccordion));