let slideIndex = 1; // Inicializa o índice com 1 (primeiro slide)

// Exibe o slide inicial ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex); // Mostra o primeiro slide
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  // Ajusta o índice para permanecer no intervalo
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe "active" de todos os dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra o slide atual e adiciona a classe "active" ao dot correspondente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Atualiza o texto do caption, se disponível
  if (captionText) {
    captionText.innerHTML = dots[slideIndex - 1].alt || "";
  }
}
