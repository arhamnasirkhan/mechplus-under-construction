import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Michael T.',
    text: "Absolutely incredible service. They took my 5-year-old SUV and made it look like it just rolled off the showroom floor. The attention to detail is unmatched.",
    service: 'Premium Detail'
  },
  {
    id: 2,
    name: 'Sarah L.',
    text: "Professional, punctual, and meticulous. The ceramic coating they applied gave my car a glass-like finish. I highly recommend MechPlus to anyone who loves their car.",
    service: 'Platinum Detail'
  },
  {
    id: 3,
    name: 'David R.',
    text: "I've tried several detailing spots in Saskatoon, but none compare to this. The interior was spotless and smelled amazing. Worth every penny.",
    service: 'Interior Restoration'
  }
];

const Reviews = () => {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-gutter relative overflow-hidden" id="reviews">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-secondary/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-surface-container-high text-primary font-label-md text-label-md px-4 py-1 rounded-full mb-4 tracking-widest uppercase border border-outline-variant">
            Customer Reviews
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Don't just take our word for it. Read how we've transformed vehicles and exceeded expectations for car owners across Saskatoon.
          </p>
        </div>

        {/* Carousel / Grid container */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-gutter px-gutter md:mx-0 md:px-0">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card p-8 rounded-2xl flex flex-col snap-center min-w-[85vw] md:min-w-0 reveal relative group hover:border-secondary transition-all duration-300">
              
              {/* Quote icon background */}
              <span className="material-symbols-outlined absolute top-6 right-6 text-primary/5 text-6xl select-none pointer-events-none" style={{ fontVariationSettings: '"FILL" 1' }}>
                format_quote
              </span>

              <div className="flex gap-1 mb-6 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              
              <p className="text-on-surface font-body-lg mb-8 flex-grow italic relative z-10">
                "{review.text}"
              </p>
              
              <div className="mt-auto border-t border-outline-variant pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-label-lg text-primary">{review.name}</h4>
                  <p className="font-label-sm text-on-surface-variant">{review.service}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-label-lg select-none">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
