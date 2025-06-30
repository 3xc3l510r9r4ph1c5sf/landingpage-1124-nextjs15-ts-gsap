'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Form animation
      gsap.from(formRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Success animation
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-charcoal text-bone relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 texture-overlay opacity-5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="futura-black text-display text-center mb-8"
        >
          Let's Create Something
          <br />
          <span className="text-soft-gold">Extraordinary</span>
        </h2>

        <p className="text-body text-center text-warm-gray mb-16 max-w-2xl mx-auto">
          Ready to elevate your brand? We'd love to hear about your project 
          and explore how we can bring your vision to life.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-caption text-warm-gray mb-3">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full glass-card p-4 bg-transparent border-0 text-bone placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-caption text-warm-gray mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full glass-card p-4 bg-transparent border-0 text-bone placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-caption text-warm-gray mb-3">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full glass-card p-4 bg-transparent border-0 text-bone placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-caption text-warm-gray mb-3">
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full glass-card p-4 bg-transparent border-0 text-bone placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-soft-gold resize-none"
              placeholder="Tell us about your project, goals, and timeline..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="glass-button futura-bold text-body magnetic-btn px-12 py-4 bg-soft-gold text-charcoal"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-20 text-center space-y-4">
          <p className="text-body text-warm-gray">
            Or reach out directly
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:hello@excelsior.design"
              className="text-body text-soft-gold hover:text-bone transition-colors magnetic-btn"
            >
              hello@excelsior.design
            </a>
            <a
              href="tel:+1234567890"
              className="text-body text-soft-gold hover:text-bone transition-colors magnetic-btn"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-16 border-t border-warm-gray border-opacity-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="futura-black text-2xl text-soft-gold mb-8">
            Excelsior Graphic Design
          </div>
          <p className="text-caption text-warm-gray mb-8">
            © 2024 Excelsior Graphic Design. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-warm-gray hover:text-soft-gold transition-colors magnetic-btn">
              Instagram
            </a>
            <a href="#" className="text-warm-gray hover:text-soft-gold transition-colors magnetic-btn">
              Behance
            </a>
            <a href="#" className="text-warm-gray hover:text-soft-gold transition-colors magnetic-btn">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;