import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Property } from '../types';
import { ArrowLeft, DollarSign, MapPin } from 'lucide-react';
import { PropertyCarousel } from '../components/PropertyCarousel';

type PropertyDetailsPageProps = {
  propertyId: string;
  onNavigate: (page: string) => void;
};

export const PropertyDetailsPage = ({ propertyId, onNavigate }: PropertyDetailsPageProps) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const docRef = doc(db, 'properties', propertyId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProperty({ id: docSnap.id, ...docSnap.data() } as Property);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) {
    return <div className="container mx-auto p-8 text-center text-2xl font-semibold">Loading Property...</div>;
  }

  if (!property) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <button onClick={() => onNavigate('portal')} className="mt-4 text-blue-500 hover:underline">
          Back to Portal
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <button 
        onClick={() => onNavigate('portal')} 
        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Listings
      </button>
      
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-8">
        <PropertyCarousel images={property.images} />
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center text-xl text-gray-500 dark:text-gray-400 mb-6">
          <MapPin size={22} className="mr-2" />
          <span>{property.location}</span>
        </div>
        <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-8 flex items-center">
            <DollarSign size={40} className="mr-2"/>
            {property.price.toLocaleString()}
        </div>
        
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Details</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{property.description}</p>
        
      </div>
    </div>
  );
};