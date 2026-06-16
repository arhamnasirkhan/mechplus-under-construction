import React from 'react';

const Services = () => {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto" id="services">
      <div className="text-center mb-16 reveal">
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-4">
          Why MechPlus
        </h2>
        <div className="h-1 w-20 bg-secondary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-xl reveal hover:border-secondary transition-all duration-300">
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl">workspace_premium</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-4">Premium Quality</h3>
          <p className="text-on-surface-variant font-body-md">
            We use only the world's leading chemical compounds and waxes to ensure a showroom finish every time.
          </p>
        </div>
        <div
          className="glass-card p-8 rounded-xl reveal hover:border-secondary transition-all duration-300"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl">engineering</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-4">Professional Techniques</h3>
          <p className="text-on-surface-variant font-body-md">
            Our detailers are trained in advanced polishing and cleaning techniques derived from elite automotive engineering.
          </p>
        </div>
        <div
          className="glass-card p-8 rounded-xl reveal hover:border-secondary transition-all duration-300"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl">zoom_in</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-4">Attention To Detail</h3>
          <p className="text-on-surface-variant font-body-md">
            We don't just wash cars; we scrutinize every square inch to ensure absolute perfection before handover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
