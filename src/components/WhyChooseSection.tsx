import React from 'react';
import { Clock, Star, Zap } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-black-soft/30 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6 hover:scale-105 transition-all duration-300 drop-shadow-glow animate-fade-in-up">
            Why Choose APTutor's?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground/90 transition-colors animate-fade-in-up">
            Experience the difference with our premium tutoring approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Flexible Time */}
          <div className="group text-center animate-fade-in-up hover:scale-105 transition-all duration-500">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-black border-2 border-gold/30 rounded-full flex items-center justify-center hover:border-gold hover:shadow-glow transition-all duration-300 group-hover:bg-gradient-gold/10">
                <Clock className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Glow effect ring */}
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
              Flexible Time
            </h3>
            <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
              Up to 60 minutes per session, perfectly tailored to your learning pace and needs
            </p>
          </div>
          
          {/* Quality Education */}
          <div className="group text-center animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.1s' }}>
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-black border-2 border-gold/30 rounded-full flex items-center justify-center hover:border-gold hover:shadow-glow transition-all duration-300 group-hover:bg-gradient-gold/10">
                <Star className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Glow effect ring */}
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
              Quality Education
            </h3>
            <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
              Expert tutors with proven track records and passion for student success
            </p>
          </div>
          
          {/* Affordable Price */}
          <div className="group text-center animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-black border-2 border-gold/30 rounded-full flex items-center justify-center hover:border-gold hover:shadow-glow transition-all duration-300 group-hover:bg-gradient-gold/10">
                <Zap className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Glow effect ring */}
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
              Affordable Price
            </h3>
            <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
              Premium tutoring at just $15 per session - exceptional value for quality education
            </p>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full shadow-glow" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;