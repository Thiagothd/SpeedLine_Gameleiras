import React from 'react';
import { Wifi, Check, Radio, Cable } from 'lucide-react';

interface PlanCardProps {
  name: string;
  speed: number;
  price: number;
  features: string[];
  highlighted?: boolean;
  type: 'fiber' | 'radio';
}

export default function PlanCard({
  name,
  speed,
  price,
  features,
  highlighted,
  type,
}: PlanCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 
                 ${highlighted ? 'border-2 border-[#FF6B00] relative' : ''}`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white px-4 py-1 rounded-full text-sm">
          Mais Popular
        </div>
      )}

      <div className="text-center mb-8">
        <div className="relative">
          {type === 'fiber' ? (
            <Cable className="w-16 h-16 text-[#FF6B00] mx-auto mb-4" />
          ) : (
            <Radio className="w-16 h-16 text-[#FF6B00] mx-auto mb-4" />
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="text-[#FF6B00] text-3xl font-bold">
          R$ {price.toFixed(2)}
          <span className="text-gray-500 text-lg font-normal">/mês</span>
        </div>
        <div className="text-gray-600 mt-2 flex items-center justify-center gap-2">
          <Wifi size={20} />
          <span>
            {speed} MB {type === 'fiber' ? 'Fibra' : 'Rádio'}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-[#FF6B00] mr-2" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/5538998642300?text=Olá! Gostaria de saber mais sobre o plano de internet."
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-[#FF6B00] text-white py-3 rounded-full
                 hover:bg-[#E65A00] transition-colors"
      >
        Assinar Agora
      </a>
    </div>
  );
}
