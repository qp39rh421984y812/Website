import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactInfo from './ContactInfo';
import heroImage from '@/assets/hero-tutoring.jpg';

const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-float"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Unlock Your Potential with{' '}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Personalized Tutoring
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Get <span className="font-bold text-gold drop-shadow-glow">one-on-one academic support</span> tailored to your learning style and goals. 
            Transform your understanding and <span className="font-bold text-gold drop-shadow-glow">achieve excellence</span>.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="premium" 
              size="xl"
              onClick={() => setShowContact(!showContact)}
              className="mb-8 hover:shadow-glow transition-all duration-300 hover:scale-105 shadow-gold"
            >
              {showContact ? 'Hide Contact Info' : 'Book Tutor'}
            </Button>
          </div>
          
          <ContactInfo isVisible={showContact} />
        </div>
      </div>
      
      {/* Decorative Elements */}

    </section>
  );
};

export default HeroSection;