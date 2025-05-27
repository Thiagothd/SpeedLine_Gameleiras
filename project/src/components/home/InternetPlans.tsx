import React from 'react';
import { Wifi, Check, Radio } from 'lucide-react';

const fiberPlans = [
  {
    speed: 100,
    price: 75.0,
    features: ['Wi-Fi Grátis', 'Instalação Gratuita', 'Suporte 24/7'],
  },
  {
    speed: 200,
    price: 90.0,
    features: [
      'Wi-Fi Grátis',
      'Instalação Gratuita',
      'Suporte 24hr',
      'IP Fixo',
    ],
  },
  {
    speed: 300,
    price: 110.0,
    features: [
      'Wi-Fi Grátis',
      'Instalação Gratuita',
      'Suporte 24hrs',
      'IP Fixo',
      'Prioridade no Atendimento',
    ],
  },
  {
    speed: 500,
    price: 150.0,
    features: [
      'Wi-Fi Grátis',
      'Instalação Gratuita',
      'Suporte 24hr',
      'IP Fixo',
      'Backup de Conexão',
    ],
  },
];

const radioPlans = [
  {
    speed: 30,
    price: 75.0,
    features: ['Suporte 24/7', 'Instalação Gratuita', 'Cobertura Ampliada'],
  },
  {
    speed: 50,
    price: 90.0,
    features: ['Suporte 24/7', 'Instalação Gratuita', 'Cobertura Ampliada'],
  },
  {
    speed: 80,
    price: 110.0,
    features: ['Suporte 24/7', 'Instalação Gratuita', 'Cobertura Ampliada'],
  },
];

export default function InternetPlans() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para você. Seja fibra óptica de alta
            velocidade ou rádio para áreas remotas, temos a solução perfeita.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#FF6B00] mb-8">
            Planos via Fibra Óptica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {fiberPlans.map((plan) => (
              <div
                key={plan.speed}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-8">
                  <Wifi className="w-16 h-16 text-[#FF6B00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.speed} MEGA</h3>
                  <div className="text-[#FF6B00] text-3xl font-bold">
                    R$ {plan.price.toFixed(2)}
                    <span className="text-gray-500 text-lg font-normal">
                      /mês
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-[#FF6B00] mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/553899999999"
                  className="block text-center bg-[#FF6B00] text-white py-3 rounded-full
                           hover:bg-[#E65A00] transition-colors"
                >
                  Assinar Agora
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#FF6B00] mb-8">
            Planos via Rádio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {radioPlans.map((plan) => (
              <div
                key={plan.speed}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-8">
                  <Radio className="w-16 h-16 text-[#FF6B00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.speed} MEGA</h3>
                  <div className="text-[#FF6B00] text-3xl font-bold">
                    R$ {plan.price.toFixed(2)}
                    <span className="text-gray-500 text-lg font-normal">
                      /mês
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-[#FF6B00] mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/553899999999"
                  className="block text-center bg-[#FF6B00] text-white py-3 rounded-full
                           hover:bg-[#E65A00] transition-colors"
                >
                  Assinar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
