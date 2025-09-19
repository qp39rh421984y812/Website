import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="relative z-10 w-full py-6 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 drop-shadow-glow">
              APTutor's
            </h1>
          </Link>
          
          <nav className="flex space-x-4 md:space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-all duration-300 hover:text-gold relative ${
                location.pathname === '/' ? 'text-gold' : 'text-foreground'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === '/' ? 'after:scale-x-100' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`text-lg font-medium transition-all duration-300 hover:text-gold relative ${
                location.pathname === '/pricing' ? 'text-gold' : 'text-foreground'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === '/pricing' ? 'after:scale-x-100' : ''
              }`}
            >
              Pricing
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;