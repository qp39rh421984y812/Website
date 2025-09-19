import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Star, Zap, Mail, Phone } from 'lucide-react';
import pricingHero from '@/assets/pricing-hero.jpg';

const Pricing = () => {
  const [showTrialContact, setShowTrialContact] = useState(false);
  const [showPremiumContact, setShowPremiumContact] = useState(false);

  // TypeScript-safe email click handler
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const email = "aptutoring.contact@gmail.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open default email app on mobile
      window.location.href = `mailto:${email}`;
    } else {
      // Open Gmail in browser on desktop
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`; 
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    Premium Tutoring
                  </span>
                  <br />
                  <span className="text-foreground">Made Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Experience personalized learning with our expert tutors. Quality education at an affordable price.
                </p>
              </div>
              <div className="flex justify-center animate-scale-in">
                <img
                  src={pricingHero}
                  alt="Premium tutoring session setup"
                  className="rounded-2xl shadow-premium max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Trial Session Card */}
              <Card className="relative overflow-hidden bg-gradient-black border-2 border-gold/20 shadow-premium hover:shadow-glow transition-all duration-500 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-gold opacity-5" />
                <CardHeader className="text-center relative z-10 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-gold rounded-full animate-glow-pulse">
                      <Zap className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gold mb-2">Trial Session</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    Try our tutoring service once
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-8">
                  {/* Price */}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gold mb-2 animate-fade-in-up">
                      $10
                    </div>
                    <p className="text-muted-foreground">one-time trial</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">60-minute session</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Clock className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">One-time only</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Zap className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">Expert tutor</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Star className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">Perfect for testing</span>
                    </div>
                  </div>

                  {/* Book Trial Button */}
                  <div className="pt-6">
                    <Button
                      variant="premium-outline"
                      size="lg"
                      className="w-full hover:shadow-glow transition-all duration-300"
                      onClick={() => {
                        setShowTrialContact(!showTrialContact);
                        if (showPremiumContact) setShowPremiumContact(false);
                      }}
                    >
                      Book Trial
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-3">
                      Try before you commit
                    </p>

                    {/* Contact Info for Trial */}
                    {showTrialContact && (
                      <div className="mt-8 animate-scale-in transition-all duration-300 ease-in-out">
                        <div className="bg-card border border-gold/20 rounded-lg p-6 backdrop-blur-sm shadow-premium hover:shadow-glow hover:border-gold/40 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-gold mb-4 hover:scale-105 transition-all duration-300">Get in Touch</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-foreground p-2 rounded-lg hover:bg-gold/5 transition-all duration-300 group">
                              <Mail className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <a
                                href="#"
                                onClick={handleEmailClick}
                                className="hover:text-gold transition-colors group-hover:translate-x-1 font-medium"
                              >
                                aptutoring.contact@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-foreground p-2 rounded-lg hover:bg-gold/5 transition-all duration-300 group">
                              <Phone className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <a href="tel:+16475693896" className="hover:text-gold transition-colors group-hover:translate-x-1 font-medium">
                                647-569-3896
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-foreground p-2 rounded-lg hover:bg-gold/5 transition-all duration-300 group">
                              <Clock className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <span className="group-hover:text-gold/90 transition-colors group-hover:translate-x-1 font-medium">Mon–Fri, 4–8 PM | Sat–Sun, 1–7 PM</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4 text-center hover:text-gold/70 transition-colors">
                            Ready to start your learning journey? Reach out today!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Premium Session Card */}
              <Card className="relative overflow-hidden bg-gradient-black border-2 border-gold/20 shadow-premium hover:shadow-glow transition-all duration-500 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-gold opacity-5" />
                <CardHeader className="text-center relative z-10 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-gold rounded-full animate-glow-pulse">
                      <Star className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gold mb-2">Premium Session</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    One-on-one personalized tutoring
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-8">
                  {/* Price */}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gold mb-2 animate-fade-in-up">
                      $15
                    </div>
                    <p className="text-muted-foreground">per session</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">60-minute session maximum</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Clock className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">Flexible scheduling</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Zap className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">Expert tutors</span>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up">
                      <div className="flex-shrink-0 p-1 bg-gold/20 rounded-full">
                        <Star className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">Personalized learning plan</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="pt-6">
                    <Button
                      variant="premium-outline"
                      size="lg"
                      className="w-full hover:shadow-glow transition-all duration-300"
                      onClick={() => {
                        setShowPremiumContact(!showPremiumContact);
                        if (showTrialContact) setShowTrialContact(false);
                      }}
                    >
                      Get Started
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-3">
                      Contact us to begin
                    </p>

                    {/* Contact Info for Premium */}
                    {showPremiumContact && (
                      <div className="mt-8 animate-scale-in transition-all duration-300 ease-in-out">
                        <div className="bg-gradient-gold/10 border-2 border-gold rounded-lg p-6 backdrop-blur-sm shadow-gold hover:shadow-glow hover:border-gold/60 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-gold mb-4 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Star className="h-5 w-5" />
                            Premium Booking
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-foreground p-3 rounded-lg bg-gold/5 hover:bg-gold/10 transition-all duration-300 group border border-gold/20">
                              <Mail className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <a
                                href="#"
                                onClick={handleEmailClick}
                                className="hover:text-gold transition-colors group-hover:translate-x-1 font-medium"
                              >
                                aptutoring.contact@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-foreground p-3 rounded-lg bg-gold/5 hover:bg-gold/10 transition-all duration-300 group border border-gold/20">
                              <Phone className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <a href="tel:+16475693896" className="hover:text-gold transition-colors group-hover:translate-x-1 font-medium">
                                647-569-3896
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-foreground p-3 rounded-lg bg-gold/5 hover:bg-gold/10 transition-all duration-300 group border border-gold/20">
                              <Clock className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                              <span className="group-hover:text-gold/90 transition-colors group-hover:translate-x-1 font-medium">Priority Scheduling Available</span>
                            </div>
                          </div>
                          <p className="text-sm text-gold/80 mt-4 text-center hover:text-gold transition-colors font-medium">
                            🌟 Premium members get priority support and flexible scheduling!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;