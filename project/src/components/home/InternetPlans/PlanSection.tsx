import React from 'react';
import PlanCard from './PlanCard';
import { Cable, Radio } from 'lucide-react';

interface PlanSectionProps {
  title: string;
  description: string;
  plans: {
    name: string;
    speed: number;
    price: number;
    features: string[];
    highlighted?: boolean;
  }[];
  type: 'fiber' | 'radio';
}

export default function PlanSection({ title, description, plans, type }: PlanSectionProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          {type === 'fiber' ? (
            <Cable className="w-12 h-12 text-[#FF6B00]" />
          ) : (
            <Radio className="w-12 h-12 text-[#FF6B00]" />
          )}
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className={`h-1 w-24 ${type === 'fiber' ? 'bg-gradient-to-r from-[#FF6B00] to-blue-500' : 'bg-gradient-to-r from-[#FF6B00] to-gray-500'}`}></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className={`grid grid-cols-1 ${type === 'fiber' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-8`}>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            {...plan}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}