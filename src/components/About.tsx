
import { personalInfo, education, workExperience } from '@/data/portfolioData';
import { BookOpen, GraduationCap, Briefcase, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="pixel-card">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 mr-2 text-game-green" />
            <h3 className="font-pixel text-lg text-game-green">EDUCATION</h3>
          </div>
          
          <div className="mb-6">
            <h4 className="font-pixel text-base text-white">{education.institution}</h4>
            <p className="text-sm text-gray-300 mt-1">{education.location}</p>
            <p className="font-medium mt-2">{education.degree}</p>
            <p className="text-sm text-gray-300">{education.period}</p>
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
        
        <div className="pixel-card">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 mr-2 text-game-yellow" />
            <h3 className="font-pixel text-lg text-game-yellow">PROFILE</h3>
          </div>
          
          <div className="space-y-4">
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
      
      <div className="mt-12">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 mr-2 text-game-red" />
          <h3 className="font-pixel text-xl text-game-red">WORK EXPERIENCE</h3>
        </div>
        
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="pixel-card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="font-pixel text-base text-white">{job.role}</h4>
                  <p className="font-medium mt-1">{job.company}</p>
                  <p className="text-sm text-gray-300 mt-1">{job.location}</p>
                </div>
                <p className="text-sm text-game-blue font-medium mt-2 md:mt-0">{job.period}</p>
              </div>
              
              <ul className="list-disc list-inside text-sm mt-4">
                {job.description.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
