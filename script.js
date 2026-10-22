
const richtigerCode = "123";

const formular = document.getElementById("code-form");
const felder = document.querySelectorAll(".code-felder input");
const nachricht = document.getElementById("nachricht");
const fehlermeldung = document.getElementById("fehlermeldung");

felder.forEach((feld, index) => {
  feld.addEventListener("input", () => {
    feld.value = feld.value.replace(/\D/g, "").slice(0, 1);

    if (feld.value && index < felder.length - 1) {
      felder[index + 1].focus();
    }
  });
});

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const eingegebenerCode = Array.from(felder)
    .map((feld) => feld.value)
    .join("");

  if (eingegebenerCode === richtigerCode) {
    nachricht.hidden = false;
    fehlermeldung.textContent = "";
    document.getElementById("schloss").textContent = "🤫";
  } else {
    nachricht.hidden = true;
    fehlermeldung.textContent =
      "Das war leider nicht der richtige Code. Versuch es noch einmal.";
  }
});

felder.forEach((feld) => {
  feld.addEventListener("input", () => {
    fehlermeldung.textContent = "";
  });
});
