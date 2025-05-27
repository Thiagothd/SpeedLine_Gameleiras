const fiberPlans = [
  {
    name: "Fibra Start",
    speed: 100,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps"
    ]
  },
  {
    name: "Fibra Plus",
    speed: 200,
    price: 119.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 200 Mbps",
      "Upload 100 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Fibra Ultra",
    speed: 300,
    price: 149.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 300 Mbps",
      "Upload 150 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  },
  {
    name: "Fibra Max",
    speed: 400,
    price: 199.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 400 Mbps",
      "Upload 200 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento",
      "Atendimento VIP"
    ]
  }
];

const radioPlans = [
  {
    name: "Rádio Basic",
    speed: 10,
    price: 69.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 10 Mbps",
      "Upload 5 Mbps"
    ]
  },
  {
    name: "Rádio Plus",
    speed: 15,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 15 Mbps",
      "Upload 7 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Rádio Pro",
    speed: 20,
    price: 109.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 20 Mbps",
      "Upload 10 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  }
];

domReady(() => {
  const fiberPlansContainer = document.querySelector('.fiber-plans');
  const radioPlansContainer = document.querySelector('.radio-plans');
  
  if (!fiberPlansContainer || !radioPlansContainer) return;

  const createPlanCard = (plan, type) => {
    const card = document.createElement('div');
    card.className = `plan-card ${plan.highlighted ? 'highlighted' : ''}`;
    
    card.innerHTML = `
      <div class="plan-icon-wrapper">
        <span class="plan-icon">${type === 'fiber' ? '🔌' : '📡'}</span>
      </div>
      <h3 class="plan-name">${plan.name}</h3>
      <div class="plan-price">
        ${formatCurrency(plan.price)}<span>/mês</span>
      </div>
      <div class="speed-info">
        <span class="speed-icon">⚡</span>
        <span>${plan.speed} Mega ${type === 'fiber' ? 'Fibra' : 'Rádio'}</span>
      </div>
      <ul class="plan-features">
        ${plan.features.map(feature => `
          <li>
            <span class="check-icon">✓</span>
            ${feature}
          </li>
        `).join('')}
      </ul>
      <a href="https://wa.me/553899999999?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}." 
         class="plan-button" target="_blank" rel="noopener noreferrer">
        Assinar Agora
      </a>
    `;
    
    return card;
  };

  // Render fiber plans
  fiberPlans.forEach(plan => {
    fiberPlansContainer.appendChild(createPlanCard(plan, 'fiber'));
  });
  
  // Render radio plans
  radioPlans.forEach(plan => {
    radioPlansContainer.appendChild(createPlanCard(plan, 'radio'));
  });
});