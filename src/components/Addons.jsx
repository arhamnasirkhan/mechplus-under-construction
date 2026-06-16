import React from 'react';

const Addons = () => {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-gutter">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-2">
            Customize Your Package
          </h2>
          <p className="text-on-surface-variant">Specific treatments for the most demanding vehicle owners.</p>
        </div>
        <div className="h-[2px] flex-grow bg-surface-container-high mx-8 hidden md:block"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300 reveal">
          <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
            lightbulb
          </span>
          <p className="font-label-md text-label-md text-primary">Headlight Restoration</p>
        </div>
        <div
          className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '100ms' }}
        >
          <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
            settings
          </span>
          <p className="font-label-md text-label-md text-primary">Engine Bay Cleaning</p>
        </div>
        <div
          className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '200ms' }}
        >
          <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
            layers
          </span>
          <p className="font-label-md text-label-md text-primary">Headliner Cleaning</p>
        </div>
        <div
          className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '300ms' }}
        >
          <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
            add_task
          </span>
          <p className="font-label-md text-label-md text-primary">Additional Premium Services</p>
        </div>
      </div>
    </section>
  );
};

export default Addons;
