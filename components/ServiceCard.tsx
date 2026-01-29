
import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <h4 className="text-lg font-bold text-blue-700 mb-2">{service.title}</h4>
      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.details.map((detail, index) => (
          <li key={index} className="flex items-start text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
