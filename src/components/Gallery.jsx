import React from 'react';

const Gallery = () => {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto" id="gallery">
      <div className="text-center mb-16 reveal">
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-4">
          Masterpiece Results
        </h2>
        <p className="text-on-surface-variant">Witness the transformation from everyday use to showroom brilliance.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 reveal">
        <div className="rounded-2xl overflow-hidden relative group">
          <img
            alt="Before and After Detailing"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWAljdoVTYvK9M2p1StPWp5G4EEe8OKlltel8au7wj4642YlubUrmFB_ZwZMWDZMqpg8dxdWcDsWeEY7qQyJsNA52Eoy8F4CxnvMJXty1a58pxpymm3i88WBk9JVVEMCy4df2l2a7HAmYJBX6XMwVDrB1uLgxKqzrkBPgHMsA8EVRvKo7lMMUlC5iAThFz_JGoX9HzuTM7dw9LiYb1WkucGijrTUGEDBPk27s146arGVmlS8rRrUcER_SaSPYALirIHf0Y8E_yIQY"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg font-label-md text-label-md text-primary">
            Before / After Comparison
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-2xl overflow-hidden h-[300px] relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A side view of a luxury black supercar undergoing a precision polish in a modern detailing workshop."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB82bZwctKXdXApV8FdWCdOFKqyRs3zcvxbGg9vxdiJWvUWIzua186fyq7ig53U8As4iTKPDXBgN3fA4O2nTfYuqscD31Jei41kn1aNi9UPZ3t8HvMwbKOX3F1pE0yqm6Qpej7DtzG5AYn6-oqIzK-t-hqZnLyq3paynq5VIhRoQ0aMGlGQVE-FJUi7C9dAshg23nPry-77z3CVTz3Wle_KSm3pbhHUA8MMOEiFHzjzVFR5C0z81cH9lPv1gixAD4fmFXZj_kZq_v8"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[300px] relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Close up high-contrast shot of a metallic blue sports car wheel and brake caliper."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1w8R_y0FPiB5v0aXUk5rwfNaYrJXwydWVd4A6kwLTvqyCg31fD5WqY-2ib_EgWvBGD_tV8MDfsbCBVfLvoc-F6QtYCchlpVp29Atjj8WLsn_TMNKyxi6giHmllIhXAtou1VhyWgE5OYO6MRFPy5kbl2-XtGgSoPI0PVD5CT05pjoSXpS74rSXrjD1eKSjIg_T7h1WgcidOD-QwL3ZLzjs5fLT4N9Yl2wfBqYrJlRP5CWRK31znZ0XBAZsEVFwsZ8je8ywpLIHyvc"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
