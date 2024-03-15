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

document.addEventListener('DOMContentLoaded', function () {
  // Ottieni l'elemento dell'immagine Senza Lattosio
  var lactoseFreeImg = document.getElementById("lactose-lactose-free");

  // Ottieni l'elemento della modalità di legenda
  var modal = document.getElementById("lactose-modal");

  // Quando l'utente clicca sull'immagine Senza Lattosio, mostra solo la modalità di legenda
  lactoseFreeImg.addEventListener('click', function (event) {
    event.stopPropagation(); // Impedisci la propagazione dell'evento clic per evitare che venga gestito dall'elemento superiore
    modal.style.display = "block";
  }); 


  // Assicurati che l'elemento con la classe "lactose-close" esista prima di tentare di assegnare l'evento onclick
  var closeBtn = document.querySelector(".lactose-close");
  if (closeBtn) {
    // Quando l'utente clicca sul pulsante di chiusura, nascondi la modalità di legenda
    closeBtn.addEventListener('click', function (){
      modal.style.display = "none";
    }
)}

  // Quando l'utente clicca al di fuori della modalità di legenda, chiudila
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

// Lazy loading delle immagini
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
  
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback per i browser che non supportano IntersectionObserver
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
        });
    }
});

// Comprimi le immagini prima del caricamento
function compressImage(file, maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(event) {
            let img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    } 
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob(blob => resolve(blob), file.type, quality);
            };
            img.onerror = function(error) {
                reject(error);
            };
        };
    });
}
