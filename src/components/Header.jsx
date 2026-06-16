import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
