import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { AuthMap } from '../components/AuthMap';
import { useAuth } from '../contexts/AuthContext';

type SignUpPageProps = {
  onNavigate: (page: string) => void;
};

const GoogleIcon = () => (
    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-5 w-5" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.223 0-9.64-3.657-11.303-8.5H6.306C9.656 39.663 16.318 44 24 44z"></path>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.999 35.596 44 30.165 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);
  
export const SignUpPage = ({ onNavigate }: SignUpPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
        return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
       // Navigation will be handled by the App component
    } catch {
      setError('Failed to create an account. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <div className="h-[calc(100vh-64px)] flex flex-col lg:flex-row overflow-hidden">
        {/* Left column: sign-up form */}
        <section className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-6">
              <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight text-white tracking-tighter">
                Create your account
              </h1>
              <p className="animate-element animate-delay-200 text-zinc-400">
                Join our community to start finding the best land deals.
              </p>

              {error && <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md text-sm">{error}</div>}
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="animate-element animate-delay-300">
                  <label className="text-sm font-medium text-zinc-400">Full Name</label>
                  <div className="glass-border rounded-2xl mt-2">
                    <input type="text" placeholder="Enter your full name" className="w-full bg-transparent text-sm p-4 rounded-2xl" />
                  </div>
                </div>
                <div className="animate-element animate-delay-400">
                  <label className="text-sm font-medium text-zinc-400">Email Address</label>
                  <div className="glass-border rounded-2xl mt-2">
                    <input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent text-sm p-4 rounded-2xl" />
                  </div>
                </div>
                <div className="animate-element animate-delay-500">
                  <label className="text-sm font-medium text-zinc-400">Password</label>
                  <div className="glass-border rounded-2xl mt-2 relative">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Create a password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl" />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center">
                      {isPasswordVisible ? (
                        <EyeOff className="w-5 h-5 stroke-zinc-500 hover:stroke-zinc-300 transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 stroke-zinc-500 hover:stroke-zinc-300 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
                 <div className="animate-element animate-delay-500">
                  <label className="text-sm font-medium text-zinc-400">Confirm Password</label>
                  <div className="glass-border rounded-2xl mt-2 relative">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Confirm your password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl" />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="animate-element animate-delay-600 w-full rounded-2xl bg-white py-4 font-medium text-zinc-900 hover:bg-zinc-200 transition-colors disabled:opacity-50">
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <div className="animate-element animate-delay-700 relative flex items-center justify-center">
                <span className="w-full border-t border-zinc-800"></span>
                <span className="px-4 text-sm text-zinc-500 bg-zinc-950 absolute">Or</span>
              </div>
              
              <button className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 glass-border rounded-2xl py-4 hover:bg-zinc-900/30 transition-colors">
                <GoogleIcon />
                Continue with Google
              </button>
              
              <p className="animate-element animate-delay-900 text-center text-sm text-zinc-500">
                Already have an account? 
                <button onClick={() => onNavigate('login')} className="text-violet-400 hover:underline transition-colors ml-1">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </section>
        
        {/* Right column: map */}
        <AuthMap />
      </div>
    </div>
  );
};
