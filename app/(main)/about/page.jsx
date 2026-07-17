import React from 'react';
import AboutStory from '@/components/sections/AboutStory';
import ContactForm from '@/components/sections/ContactForm';
import MapSection from '@/components/sections/MapSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <AboutStory />
        <hr className="border-white/10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ContactForm />
          <MapSection />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;