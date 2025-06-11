import React from 'react';

export const Footer = () => (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Texas Parcels</h3>
            <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect land for your needs. We specialize in connecting buyers with premium land opportunities nationwide.
            </p>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Texas Parcels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
);
