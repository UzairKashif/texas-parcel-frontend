import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedListings } from '../components/FeaturedListings';
import { Services } from '../components/Services';
import { AIFeatures } from '../components/AIFeatures';
import { AboutSection } from '../components/AboutSection';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <Services />
      <AIFeatures />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </>
  );
};