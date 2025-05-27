import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Há anos conectando Gameleiras com qualidade e compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
            <p className="text-gray-600 mb-6">
              A Speed Line nasceu do sonho de levar internet de qualidade para Gameleiras e região.
              Desde nossa fundação, trabalhamos incansavelmente para expandir nossa rede e melhorar
              nossos serviços, sempre com o compromisso de oferecer a melhor experiência aos nossos clientes.
            </p>
            <p className="text-gray-600">
              Hoje, somos referência em conectividade na região, oferecendo soluções de internet
              via fibra óptica com tecnologia de ponta e suporte técnico especializado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Qualidade</h4>
              <p className="text-gray-600">Internet estável e veloz</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Clientes</h4>
              <p className="text-gray-600">Milhares de conexões ativas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Suporte 24/7</h4>
              <p className="text-gray-600">Sempre prontos para ajudar</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Segurança</h4>
              <p className="text-gray-600">Conexão protegida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}