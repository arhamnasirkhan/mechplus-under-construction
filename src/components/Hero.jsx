import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero Background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6xCXDmK0O5hkj5ZILLvxsSUyIYOy5555x2yXrlh5B4n1RwynwZVO8j1PheQSiWMnurKGh-I8_K-K0V6dXlZfRLu7aiIQ46QPEQ_cQ-jYdPld_3FbZMOU-lCWbXUTGUVw9G6OAeeqEY3sB9FJgrFl8JyoRcBSktPJanj2ptmago5OxU5rzp4BOoD3cbceHTqXWRFTeCZww1w6FbMZbbFC2czMTx7jZ2FTW0EA6EWhrd4SvbYOuLb3PRX6yO4CDrc6Os5f1ZOOF3Bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full text-white">
        <div className="max-w-2xl reveal active md:mt-24">
          <span className="inline-block bg-secondary text-white font-label-md text-label-md px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
            Your Car Deserves The Best
          </span>
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg mb-6 leading-tight">
            Professional Automotive Detailing Services
          </h1>
          <p className="font-body-lg text-body-lg mb-10 text-on-primary/80">
            Premium interior and exterior vehicle care designed to restore, protect, and maintain your investment with engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="bg-secondary hover:bg-on-secondary-container text-white px-8 py-4 rounded-xl font-label-md text-label-md text-center transition-all flex items-center justify-center gap-2"
              href="#contact"
            >
              Request a Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-label-md text-label-md text-center transition-all flex items-center justify-center gap-2"
              href="tel:+13062511590"
            >
              <span className="material-symbols-outlined">call</span> Call Now
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified_user
              </span>
              <span className="font-label-md text-label-md">100% Hand Done</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                shield_with_heart
              </span>
              <span className="font-label-md text-label-md">Premium Quality Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                thumb_up
              </span>
              <span className="font-label-md text-label-md">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
