
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
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="pixel-card">
          <h3 className="font-pixel text-lg text-game-green mb-6">GET IN TOUCH</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 text-game-red shrink-0 mt-1" />
              <div>
                <h4 className="font-pixel text-sm text-white mb-1">LOCATION</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-3 text-game-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-pixel text-sm text-white mb-1">EMAIL</h4>
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
                <h4 className="font-pixel text-sm text-white mb-1">PHONE</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-pixel text-sm text-game-yellow mb-4">AVAILABILITY</h4>
            <p>{personalInfo.availability}</p>
          </div>
        </div>
        
        <div className="pixel-card">
          <h3 className="font-pixel text-lg text-game-blue mb-6">SEND MESSAGE</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-pixel text-xs mb-2">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white p-2 focus:border-game-blue outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-pixel text-xs mb-2">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white p-2 focus:border-game-blue outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-pixel text-xs mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white p-2 focus:border-game-blue outline-none transition-colors resize-none"
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
    </section>
  );
};

export default Contact;
