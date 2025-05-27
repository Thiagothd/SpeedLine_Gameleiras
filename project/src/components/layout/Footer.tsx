import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Wifi } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-[#FF6B00] text-3xl font-bold">S</span>
              <span className="text-white text-2xl font-semibold">peedline</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando Gameleiras com internet de alta velocidade e qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6B00]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B00]">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#FF6B00]" />
                <span>Gameleiras, MG</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#FF6B00]" />
                <span>(38) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#FF6B00]" />
                <span>contato@speedline.com.br</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Suporte 24/7</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Speed Line Internet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}