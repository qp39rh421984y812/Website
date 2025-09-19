import React from 'react';

const SloganSection = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Static background glow effect */}
      <div className="absolute inset-0 bg-gradient-gold opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            <span className="bg-gradient-gold bg-clip-text text-transparent drop-shadow-glow hover:scale-105 transition-transform duration-300 inline-block">
              For Students By Students
            </span>
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gradient-gold rounded-full shadow-glow" />
          </div>
        </div>
      </div>
      
      {/* Static particles effect */}
      <div className="absolute top-4 left-1/4 w-2 h-2 bg-gold/40 rounded-full" />
      <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-gold/30 rounded-full" />
      <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-gold/20 rounded-full" />
    </section>
  );
};

export default SloganSection;