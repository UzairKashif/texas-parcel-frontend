import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import { Property } from '../types';
import { PropertyCarousel } from './PropertyCarousel';

type PortalPropertyCardProps = {
  property: Property;
  onViewDetails: (id: string) => void;
};

export const PortalPropertyCard = ({ property, onViewDetails }: PortalPropertyCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="h-56">
        <PropertyCarousel images={property.images} />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{property.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 truncate">{property.description}</p>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPin size={18} className="mr-2" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400 font-bold text-xl mb-4">
          <DollarSign size={20} className="mr-1" />
          <span>{property.price.toLocaleString()}</span>
        </div>
        <button 
          onClick={() => onViewDetails(property.id)}
          className="w-full bg-[#002f45] text-white py-2 rounded-md hover:bg-[#002f45]/90 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};