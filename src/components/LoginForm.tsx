import React from 'react';
import { Mail, Lock } from 'lucide-react';

export const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
          <Mail size={20} className="text-gray-400 dark:text-gray-500 mr-2" />
          <input type="email" required className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-gray-200 font-light" placeholder="Email address" />
        </div>
        <div className="flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
          <Lock size={20} className="text-gray-400 dark:text-gray-500 mr-2" />
          <input type="password" required className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-gray-200 font-light" placeholder="Password" />
        </div>
      </div>
      <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#002f45] hover:bg-[#002f45]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e3a750] transition-colors duration-300">Sign in</button>
    </form>
  );
};
