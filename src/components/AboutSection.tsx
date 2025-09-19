import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-black-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 hover:scale-105 transition-all duration-300 drop-shadow-glow">
            Excellence Through Personalized Learning
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="hover:text-foreground transition-colors duration-300 p-4 rounded-lg hover:bg-black-softer/50 hover:shadow-gold/20 hover:shadow-lg">
              Our approach focuses on understanding each student's unique learning style and academic goals. 
              We offer comprehensive support across all major subjects including mathematics, sciences, 
              literature, and test preparation.
            </p>
            <p className="hover:text-foreground transition-colors duration-300 p-4 rounded-lg hover:bg-black-softer/50 hover:shadow-gold/20 hover:shadow-lg">
              With years of experience and a proven track record, we help students build confidence, 
              master challenging concepts, and achieve their academic aspirations through dedicated 
              one-on-one instruction.
            </p>
            <p className="hover:text-foreground transition-colors duration-300 p-4 rounded-lg hover:bg-black-softer/50 hover:shadow-gold/20 hover:shadow-lg">
              Every session is tailored to maximize learning efficiency and ensure lasting comprehension, 
              setting the foundation for lifelong academic success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;