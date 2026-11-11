// Interaktiv SVG-side
const svgGirls = document.querySelector(".svg-girls");
const girls = document.querySelector("#details-girls");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-girls");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

girls.addEventListener("toggle", updateSvgPosition);

function updateSvgPosition() {
  console.log("updateSvgPosition");
  const openDetails = document.querySelector(".accordion-item:open");
  if (openDetails) {
    //hvis der er en åben
    //console.log(openDetails.dataset.position);

    svgGirls.dataset.position = openDetails.dataset.position;
  } else {
    // hvis der ikke er nogen åben
  }
}
