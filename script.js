document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".navbar-nav a.nav-link");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = this.getAttribute("href");
    });
  });
});


function navigateToSection() {
  const selectElement = document.getElementById("inputGroupSelect01");
  const selectedValue = selectElement.value;

  if (selectedValue !== "") {
    const section = document.getElementById(selectedValue);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const previewModal = new bootstrap.Modal(document.getElementById('previewModal'));
  const previewContent = document.getElementById('previewContent');
  const previewImage = document.getElementById('previewImage');
  const previewTitle = document.getElementById('previewTitle');
  const previewDescription = document.getElementById('previewDescription');
  const additionalDescription = document.getElementById('additionalDesc');


  const cardElements = document.querySelectorAll('.card-custom');

  cardElements.forEach((card, index) => {
    const image = card.querySelector('img');
    const title = card.querySelector('.card-title');
    const description = card.querySelector('.card-text-descr-custom');
    const additionalDesc = card.getAttribute('data-additional-description');


    card.addEventListener('click', function (event) {
      // Aggiorna i contenuti nella modal con quelli della card cliccata
      previewImage.src = image.src;
      previewTitle.textContent = title.textContent;
      previewDescription.textContent = description.textContent;
      additionalDescription.textContent = additionalDesc; // Add this line
      // Apri il modal
      previewModal.show();

      // Impedisci la propagazione dell'evento click per evitare la chiusura immediata
      event.stopPropagation();
    });
  });

  // Aggiungi un event listener al documento per chiudere la modal quando si fa clic al di fuori di essa
  document.addEventListener('click', function () {
    previewModal.hide();
  });
});

// Ottieni l'elemento dell'immagine Senza Lattosio
var lactoseFreeImg = document.getElementById("lactose-lactose-free");

// Ottieni l'elemento della modalità di legenda
var modal = document.getElementById("lactose-modal");

// Quando l'utente clicca sull'immagine Senza Lattosio, mostra solo la modalità di legenda
lactoseFreeImg.onclick = function (event) {
  event.stopPropagation(); // Impedisci la propagazione dell'evento clic per evitare che venga gestito dall'elemento superiore
  modal.style.display = "block";
}

// Quando l'utente clicca sul pulsante di chiusura, nascondi la modalità di legenda
var closeBtn = document.getElementsByClassName("lactose-close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// Quando l'utente clicca al di fuori della modalità di legenda, chiudila
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}