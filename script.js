    document.addEventListener("DOMContentLoaded", function () {
      var links = document.querySelectorAll(".navbar-nav a.nav-link");
      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = this.getAttribute("href");
        });
      });
    });
    

    document.addEventListener("DOMContentLoaded", function () {
      // Verifica se il cookie di accettazione è presente
      const cookieAccepted = localStorage.getItem("cookieAccepted");
    
      // Se il cookie non è stato accettato, mostra il banner
      if (!cookieAccepted) {
        const cookieBanner = document.createElement("div");
        cookieBanner.innerHTML = `
          <div class="cookie-banner text-white text-center py-2 bg-dark fixed-bottom">
            Questo sito utilizza i cookie per garantire una migliore esperienza di navigazione. 
            <button class="btn btn-success btn-sm ms-2" id="acceptCookie">Accetta</button>
            <button class="btn btn-danger btn-sm ms-2" id="rejectCookie">Rifiuta</button>
          </div>
        `;
    
        // Aggiungi il banner al corpo del documento
        document.body.appendChild(cookieBanner);
    
        // Aggiungi un listener al pulsante di accettazione dei cookie
        document.getElementById("acceptCookie").addEventListener("click", function () {
          // Nascondi il banner
          cookieBanner.style.display = "none";
    
          // Imposta il cookie di accettazione
          localStorage.setItem("cookieAccepted", true);
        });
    
        // Aggiungi un listener al pulsante di rifiuto dei cookie
        document.getElementById("rejectCookie").addEventListener("click", function () {
          // Nascondi il banner
          cookieBanner.style.display = "none";
    
          // Puoi fare ulteriori azioni qui se necessario
        });
      }
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
      
        const cardElements = document.querySelectorAll('.card-custom');
      
        cardElements.forEach((card, index) => {
          const image = card.querySelector('img');
          const title = card.querySelector('.card-title');
          const description = card.querySelector('.card-text-descr-custom');
      
          card.addEventListener('click', function (event) {
            // Aggiorna i contenuti nella modal con quelli della card cliccata
            previewImage.src = image.src;
            previewTitle.textContent = title.textContent;
            previewDescription.textContent = description.textContent;
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
      

    // Funzione per chiudere il popup
    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
  }

  // Verifica se è la prima visita utilizzando i cookie
  function isFirstVisit() {
      return document.cookie.indexOf('visited=true') === -1;
  }

  // Mostra il popup solo se è la prima visita
  if (isFirstVisit()) {
      document.getElementById('popup').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';

      // Imposta un cookie per indicare che il sito è stato visitato
      document.cookie = 'visited=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }

  