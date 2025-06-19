import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { PortalPropertyCard } from '../components/PortalPropertyCard';
import { Property } from '../types';

type PortalPageProps = {
  onNavigate: (page: string, propertyId?: string) => void;
};

export const PortalPage = ({ onNavigate }: PortalPageProps) => {
  const { currentUser, logout } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProperties = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "properties"));
            const propertiesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Property));
            setProperties(propertiesList);
        } catch (error) {
            console.error("Error fetching properties: ", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProperties();
  }, []);
  
  const handleViewDetails = (id: string) => {
      onNavigate('property-details', id);
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
          <div className="text-left">
             <h1 className="text-4xl font-bold">Welcome to the Portal</h1>
             {currentUser && <p className="mt-2 text-gray-500 dark:text-gray-400">Logged in as: {currentUser.email}</p>}
          </div>
          <button 
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Logout
          </button>
      </div>
      
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
                <PortalPropertyCard key={property.id} property={property} onViewDetails={handleViewDetails} />
            ))}
        </div>
      )}
    </div>
  );
};