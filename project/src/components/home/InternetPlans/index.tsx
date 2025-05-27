import React from 'react';
import PlanSection from './PlanSection';

const fiberPlans = [
  {
    name: "Fibra 100 MB",
    speed: 100,
    price: 75.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps"
    ],
    highlighted: true // exemplo: torna o mais popular
  },
  {
    name: "Fibra 200 MB",
    speed: 200,
    price: 90.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 200 Mbps",
      "Upload 100 Mbps"
    ]
  },
  {
    name: "Fibra 400 MB",
    speed: 400,
    price: 150.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 400 Mbps",
      "Upload 200 Mbps",
      "IP Fixo"
    ]
  },
  {
    name: "Fibra 600 MB",
    speed: 600,
    price: 200.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 600 Mbps",
      "Upload 300 Mbps",
      "IP Fixo",
      "Atendimento VIP"
    ]
  }
];

const radioPlans = [
  {
    name: "Rádio 30 MB",
    speed: 30,
    price: 75.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 30 Mbps",
      "Upload 15 Mbps"
    ]
  },
  {
    name: "Rádio 50 MB",
    speed: 50,
    price: 90.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 50 Mbps",
      "Upload 25 Mbps"
    ]
  },
  {
    name: "Rádio 100 MB",
    speed: 100,
    price: 150.00,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps",
      "IP Fixo"
    ]
  }
];

export default function InternetPlans() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para você. Todos com qualidade e velocidade garantida.
          </p>
        </div>

        <PlanSection
          title="Planos Fibra Óptica"
          description="Internet ultra veloz com fibra óptica de ponta a ponta, ideal para streaming, jogos e home office"
          plans={fiberPlans}
          type="fiber"
        />

        <PlanSection
          title="Planos Via Rádio"
          description="Conexão estável para regiões mais distantes, perfeita para áreas rurais e locais sem cobertura de fibra"
          plans={radioPlans}
          type="radio"
        />
      </div>
    </section>
  );
}
