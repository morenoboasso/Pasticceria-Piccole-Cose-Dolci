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
    // Ottieni la data attuale
    var currentDate = new Date();

    // Seleziona tutte le sezioni
    var sections = document.querySelectorAll("section");

    // Calcola le differenze in millisecondi tra la data attuale e la data di ogni festività
    var differences = Array.from(sections).map(function (section) {
      // Estrai il mese e il giorno da ciascuna sezione
      var sectionDate = new Date(currentDate.getFullYear(), parseInt(section.dataset.date.substring(0, 2)) - 1, parseInt(section.dataset.date.substring(3, 5)));

      // Calcola la differenza in millisecondi tra le date
      var difference = sectionDate - currentDate;

      // Considera solo le differenze positive
      return difference > 0 ? difference : Infinity;
    });

    // Combina le sezioni con le rispettive differenze
    var sectionsWithDifferences = Array.from(sections).map(function (section, index) {
      return { section: section, difference: differences[index] };
    });

    // Ordina le sezioni in base alla differenza in millisecondi
    var sortedSections = sectionsWithDifferences.sort(function (a, b) {
      return a.difference - b.difference;
    }).map(function (item) {
      return item.section;
    });

    // Seleziona il contenitore delle sezioni
    var container = document.querySelector(".container");

    // Sostituisci le sezioni nell'ordine ordinato
    sortedSections.forEach(function (section) {
      container.appendChild(section);
    });
  });
