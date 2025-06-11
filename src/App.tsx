import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

export function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (targetPage: string) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
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
    <ThemeProvider>
      <div className="flex flex-col min-h-screen w-full bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Header onNavigate={handleNavigate} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        {/* Conditionally render the Footer only on the home page */}
        {page === 'home' && <Footer />}
      </div>
    </ThemeProvider>
  );
}