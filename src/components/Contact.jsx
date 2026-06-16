import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'Sedan / Coupe',
    requestedService: 'Premium Detail',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // ─── EmailJS Configuration Placeholder ─────────────────────────────────────
    // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
    const serviceID = 'service_y4e0yhk';
    const templateID = 'template_8qf50vn';
    const publicKey = '5lrLGtAcijKVGFbN5';
    // ──────────────────────────────────────────────────────────────────────────

    const templateParams = {
      client_name: formData.name,
      client_phone: formData.phone,
      client_email: formData.email,
      vehicle_type: formData.vehicleType,
      requested_service: formData.requestedService,
      description: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        
        // --- WhatsApp Redirect ---
        const whatsappMessage = `*New Booking Request from Website!*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Vehicle:* ${formData.vehicleType}
*Service:* ${formData.requestedService}

*Message:*
${formData.message}`;
        
        // 1 is the country code for US/Canada, followed by the company phone number
        const whatsappUrl = `https://wa.me/16395256959?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        // -------------------------

        setFormData({
          name: '',
          phone: '',
          email: '',
          vehicleType: 'Sedan / Coupe',
          requestedService: 'Premium Detail',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-gutter" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-6">
            Get Your Quote Today
          </h2>
          <p className="text-on-surface-variant mb-10">
            Have a specific request or need a custom package? Fill out the form and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant">Phone</p>
                <a
                  className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors"
                  href="tel:6395256959"
                >
                  639-525-6959
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant">Email</p>
                <a
                  className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors"
                  href="mailto:mechplusautocare@gmail.com"
                >
                  mechplusautocare@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant">Address</p>
                <p className="font-headline-sm text-headline-sm text-primary">501-B 45th St E, Saskatoon, SK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 md:p-10 rounded-2xl reveal">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md">
              Thank you! Your inquiry has been sent successfully. We will get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg font-label-md text-label-md">
              Oops! Something went wrong. Please try again later or contact us directly.
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none"
                  placeholder="639-000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none"
                placeholder="your@email.com"
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none appearance-none"
                >
                  <option>Sedan / Coupe</option>
                  <option>SUV / Truck</option>
                  <option>Exotic / Sports</option>
                  <option>Motorcycle</option>
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Requested Service</label>
                <select
                  name="requestedService"
                  value={formData.requestedService}
                  onChange={handleChange}
                  className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none appearance-none"
                >
                  <option>Premium Detail</option>
                  <option>Basic Refresh</option>
                  <option>Platinum Detail</option>
                  <option>Custom Package</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 outline-none h-32"
                placeholder="Tell us about your vehicle..."
              ></textarea>
            </div>
            <button
              disabled={status === 'loading'}
              className="w-full bg-secondary text-white font-label-md text-label-md py-4 rounded-xl hover:bg-on-secondary-container transition-all active:scale-[0.98] disabled:opacity-70"
              type="submit"
            >
              {status === 'loading' ? 'Sending...' : 'Request Appointment'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
