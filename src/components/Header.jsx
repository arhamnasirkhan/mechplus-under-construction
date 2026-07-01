import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img
            alt="MechPlus Logo"
            className="h-12 md:h-14 w-auto"
            src="/logo.png"
          />
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="nav-link relative font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-300"
            href="#services"
          >
            Services
          </a>
          <a
            className="nav-link relative font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-300"
            href="#packages"
          >
            Packages
          </a>
          <a
            className="nav-link relative font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-300"
            href="#process"
          >
            Process
          </a>
          <a
            className="nav-link relative font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-300"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 duration-200"
            href="#contact"
          >
            Request Quote
          </a>
        </nav>
        <button 
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/30 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <a
            className="font-label-lg text-label-lg text-on-surface hover:text-secondary transition-colors"
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface hover:text-secondary transition-colors"
            href="#packages"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Packages
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface hover:text-secondary transition-colors"
            href="#process"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Process
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface hover:text-secondary transition-colors"
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 duration-200 mt-2"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
