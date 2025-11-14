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

// Simple Cookie Banner with Consent Mode v2
document.addEventListener('DOMContentLoaded', function () {
  try {
    var stored = localStorage.getItem('pasticceria_consent');
    if (!stored) {
      var banner = document.createElement('div');
      banner.setAttribute('role', 'dialog');
      banner.setAttribute('aria-live', 'polite');
      banner.style.position = 'fixed';
      banner.style.bottom = '0';
      banner.style.left = '0';
      banner.style.right = '0';
      banner.style.zIndex = '9999';
      banner.style.background = '#ffd388';
      banner.style.color = '#000';
      banner.style.boxShadow = '0 -2px 8px rgba(0,0,0,0.15)';
      banner.style.padding = '12px 16px';

      banner.innerHTML = '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;justify-content:center">'
        + '<span style="font-size:14px;">Usiamo cookie per funzionalità, statistiche e annunci nel rispetto della tua privacy. </span>'
        + '<a href="cookie-policy.html" style="color:#000;text-decoration:underline;font-size:14px;">Scopri di più</a>'
        + '<div style="display:flex;gap:8px;">'
        +   '<button id="cookie-reject" class="btn btn-outline-dark btn-sm">Rifiuta</button>'
        +   '<button id="cookie-accept" class="btn btn-dark btn-sm">Accetta</button>'
        + '</div>'
        + '</div>';

      document.body.appendChild(banner);

      function updateConsent(granted) {
        try {
          if (typeof gtag === 'function') {
            gtag('consent', 'update', {
              'ad_storage': granted ? 'granted' : 'denied',
              'analytics_storage': granted ? 'granted' : 'denied',
              'ad_user_data': granted ? 'granted' : 'denied',
              'ad_personalization': granted ? 'granted' : 'denied',
              'functionality_storage': granted ? 'granted' : 'denied'
            });
          }
        } catch (e) {}
      }

      document.getElementById('cookie-accept').addEventListener('click', function () {
        localStorage.setItem('pasticceria_consent', 'granted');
        updateConsent(true);
        banner.remove();
      });
      document.getElementById('cookie-reject').addEventListener('click', function () {
        localStorage.setItem('pasticceria_consent', 'denied');
        updateConsent(false);
        banner.remove();
      });
    } else {
      // Restore consent state on subsequent page views
      if (stored === 'granted') {
        if (typeof gtag === 'function') {
          gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'functionality_storage': 'granted'
          });
        }
      }
    }
  } catch (e) {}
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

document.addEventListener('DOMContentLoaded', function () {
  const numImages = 34;
  const carouselInner = document.getElementById('carouselItems');
  const photoCounter = document.getElementById('photoCounter');
  const downloadSingleBtn = document.getElementById('downloadSingle'); // Pulsante per scaricare la singola foto

  for (let i = 1; i <= numImages; i++) {
    // Crea un div per ciascuna immagine
    const div = document.createElement('div');
    div.className = `carousel-item ${i === 1 ? 'active' : ''}`;

    // Crea l'immagine
    const img = document.createElement('img');
    img.src = `assets/30/img${i}.webp`;
    img.className = 'd-block mx-auto img-fluid 30ANNI-img'; // Aggiunge la classe personalizzata
    img.alt = `30 Anni - Immagine ${i}`;

    // Aggiungi l'immagine al div
    div.appendChild(img);

    // Aggiungi il div al carosello
    carouselInner.appendChild(div);
  }

  // Funzionalità di scaricamento "Scarica tutte"
  const downloadAllBtn = document.getElementById('downloadAll');
  downloadAllBtn.addEventListener('click', function () {
    const zip = new JSZip(); // Assicurati di aver caricato JSZip
    let count = 0;

    for (let i = 1; i <= numImages; i++) {
      const url = `assets/30/img${i}.webp`;
      const filename = `img${i}.jpeg`;

      // Aggiungi le immagini al file ZIP
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          throw err; // Gestione errore
        }
        zip.file(filename, data, { binary: true });
        count++;

        if (count === numImages) {
          zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, 'foto 30 anni - Unzippami!.zip'); // Scarica il file ZIP
          });
        }
      });
    }
  });

  // Aggiorna il contatore e il pulsante di scaricamento quando la diapositiva cambia
  const carousel = document.getElementById('carousel30anni');
  carousel.addEventListener('slide.bs.carousel', function (event) {
    const currentIndex = event.to + 1; // `to` è l'indice della prossima diapositiva, quindi aggiungiamo 1
    photoCounter.textContent = `${currentIndex} di ${numImages}`;
    
    // Aggiorna il link del pulsante di download per l'immagine corrente
    const currentImgSrc = `assets/30/img${currentIndex}.webp`;
    downloadSingleBtn.href = currentImgSrc;
    downloadSingleBtn.download = `img${currentIndex}.jpeg`;
  });
});
