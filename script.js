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
  
  // Ottieni l'URL dell'immagine
  const imageUrl = event.target.src;

  // Prepara i dati da condividere
  const customMessage = "Guarda cosa ho trovato sul sito: https://morenoboasso.github.io/Pasticceria-Piccole-Cose-Dolci";

  // Crea un'anteprima dell'immagine
  const imagePreview = document.createElement('img');
  imagePreview.src = imageUrl;
  imagePreview.style.maxWidth = '100%'; // Imposta la larghezza massima al 100% della finestra modale

  // Crea una finestra modale per mostrare l'anteprima dell'immagine
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.appendChild(imagePreview);

  // Aggiungi la finestra modale al documento
  document.body.appendChild(modal);

  // Funzione per chiudere la finestra modale quando l'utente tocca fuori dall'anteprima dell'immagine
  function closeModal() {
    document.body.removeChild(modal);
  }

  // Aggiungi un evento di click alla finestra modale per chiuderla quando l'utente tocca fuori dall'anteprima dell'immagine
  modal.addEventListener('click', closeModal);

  // Condividi l'anteprima dell'immagine e il messaggio personalizzato
  const shareData = {
    title: 'Piccole Cose Dolci',
    text: `${customMessage}`,
  };

  // Controlla se l'API Web Share è supportata dal browser
  if (navigator.share) {
    // Mostra il menu di condivisione del dispositivo
    navigator.share(shareData)
      .then(() => console.log('Contenuto condiviso con successo'))
      .catch((error) => console.error('Errore durante la condivisione:', error))
      .finally(closeModal); // Chiudi la finestra modale dopo la condivisione
  } else {
    // L'API Web Share non è supportata
    // Puoi offrire un'alternativa qui se necessario
    closeModal(); // Chiudi la finestra modale
  }
}
