import React from 'react';
import { PropertyCard } from './PropertyCard';
import { properties } from '../utils/data';

export const FeaturedListings = () => (
    <section id="properties" className="py-16 bg-gray-50 dark:bg-slate-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Properties</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Discover our handpicked selection of premium land opportunities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map((property) => <PropertyCard key={property.id} {...property} />)}
        </div>
      </div>
    </section>
);
