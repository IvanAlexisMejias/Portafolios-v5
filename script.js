// JavaScript para agregar interactividad al portafolio

// Función para manejar el botón "Ver más" en los proyectos
const verMasButtons = document.querySelectorAll(".btn.toggle-more");

verMasButtons.forEach(button => {
  button.addEventListener("click", () => {
    const projectCard = button.closest(".project-card"); 
    const descripcionCompleta = projectCard.querySelector(".hidden-description");
    if (!descripcionCompleta) return; // Validación por si no encuentra la descripción
    const isExpanded = descripcionCompleta.classList.toggle("expanded");

    // Cambiar el texto del botón según el estado
    button.textContent = isExpanded ? "Ver menos" : "Ver más";
  });
});

// Animación de scroll suave para los enlaces del menú
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// Animación del fondo (líneas de neón moviéndose)
const neonLines = document.querySelectorAll(".neon-line");

function animateNeonLines() {
  neonLines.forEach(line => {
    const randomDelay = Math.random() * 5000; // Generar un delay aleatorio
    line.style.animationDelay = `${randomDelay}ms`;
  });
}

animateNeonLines(); // Inicializar animaciones

// Repetir las animaciones de las líneas de neón periódicamente
setInterval(animateNeonLines, 5000);

// Interactividad para las tecnologías (barras de progreso animadas)
const progressBars = document.querySelectorAll(".progress-bar");

function animateProgressBars() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-value");
    bar.style.width = `${value}%`;
  });
}

// Ejecutar las animaciones al cargar la página
window.addEventListener("load", () => {
  animateProgressBars();
});

// Función para agregar hover dinámico en las cards de los proyectos
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("hover-active");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("hover-active");
  });
});

// Validación por si los botones o contenedores no están disponibles en el DOM
if (!verMasButtons.length) {
  console.warn("No se encontraron botones 'Ver más'. Revisa el HTML.");
}

if (!neonLines.length) {
  console.warn("No se encontraron líneas de neón. Revisa el CSS o HTML.");
}

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");

  circles.forEach(circle => {
      const targetPercentage = circle.getAttribute("data-percentage");
      circle.style.setProperty("--target-percentage", targetPercentage);

      let currentPercentage = 0;
      const interval = setInterval(() => {
          if (currentPercentage >= targetPercentage) {
              clearInterval(interval);
          } else {
              currentPercentage++;
              circle.style.setProperty("--percentage", currentPercentage);
          }
      }, 15); // Velocidad de la animación
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".tech-bar");

  progressBars.forEach(bar => {
      const progressElement = bar.querySelector(".progress");
      const targetPercentage = parseInt(progressElement.getAttribute("data-percent")); // Obtener porcentaje desde data-percent
      let currentPercentage = 0;

      // Crear o reutilizar el elemento que muestra el porcentaje
      let percentageElement = bar.querySelector(".percentage");
      if (!percentageElement) {
          percentageElement = document.createElement("span");
          percentageElement.classList.add("percentage");
          bar.appendChild(percentageElement);
      }

      // Animar progresivamente
      const interval = setInterval(() => {
          if (currentPercentage >= targetPercentage) {
              clearInterval(interval); // Detener animación al alcanzar el porcentaje
          } else {
              currentPercentage++;
              progressElement.style.width = `${currentPercentage}%`; // Ajustar el ancho
              percentageElement.textContent = `${currentPercentage}%`; // Mostrar porcentaje
          }
      }, 40); // Velocidad de la animación
  });
});

document.querySelectorAll('.dropdown-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado
      window.open(this.href, '_blank'); // Abre el enlace en una nueva pestaña
})});