import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import foto from '../assets/background.png';
import libro from '../assets/ebook-example.jpg';
import spice from '../assets/spice.webp';
import easyCards from '../assets/easy_4.png';
import FinNest from '../assets/Finnest.jpg';
import ollamachat from '../assets/Ollama chat .jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const baseClasses = darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-white to-purple-50 text-gray-900';

  const projects = [
    {
      title: "Project Sphere",
      description: "Aplicación web para gestionar proyectos personales con React",
      tech: ["React", "JavaScript", "CSS"],
      image: libro,
      link: "https://diana-bernardos.github.io/project-promo-X-module-3-team-2/"
    },
    {
      title: "Spice Developers",
      description: "Aplicación móvil para la gestión de agendas familiares",
      tech: ["React", "JavaScript", "CSS"],
      image: spice,
      link: "https://ellisoalgo.github.io/project-grupo-2/"
    },
    {
      title: "Easy Peasy Cards",
      description: "Generador de tarjetas de visita personalizadas",
      tech: ["JavaScript", "CSS", "HTML"],
      image: easyCards,
      link: "https://aidanarr.github.io/project-promo-X-module-2-team-3/"
    },
    {
      title: "FinNest",
      description: " Dashboar para gestión de finanzas personales",
      tech: ["modelo de IA local (Ollama)", "Tailwind CSS", "React","Tour de bienvenida interactivo"],
      image: FinNest,
      link: "https://finnest-2.onrender.com"
    },
    {
      title: "Chatbot-App",
      description: " Chatbot personal para consultas rapidas",
      tech: ["modelo de IA local (Ollama)", " CSS", "JavaScript","HTML"],
      image: ollamachat,
      link: ""
    }
  ];
  

  return (
    <div className={`min-h-screen ${baseClasses} transition-all duration-500`}>
      <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider hover:scale-105 transition-transform">Diana Bernardos</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <section id="home" className={`mb-20 transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 transform hover:scale-105 transition-all duration-500">
              <img
                src={foto}
                alt="Diana Bernardos"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-4 border-purple-500 hover:border-pink-500 transition-colors"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
                Full Stack Developer
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
              Apasionada por el desarrollo de aplicaciones web modernas y eficientes,especializada en React y JavaScript.
              Desarrollo de aplicaciones con IA generativa,Chatbots y automatizaciones ,para mejorar procesos y la experiencia del ususario.

              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/Diana-Bernardos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/diana-bernardos-moraleda-536378223" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a 
                  href="mailto:dianabernardosm@gmail.com" 
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={`mb-20 transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm transform hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Contacto</h2>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:dianabernardosm@gmail.com" 
                className="flex items-center gap-4 hover:text-purple-400 transition-colors duration-300 group"
              >
                <Mail className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                dianabernardosm@gmail.com
              </a>
              <div className="flex items-center gap-4 group">
                <MapPin className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t border-purple-500/20`}>
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-purple-500/80">&copy; 2024 Diana Bernardos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;