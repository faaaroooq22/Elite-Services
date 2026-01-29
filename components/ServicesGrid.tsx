import React from 'react';
import { ServiceCategory } from '../types.ts';
import ServiceCard from './ServiceCard.tsx';

interface ServicesGridProps {
  category: ServiceCategory;
  id?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ category, id }) => {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {category.title}
        </h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-xl text-gray-500">
          {category.subtitle}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;