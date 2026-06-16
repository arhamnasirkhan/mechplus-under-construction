import React from 'react';

const Packages = () => {
  return (
    <section className="py-section-gap bg-surface-container-low" id="packages">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-4">
            Choose Your Level of Detailing
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Engineered packages for every vehicle's specific needs, from regular maintenance to full restoration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic Refresh */}
          <div className="bg-surface p-10 rounded-xl flex flex-col reveal shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Basic Refresh</h3>
            <p className="text-on-surface-variant text-sm mb-8">Entry Level Maintenance</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Hand Exterior Wash
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Light Interior Vacuum
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Windows &amp; Mirror Clean
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Wheel &amp; Tire Cleaning
              </li>
            </ul>
            <a
              className="w-full text-center py-3 border border-primary text-primary rounded-lg font-label-md hover:bg-primary hover:text-white transition-all"
              href="#contact"
            >
              Book Now
            </a>
          </div>

          {/* Premium Detail */}
          <div className="bg-primary p-10 rounded-xl flex flex-col reveal relative scale-105 z-10 shadow-xl border-t-4 border-secondary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[12px] font-bold tracking-widest uppercase">
              Most Popular
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white mb-2">Premium Detail</h3>
            <p className="text-white/60 text-sm mb-8">Comprehensive Restoration</p>
            <ul className="space-y-4 mb-10 flex-grow text-white">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Everything in Basic +
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Deep Interior Steam Clean
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Ceramic Paint Protectant
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Dashboard &amp; Trim Restorer
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Engine Bay Wipe-down
              </li>
            </ul>
            <a
              className="w-full text-center py-3 bg-secondary text-white rounded-lg font-label-md hover:bg-on-secondary-container transition-all"
              href="#contact"
            >
              Book Premium
            </a>
          </div>

          {/* Platinum Detail */}
          <div className="bg-surface p-10 rounded-xl flex flex-col reveal shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Platinum Detail</h3>
            <p className="text-on-surface-variant text-sm mb-8">Ultimate Protection</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Everything in Premium +
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Leather Conditioning
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Advanced UV Protection
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Pet Hair &amp; Stain Removal
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>Odor Neutralization
              </li>
            </ul>
            <a
              className="w-full text-center py-3 border border-primary text-primary rounded-lg font-label-md hover:bg-primary hover:text-white transition-all"
              href="#contact"
            >
              Select Platinum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
