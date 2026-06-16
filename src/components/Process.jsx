import React from 'react';

const Process = () => {
  return (
    <section className="py-section-gap bg-primary text-white overflow-hidden" id="process">
      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg mb-4">Our Process</h2>
          <p className="text-white/60">A methodical approach to achieving engineering excellence.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-secondary/30 hidden md:block"></div>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full reveal">
              <div className="md:w-5/12 text-center md:text-right">
                <h4 className="font-headline-sm text-headline-sm mb-2">1. Vehicle Assessment</h4>
                <p className="text-white/70">A full inspection to identify paint defects and interior specificities.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary border-4 border-primary z-10 flex items-center justify-center my-4 md:my-0">
                <span className="material-symbols-outlined text-white">search</span>
              </div>
              <div className="md:w-5/12"></div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full reveal">
              <div className="md:w-5/12 text-center md:text-left">
                <h4 className="font-headline-sm text-headline-sm mb-2">2. Professional Detailing</h4>
                <p className="text-white/70">Multi-stage cleaning using state-of-the-art specialized equipment.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary border-4 border-primary z-10 flex items-center justify-center my-4 md:my-0">
                <span className="material-symbols-outlined text-white">cleaning_services</span>
              </div>
              <div className="md:w-5/12"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full reveal">
              <div className="md:w-5/12 text-center md:text-right">
                <h4 className="font-headline-sm text-headline-sm mb-2">3. Protection &amp; Finishing</h4>
                <p className="text-white/70">Applying long-lasting protective coatings to all treated surfaces.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary border-4 border-primary z-10 flex items-center justify-center my-4 md:my-0">
                <span className="material-symbols-outlined text-white">shield</span>
              </div>
              <div className="md:w-5/12"></div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full reveal">
              <div className="md:w-5/12 text-center md:text-left">
                <h4 className="font-headline-sm text-headline-sm mb-2">4. Final Quality Inspection</h4>
                <p className="text-white/70">Rigorous quality check before handing the keys back to you.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary border-4 border-primary z-10 flex items-center justify-center my-4 md:my-0">
                <span className="material-symbols-outlined text-white">done_all</span>
              </div>
              <div className="md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
