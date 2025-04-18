document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
};

let slideIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;

  function mostrarProximoSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(mostrarProximoSlide, 3000); // troca a cada 3 segundos
