const slides = [
    {
        image: "https://images.unsplash.com/photo-1518870849940-AFD58F8c88a9?auto=format&fit=crop&w=800&q=80",
        title: "Conecte-se com o melhor da internet em Gameleiras!",
        subtitle: "Fibra óptica de alta velocidade para sua casa ou empresa"
    },
    {
        image: "https://images.unsplash.com/photo-1558756878-8c6DS74C3F5b?auto=format&fit=crop&w=800&q=80", // Ajuste esta URL se o ID estiver incorreto
        title: "Tecnologia de ponta para você",
        subtitle: "Navegue sem limites com nossa internet de alta performance"
    },
    {
        image: "https://images.unsplash.com/photo-1515369698047DS8d8k2L0aN7J?auto=format&fit=crop&w=800&q=80", // Ajuste esta URL se o ID estiver incorreto
        title: "Suporte técnico 24hrs",
        subtitle: "Estamos sempre prontos para te atender"
    }
];

domReady(() => {
  const carouselItems = document.querySelector('.carousel-items');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  
  if (!carouselItems || !prevButton || !nextButton) return;

  let currentSlide = 0;

  const createSlides = () => {
    slides.forEach((slide) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'carousel-item';
      slideElement.style.backgroundImage = `url(${slide.image})`;
      
      const content = document.createElement('div');
      content.className = 'carousel-content';
      content.innerHTML = `
        <div class="carousel-text">
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
          <div class="carousel-buttons">
            <a href="#planos" class="contact-button">Ver Planos</a>
            <a href="https://wa.me/553899999999" class="contact-button outline">
              Fale Conosco
            </a>
          </div>
        </div>
      `;
      
      slideElement.appendChild(content);
      carouselItems.appendChild(slideElement);
    });
  };

  const updateSlides = () => {
    if (carouselItems) {
      carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  };

  createSlides();
  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Auto-advance slides
  setInterval(nextSlide, 5000);
});
