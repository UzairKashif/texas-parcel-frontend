import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PortalPage } from './pages/PortalPage';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';

export function App() {
  const { currentUser } = useAuth();
  const [page, setPage] = useState(currentUser ? 'portal' : 'home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const handleNavigate = (targetPage: string, propertyId?: string) => {
    if (propertyId) {
      setSelectedPropertyId(propertyId);
    } else {
      setSelectedPropertyId(null);
    }
    setPage(targetPage);
    window.scrollTo(0, 0);
  };
  
  React.useEffect(() => {
    if (currentUser) {
      // If user logs in, send to portal
      setPage('portal');
    } else {
      // If user logs out, only redirect if they are on a protected page
      if (page === 'portal' || page === 'property-details') {
        setPage('home');
      }
    }
  }, [currentUser]);

  const renderPage = () => {
    if (currentUser) {
        switch (page) {
            case 'portal':
                return <PortalPage onNavigate={handleNavigate} />;
            case 'property-details':
                if (selectedPropertyId) {
                    return <PropertyDetailsPage propertyId={selectedPropertyId} onNavigate={handleNavigate} />;
                }
                return <PortalPage onNavigate={handleNavigate} />; // Fallback
            default:
                return <PortalPage onNavigate={handleNavigate} />;
        }
    }

    switch (page) {
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'signup':
        return <SignUpPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      {page === 'home' && <Footer />}
    </div>
  );
}