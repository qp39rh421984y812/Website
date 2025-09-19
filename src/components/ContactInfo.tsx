import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  // Click handler for the email link
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const email = "aptutoring.contact@gmail.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open default email app on mobile
      window.location.href = `mailto:${email}`;
    } else {
      // Open Gmail web compose on desktop
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="mt-8 animate-scale-in">
      <div className="bg-card border border-gold/20 rounded-lg p-6 backdrop-blur-sm shadow-premium hover:shadow-glow hover:border-gold/20 transition-all duration-300">
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
            <span className="group-hover:text-gold/90 transition-colors group-hover:translate-x-1 font-medium">
              Mon–Fri, 4–8 PM | Sat–Sun, 1–7 PM
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center hover:text-gold/70 transition-colors">
          Ready to start your learning journey? Reach out today!
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;