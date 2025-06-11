import React from 'react';
import { MapPin, BarChart2, Briefcase, TrendingUp } from 'lucide-react';
import { services } from '../utils/data';

export const Services = () => {
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 40, className: "text-green-700 dark:text-green-500" };
    switch (iconName) {
      case 'Map': return <MapPin {...iconProps} />;
      case 'BarChart2': return <BarChart2 {...iconProps} />;
      case 'Building': return <Briefcase {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      default: return <MapPin {...iconProps} />;
    }
  };
  return (
    <section id="services" className="py-16 w-full bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We offer comprehensive services to meet all your property needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="mb-4 flex justify-center">{renderIcon(service.icon)}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
