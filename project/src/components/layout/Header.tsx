import React from 'react';
import { scrollToElement } from '../../utils/scroll';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-[#FF6B00] text-3xl font-bold">S</span>
            <span className="text-gray-800 text-2xl font-semibold">peedline</span>
          </div>
          <span className="text-gray-600 text-sm">INTERNET</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToElement('inicio')}
            className="text-gray-700 hover:text-[#FF6B00] transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToElement('planos')}
            className="text-gray-700 hover:text-[#FF6B00] transition-colors"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToElement('sobre')}
            className="text-gray-700 hover:text-[#FF6B00] transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToElement('contato')}
            className="text-gray-700 hover:text-[#FF6B00] transition-colors"
          >
            Contato
          </button>
          <a 
            href="https://wa.me/5538998642300"
            className="bg-[#FF6B00] text-white px-6 py-2 rounded-full hover:bg-[#E65A00] transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </nav>
    </header>
  );
}