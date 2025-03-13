
import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-container relative overflow-hidden">
      <h2 className="section-title">Contact Me</h2>
      
      {/* Mario ground decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-10 mario-ground z-0 ground-scroll"></div>
      
      {/* Mario Mushroom decoration */}
      <div className="absolute top-20 right-10 animate-bob-vertical z-0">
        <div className="w-10 h-10 bg-game-mushroom-red rounded-full relative">
          <div className="absolute top-1 left-1 right-1 bottom-1 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-game-mushroom-red rounded-full"></div>
          </div>
          <div className="absolute -bottom-4 left-1 right-1 h-4 bg-game-dark-blue"></div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-10 relative z-10">
        <div className="pixel-card animate-slide-in-right">
          <h3 className="font-pixel text-lg text-game-green mb-6">GET IN TOUCH</h3>
          
          <div className="space-y-6 text-game-dark-blue">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 text-game-red shrink-0 mt-1" />
              <div>
                <h4 className="font-pixel text-sm text-game-dark-blue mb-1">LOCATION</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-3 text-game-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-pixel text-sm text-game-dark-blue mb-1">EMAIL</h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-game-blue transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-3 text-game-green shrink-0 mt-1" />
              <div>
                <h4 className="font-pixel text-sm text-game-dark-blue mb-1">PHONE</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-game-dark-blue">
            <h4 className="font-pixel text-sm text-game-yellow mb-4">AVAILABILITY</h4>
            <p>{personalInfo.availability}</p>
          </div>
        </div>
        
        <div className="pixel-card animate-pipe-appear">
          <h3 className="font-pixel text-lg text-game-blue mb-6">SEND MESSAGE</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-pixel text-xs mb-2 text-game-dark-blue">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-game-dark-blue p-2 focus:border-game-blue outline-none transition-colors text-game-dark-blue"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-pixel text-xs mb-2 text-game-dark-blue">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-game-dark-blue p-2 focus:border-game-blue outline-none transition-colors text-game-dark-blue"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-pixel text-xs mb-2 text-game-dark-blue">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border-2 border-game-dark-blue p-2 focus:border-game-blue outline-none transition-colors resize-none text-game-dark-blue"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="pixel-button bg-game-red hover:bg-game-red/80 w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Coins decoration */}
      <div className="absolute bottom-20 left-1/3 animate-coin-flip z-0">
        <div className="w-6 h-6 mario-coin">$</div>
      </div>
      
      <div className="absolute bottom-30 right-1/3 animate-coin-flip animation-delay-500 z-0">
        <div className="w-6 h-6 mario-coin">$</div>
      </div>
    </section>
  );
};

export default Contact;
