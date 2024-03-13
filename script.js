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

//TODO: TESTARE SE FUNZIONA IL SHARE SU ANDROID

// Ottieni tutti gli elementi img all'interno di previewContent
const previewImages = document.querySelectorAll('#previewContent img');

// Aggiungi un evento di lungo tocco a ciascuna immagine nella modalità di anteprima
previewImages.forEach((image) => {
    image.addEventListener('touchstart', handleLongPress, false);
    image.addEventListener('mousedown', handleLongPress, false);
});

// Funzione per gestire il lungo tocco sull'immagine
function handleLongPress(event) {
    event.preventDefault(); // Evita il comportamento predefinito del lungo tocco

    // Prepara i dati da condividere
    const shareData = {
        title: 'Prodotto piccole cose dolci',
        text: 'Guarda questo incredibile prodotto della Pasticceria Piccole Cose Dolci di Moncalieri!',
        url: event.target.src
    };

    // Controlla se l'API Web Share è supportata dal browser
    if (navigator.share) {
        // Mostra il menu di condivisione del dispositivo
        navigator.share(shareData)
            .then(() => console.log('Contenuto condiviso con successo'))
            .catch((error) => console.error('Errore durante la condivisione:', error));
    } else {
        // Se l'API Web Share non è supportata, offri un'alternativa (ad esempio, mostra un prompt con le istruzioni per condividere manualmente)
        const sharePrompt = `Per condividere questa immagine, premi il pulsante Condividi e seleziona l'opzione Condividi immagine.`;
        alert(sharePrompt);
    }
}

