let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  // Reset slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Reset dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Adjust slideIndex
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide and dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;

  // Set timeout for next slide
  setTimeout(showSlides, 3000); // 3000ms = 3 seconds
}
