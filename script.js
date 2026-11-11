// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

const cat = document.querySelector("#details-cat");

svgPlaceholder.addEventListener("toggle", updateSvgPosition);
function updateSvgPosition() {
  console.log("updateSvgPosition");

  const openDetails = document.querySelector(".accordion-item:open");
  if (openDetails) {
    console.log(openDetails.dataset.position);

    svgPlaceholder.dataset.position = openDetails.dataset.position;
  } else {
  }
}
