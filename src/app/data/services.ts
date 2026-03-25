export interface ServiceOption {
  duration: string;
  price: string;
  description: string;
}

export interface ServiceCategory {
  name: string;
  subtitle?: string;
  options: ServiceOption[];
}

export const SERVICES: ServiceCategory[] = [
  {
    name: 'Foot Massage',
    options: [
      { duration: '30 Minutes', price: '$30', description: 'Foot massage' },
      {
        duration: '60 Minutes',
        price: '$50',
        description: '15 min Hand, Arm, Back and 45 min Foot',
      },
      { duration: '90 Minutes', price: '$70', description: '30 min Body and 60 min Foot' },
      { duration: '120 Minutes', price: '$90', description: '40 min Body and 80 min Foot' },
    ],
  },
  {
    name: 'Body Massage',
    options: [
      { duration: '30 Minutes', price: '$40', description: 'Neck, Back & Shoulder' },
      { duration: '60 Minutes', price: '$70', description: 'Whole Body' },
      { duration: '90 Minutes', price: '$100', description: 'Whole Body' },
    ],
  },
  {
    name: 'Combo Massage',
    subtitle: 'Half body and half foot',
    options: [
      { duration: '60 Minutes', price: '$60', description: '30 min Body and 30 min Foot' },
      { duration: '90 Minutes', price: '$80', description: '45 min Body and 45 min Foot' },
      { duration: '90 Minutes', price: '$100', description: '60 min Body and 30 min Foot' },
      { duration: '120 Minutes', price: '$120', description: '60 min Body and 60 min Foot' },
    ],
  },
];
