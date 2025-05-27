import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
    title: 'Conecte-se com o melhor da internet em Gameleiras!',
    subtitle: 'Fibra óptica de alta velocidade para sua casa ou empresa',
  },
  {
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
    title: 'Tecnologia de ponta para você',
    subtitle: 'Navegue sem limites com nossa internet de alta performance',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551636898-47668aa61de2?auto=format&fit=crop&q=80&w=1920',
    title: 'Suporte técnico 24hrs',
    subtitle: 'Estamos sempre prontos para te atender',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 text-white">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#planos"
                    className="bg-[#FF6B00] text-white px-8 py-3 rounded-full font-semibold 
                             flex items-center justify-center hover:bg-[#E65A00] transition-colors"
                  >
                    Ver Planos
                  </a>
                  <a
                    href="https://wa.me/553899999999"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold
                             flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full
                 hover:bg-black/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full
                 hover:bg-black/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
