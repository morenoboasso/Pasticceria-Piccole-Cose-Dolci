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
    