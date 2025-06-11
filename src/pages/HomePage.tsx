import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedListings } from '../components/FeaturedListings';
import { Services } from '../components/Services';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <Services />
    </>
  );
};
