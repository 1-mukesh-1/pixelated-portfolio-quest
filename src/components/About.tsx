
import { personalInfo, education, workExperience } from '@/data/portfolioData';
import { BookOpen, GraduationCap, Briefcase, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      <h2 className="section-title">About Me</h2>
      
      {/* Mario Cloud decorations */}
      <div className="absolute -top-10 left-10 cloud-float animation-delay-500 z-0 opacity-80">
        <div className="w-16 h-6 bg-white rounded-full relative">
          <div className="absolute w-8 h-8 bg-white rounded-full -top-4 -left-2"></div>
          <div className="absolute w-10 h-10 bg-white rounded-full -top-5 left-3"></div>
          <div className="absolute w-8 h-8 bg-white rounded-full -top-4 right-0"></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-10 cloud-float animation-delay-1000 z-0 opacity-80">
        <div className="w-20 h-8 bg-white rounded-full relative">
          <div className="absolute w-10 h-10 bg-white rounded-full -top-5 -left-2"></div>
          <div className="absolute w-12 h-12 bg-white rounded-full -top-6 left-4"></div>
          <div className="absolute w-10 h-10 bg-white rounded-full -top-5 right-0"></div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-10 relative z-10">
        <div className="pixel-card animate-pipe-appear">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 mr-2 text-game-green" />
            <h3 className="font-pixel text-lg text-game-green">EDUCATION</h3>
          </div>
          
          <div className="mb-6 text-game-dark-blue">
            <h4 className="font-pixel text-base text-game-dark-blue">{education.institution}</h4>
            <p className="text-sm text-gray-700 mt-1">{education.location}</p>
            <p className="font-medium mt-2">{education.degree}</p>
            <p className="text-sm text-gray-700">{education.period}</p>
            <p className="mt-2">GPA: {education.gpa}</p>
            
            <div className="mt-4">
              <p className="font-medium">Coursework:</p>
              <ul className="list-disc list-inside text-sm mt-1">
                {education.coursework.map((course, index) => (
                  <li key={index} className="mb-1">{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pixel-card animate-mushroom-grow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 mr-2 text-game-yellow" />
            <h3 className="font-pixel text-lg text-game-yellow">PROFILE</h3>
          </div>
          
          <div className="space-y-4 text-game-dark-blue">
            <p>{personalInfo.bio}</p>
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-game-red" />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-game-blue" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-game-blue transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-game-green" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mario Pipe decoration */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-0">
        <div className="w-16 h-8 mario-pipe rounded-t-lg relative"></div>
      </div>
      
      <div className="mt-12 relative z-10">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 mr-2 text-game-red" />
          <h3 className="font-pixel text-xl text-game-red">WORK EXPERIENCE</h3>
        </div>
        
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div 
              key={index} 
              className={`pixel-card ${index % 2 === 0 ? 'animate-slide-up' : 'animate-slide-down'}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="text-game-dark-blue">
                  <h4 className="font-pixel text-base text-game-dark-blue">{job.role}</h4>
                  <p className="font-medium mt-1">{job.company}</p>
                  <p className="text-sm text-gray-700 mt-1">{job.location}</p>
                </div>
                <p className="text-sm text-game-blue font-medium mt-2 md:mt-0">{job.period}</p>
              </div>
              
              <ul className="list-disc list-inside text-sm mt-4 text-game-dark-blue">
                {job.description.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Question block decoration */}
      <div className="absolute bottom-10 right-10 animate-question-block z-0">
        <div className="mario-block"></div>
      </div>
    </section>
  );
};

export default About;
