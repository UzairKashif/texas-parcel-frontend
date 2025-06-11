import React, { useState } from 'react';
import { Menu, X, Phone, UserCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type HeaderProps = {
  onNavigate: (page: string) => void;
};

export const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-[#002f45] dark:text-white">
          Texas Parcels
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Home</button>
          <a href="#properties" className="text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Properties</a>
          <a href="#services" className="text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Services</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => handleNavClick('login')} className="flex items-center px-4 py-2 rounded-md bg-[#002f45] text-white hover:bg-[#002f45]/90 transition-colors duration-300">
            <UserCircle size={18} className="mr-2" />
            Login
          </button>
        </div>

        <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => handleNavClick('home')} className="text-left text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Home</button>
            <a href="#properties" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Properties</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#002f45] dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Services</a>
            <hr className="border-gray-200 dark:border-gray-700"/>
            <button onClick={() => handleNavClick('login')} className="flex items-center justify-center px-4 py-2 rounded-md bg-[#002f45] text-white hover:bg-[#002f45]/90 transition-colors duration-300">
              <UserCircle size={18} className="mr-2" />
              Login
            </button>
             <button onClick={toggleTheme} className="flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 transition-colors">
                {theme === 'light' ? <Moon size={20} className="mr-2"/> : <Sun size={20} className="mr-2"/>}
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
