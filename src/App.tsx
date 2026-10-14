/**
 * Empress Delivery Services - Demo Website Concept
 * 
 * This is a demo concept for the business owner.
 * All content is placeholder and can be swapped with real branding, photos, and details.
 * 
 * WhatsApp Integration: All CTAs link to wa.me/2348067075967
 * The partnership form builds a pre-filled WhatsApp message from user inputs.
 */

import { useState, useEffect, useRef } from 'react';

// WhatsApp base link
const WHATSAPP_BASE = 'https://wa.me/2348067075967';
const WHATSAPP_PARTNERSHIP = `${WHATSAPP_BASE}?text=Hello%20Empress%20Delivery%20Services%2C%20I%20would%20like%20to%20request%20a%20delivery%20partnership.`;

// Coverage areas served (placeholder - swap with real areas)
const COVERAGE_AREAS = [
  'Lagos Island',
  'Victoria Island',
  'Lekki',
  'Ikeja',
  'Surulere',
  'Abuja (Central)',
];

// Services data (placeholder descriptions)
const SERVICES = [
  {
    icon: 'fa-bolt',
    title: 'Same-Day Delivery',
    description: 'Urgent packages picked up and delivered within hours across your city.',
  },
  {
    icon: 'fa-store',
    title: 'Business-to-Customer Delivery',
    description: 'We handle your customer orders so you can focus on growing your business.',
  },
  {
    icon: 'fa-truck-loading',
    title: 'Bulk & Scheduled Pickups',
    description: 'Regular scheduled pickups for warehouses, shops, and high-volume vendors.',
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Express Courier',
    description: 'Time-sensitive documents and small parcels delivered with priority care.',
  },
];

// Trust points
const TRUST_POINTS = [
  { icon: 'fa-clock', title: 'Fast Turnaround', description: 'Most deliveries completed same-day with real-time updates.' },
  { icon: 'fa-map-marker-alt', title: 'Fully Tracked', description: 'Every package tracked from pickup to drop-off for your peace of mind.' },
  { icon: 'fa-shield-alt', title: 'Careful Handling', description: 'Your goods are treated with care — fragile items handled with extra attention.' },
  { icon: 'fa-headset', title: 'Friendly Support', description: 'Real humans ready to help on WhatsApp whenever you need us.' },
];

// Steps
const STEPS = [
  { number: '01', title: 'Reach Out on WhatsApp', description: 'Send us a message telling us about your business and delivery needs.' },
  { number: '02', title: 'Agree on a Plan', description: 'We discuss pricing, schedules, and coverage that works for your business.' },
  { number: '03', title: 'We Deliver', description: 'Sit back while we handle your deliveries reliably and on time.' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1B2A4A] rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-crown text-[#F97316] text-sm md:text-base"></i>
            </div>
            <span className={`font-bold text-base md:text-lg transition-colors ${scrolled ? 'text-[#1B2A4A]' : 'text-[#1B2A4A]'}`}>
              Empress Delivery
            </span>
          </a>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_PARTNERSHIP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6A0E] text-white font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-200"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Request Partnership
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1B2A4A]"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-4 mb-4 border border-gray-100">
            <a
              href={WHATSAPP_PARTNERSHIP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold px-5 py-3 rounded-full w-full"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Request Partnership
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1B2A4A] to-[#2D4270]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      
      {/* Hero image overlay - delivery bike placeholder (swap with real brand photo) */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80" 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Now serving businesses across Nigeria</span>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Reliable Deliveries for{' '}
              <span className="text-[#F97316]">Growing Businesses</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              We help shops, restaurants, and online vendors deliver to their customers — fast, tracked, and with care. Focus on your business, we'll handle the rest.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_PARTNERSHIP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6A0E] text-white font-semibold px-7 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Request Partnership
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-4 rounded-full text-lg transition-all"
              >
                <i className="fa-solid fa-map-location-dot"></i>
                View Coverage Areas
              </a>
            </div>
          </FadeInSection>

          {/* Trust indicators */}
          <FadeInSection delay={400}>
            <div className="mt-12 flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-[#F97316]"></i>
                <span>Same-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-[#F97316]"></i>
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-[#F97316]"></i>
                <span>WhatsApp support</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-2 mb-4">
              Delivery Solutions for Every Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you run a small shop or a growing e-commerce brand, we have a delivery plan that fits.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-xl flex items-center justify-center mb-5">
                  <i className={`fa-solid ${service.icon} text-[#F97316] text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-2 mb-4">
              Getting Started Is Simple
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Three easy steps to start delivering with confidence.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, index) => (
            <FadeInSection key={step.number} delay={index * 150}>
              <div className="relative text-center">
                {/* Connector line (desktop) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F97316]/40 to-transparent"></div>
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-[#1B2A4A] rounded-full mb-6 shadow-lg">
                  <span className="text-[#F97316] font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={450}>
          <div className="text-center mt-12">
            <a
              href={WHATSAPP_PARTNERSHIP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6A0E] text-white font-semibold px-7 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-orange-200"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Start Your Partnership
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Coverage Areas Section
function CoverageAreas() {
  return (
    <section id="coverage" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-2 mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're expanding rapidly. Check if we cover your business location.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {COVERAGE_AREAS.map((area, index) => (
              <div
                key={area}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:border-[#F97316]/30 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <i className="fa-solid fa-location-dot text-[#F97316] text-lg mb-2 block"></i>
                <span className="font-semibold text-[#1B2A4A] text-sm md:text-base">{area}</span>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="text-center mt-8 md:mt-10">
            <p className="text-gray-600 text-lg mb-4">
              <i className="fa-solid fa-circle-info text-[#F97316] mr-2"></i>
              Don't see your area? Message us — we're always expanding.
            </p>
            <a
              href={WHATSAPP_PARTNERSHIP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#EA6A0E] font-semibold transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Ask about your area
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-2 mb-4">
              Built for Businesses Like Yours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We understand what growing businesses need from a delivery partner.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <FadeInSection key={point.title} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl hover:bg-[#1B2A4A]/5 transition-all duration-300">
                <div className="w-16 h-16 bg-[#1B2A4A] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <i className={`fa-solid ${point.icon} text-[#F97316] text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{point.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Partnership Form Section
function PartnershipForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message from form data
    const message = `Hello Empress Delivery Services! I'd like to request a delivery partnership.%0A%0A` +
      `*Business Name:* ${formData.businessName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Business Type:* ${formData.businessType}%0A` +
      `*Message:* ${formData.message || 'N/A'}`;
    
    const whatsappUrl = `${WHATSAPP_BASE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B2A4A] via-[#1B2A4A] to-[#2D4270] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - info */}
          <FadeInSection>
            <div>
              <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">Partner With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Ready to Streamline Your Deliveries?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Fill out the form and we'll connect on WhatsApp to discuss how we can support your business with reliable, tracked deliveries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <i className="fa-brands fa-whatsapp text-[#F97316] text-xl"></i>
                  <span>+234 806 707 5967</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <i className="fa-solid fa-clock text-[#F97316] text-xl"></i>
                  <span>Quick response during business hours</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <i className="fa-solid fa-handshake text-[#F97316] text-xl"></i>
                  <span>Flexible plans for businesses of all sizes</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right side - form */}
          <FadeInSection delay={200}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#1B2A4A] mb-6">Request a Partnership</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="e.g. Fresh Bites Kitchen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="e.g. 0801 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Business *</label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                  >
                    <option value="">Select your business type</option>
                    <option value="Restaurant / Food Vendor">Restaurant / Food Vendor</option>
                    <option value="Online Store / E-commerce">Online Store / E-commerce</option>
                    <option value="Retail Shop">Retail Shop</option>
                    <option value="Pharmacy / Health">Pharmacy / Health</option>
                    <option value="Corporate / Office">Corporate / Office</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your delivery needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6A0E] text-white font-semibold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-orange-200"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-crown text-white text-sm"></i>
              </div>
              <span className="font-bold text-lg">Empress Delivery Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reliable delivery solutions for growing businesses in Nigeria. Fast, tracked, and always on time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#F97316] transition-colors">
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>+234 806 707 5967</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-3">
              {/* Placeholder social links - swap with real profiles */}
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-tiktok text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Empress Delivery Services. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Demo concept website — content subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-white text-3xl md:text-4xl"></i>
    </a>
  );
}

// Main App
export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <CoverageAreas />
      <WhyChooseUs />
      <PartnershipForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
