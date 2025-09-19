import React from 'react';
import ksiimage from '@/assets/wsg111.jpg';
const FoundersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 hover:scale-105 transition-all duration-300 drop-shadow-glow">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground">
              The passionate educators behind APTutor's commitment to academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Founder 1 Placeholder */}
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 bg-gold/10 border-2 border-gold/20 rounded-full overflow-hidden flex items-center justify-center hover:border-gold/40 hover:bg-gold/20 transition-all duration-300 hover:shadow-glow group-hover:scale-105">
                <img
                  src={ksiimage}
                  alt="KSI"
                  className="w-full h-full object-cover"
                />
                <p className="text-gold/60 group-hover:text-gold transition-colors"></p>
              </div>
              <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">Founder Name</h3>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">Title & Role</p>
              <div className="text-left space-y-2 p-4 rounded-lg hover:bg-black-soft/50 transition-all duration-300">
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Education background and credentials
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Years of experience in education
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Specialties and expertise areas
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Teaching philosophy and approach
                </p>
              </div>
            </div>

            {/* Founder 2 Placeholder */}
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 bg-gold/10 border-2 border-gold/20 rounded-full overflow-hidden flex items-center justify-center hover:border-gold/40 hover:bg-gold/20 transition-all duration-300 hover:shadow-glow group-hover:scale-105">
                <img
                  src={ksiimage}
                  alt="KSI"
                  className="w-full h-full object-cover"
                />
                <p className="text-gold/60 group-hover:text-gold transition-colors"></p>
              </div>
              <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">Founder Name</h3>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">Title & Role</p>
              <div className="text-left space-y-2 p-4 rounded-lg hover:bg-black-soft/50 transition-all duration-300">
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Education background and credentials
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Years of experience in education
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Specialties and expertise areas
                </p>
                <p className="text-sm text-muted-foreground hover:text-gold/80 transition-colors text-center">
                  • Teaching philosophy and approach
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-6 rounded-lg hover:bg-black-soft/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gold mb-4 hover:scale-105 transition-all duration-300">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground/90 transition-colors">
              At APTutor's, we believe every student has the potential to excel. Our founders
              combine decades of educational expertise to provide personalized learning experiences
              that unlock academic success and build lasting confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;