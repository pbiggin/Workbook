const colours = [
  "#e040ae",
  "#F25016",
  "#6596F3",
  "#83B366",
  "#D3A4EA",
  "#EAD094",
  "#B2DCE2",
  "#D7EAAC",
];

document.addEventListener("DOMContentLoaded", function () {
  const colourables = document.querySelectorAll(".random-colour");

  colourables.forEach((colour) => {
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    colour.style.backgroundColor = randomColour;
  });
});

function openBook(container) {
  const book = container.querySelector(".book");
  const insidePages = container.querySelectorAll(".book-inside");
  if (book) {
    book.classList.add("open");
  }
  insidePages.forEach((page) => {
    page.classList.add("open");
  });
}

function closeBook(container) {
  const book = container.querySelector(".book");
  const insidePages = container.querySelectorAll(".book-inside");
  if (book) {
    book.classList.remove("open");
  }
  insidePages.forEach((page) => {
    page.classList.remove("open");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const textSize = document.querySelectorAll(".random-font-size");

  const minSize = 15;
  const maxSize = 60;

  textSize.forEach((el) => {
    const randomSize =
      Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    el.style.fontSize = randomSize + "pt";
  });
});
