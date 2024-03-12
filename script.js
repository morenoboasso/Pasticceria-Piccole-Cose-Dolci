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

  // Al momento, la nuvoletta non fa nulla quando viene cliccata
  document.getElementById('chatBotContainer').addEventListener('click', function() {

});

