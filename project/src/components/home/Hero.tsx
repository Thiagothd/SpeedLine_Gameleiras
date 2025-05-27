import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Internet de Alta Velocidade em{' '}
            <span className="text-[#FF6B00]">Gameleiras</span>
          </h1>
          <p className="text-xl mb-8">
            Conecte-se com o melhor da internet fibra óptica. Velocidade e estabilidade
            para sua casa ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="bg-[#FF6B00] text-white px-8 py-3 rounded-full font-semibold 
                       flex items-center justify-center hover:bg-[#E65A00] transition-colors"
            >
              Ver Planos
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:+553899999999"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold
                       flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}