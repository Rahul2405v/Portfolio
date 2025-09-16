import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Avatar from './avatar.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import Gsap from './images/gsap.png';
import reactlogo from './images/react.png';
import sql from './images/sql.png';
import python from './images/python.png';
import java from './images/java.png';
import springBoot from './images/spring-boot.png';
import mongodb from './images/mongodb.png';
import Pdf from './images/Resume.pdf';
import ABSA from './images/ABSA.jpg';
import CO2 from './images/CO2.jpg';
import FrozenLake from './images/FrozenLake.gif';
import Expen from './images/Expen.png';
import InvoiceGen from './images/Invoice_gen.gif';
import Todo from './images/TOdoo.png';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const handle = (i) => {
    if (i === 1) {
      window.location.href = 'https://www.linkedin.com/in/rahul-vudathu/';
    } else if (i === 2) {
      window.location.href = 'https://github.com/Rahul2405v';
    } else {
      window.location.href = 'mailto:rahulvudathu@gmail.com';
    }
  };

  // Removed unused variable isMobile
  const [typedText, setTypedText] = useState('');
  const letterRefs = useRef([]);
  const avatarRef = useRef(null);
  const skillsRef = useRef(null);
  const typingRef = useRef(null);

  const fullText = "Full-stack developer specializing in modern web technologies and AI-driven solutions. I craft scalable applications using React.js, Spring Boot, and cutting-edge ML frameworks. Passionate about creating seamless user experiences while leveraging data science to solve real-world problems and drive innovation.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        gsap.from(letter, {
          y: -100,
          opacity: 0,
          duration: 1.5,
          delay: index * 0.2,
          ease: "bounce.out"
        });
      }
    });

    if (typingRef.current) {
      let currentIndex = 0;
      const typeSpeed = 25; // milliseconds per character
      const pauseAtEnd = 500; // pause at end of sentences
      
      const typeAnimation = () => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          
          // Add pause at periods and commas for natural flow
          const currentChar = fullText[currentIndex - 1];
          const delay = (currentChar === '.' || currentChar === ',') ? pauseAtEnd : typeSpeed;
          
          setTimeout(typeAnimation, delay);
        } else {
          // Hide cursor after typing is complete
          setTimeout(() => {
            if (typingRef.current) {
              const cursor = typingRef.current.querySelector('.typing-cursor');
              if (cursor) {
                gsap.to(cursor, { opacity: 0, duration: 0.5 });
              }
            }
          }, 2000);
        }
      };
      
      // Start typing after letters animation with fade in effect
      gsap.set(typingRef.current, { opacity: 0 });
      gsap.to(typingRef.current, { opacity: 1, duration: 0.5, delay: 1.5 });
      
      setTimeout(() => {
        typeAnimation();
      }, 1800);
    }

    // Avatar animation
    if (avatarRef.current) {
      gsap.from(avatarRef.current, {
        scale: 0,
        rotation: 360,
        duration: 2,
        delay: 1,
        ease: "back.out(1.7)"
      });
      gsap.to(avatarRef.current, {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }

   
    if (skillsRef.current) {
      const skillImages = skillsRef.current.querySelectorAll('.skill-item img');
      
      // Individual skill animations with rotation and scaling
      skillImages.forEach((img, index) => {
        gsap.set(img, {
          transformOrigin: "center center",
          scale: 0,
          rotation: 180,
          opacity: 0
        });
        
        // Initial entrance animation
        gsap.to(img, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        });
        
        // Continuous subtle floating animation
        gsap.to(img, {
          y: -8,
          duration: 1.5 + (index * 0.1),
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.15
        });
      });
    }

    gsap.from('.scrolling-skills-container', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.scrolling-skills-container',
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.utils.toArray('.section-animate').forEach(section => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      });
    });
    gsap.utils.toArray('.certification-card').forEach((card, index) => {
      gsap.from(card, {
        scale: 0.8,
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });
    });
  });

  const handleTouch = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    const url = Pdf;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rahul_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-gradient" href="/">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">Certifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center position-relative">
        <div className="container">
          
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4 animate-fadeInLeft">
                I do code and <br />
                make content <span className="gradient-text">about it</span>
              </h1>
              <p ref={typingRef} className="lead mb-5 animate-fadeInLeft typing-text">
                {typedText}
                <span className="typing-cursor">|</span>
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start animate-fadeInLeft">
                <button className="btn btn-primary btn-lg px-4" onClick={handleTouch}>
                  Get in Touch
                </button>
                <button className="btn btn-outline-light btn-lg px-4" onClick={handleDownload}>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                ref={avatarRef}
                src={Avatar} 
                alt="Avatar" 
                className="img-fluid rounded-circle shadow-lg animate-fadeInRight"
                style={{ maxWidth: '300px', width: '100%' }}
              />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <i className="bi bi-chevron-double-down fs-2 text-white animate-bounce"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light section-animate">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h6 className="text-muted mb-2">Get To Know More</h6>
              <h2 className="display-5 fw-bold mb-5">About Me</h2>
              <div className="card border-0 shadow-sm p-4">
                <p className="lead mb-0">
                 I'm a passionate developer with a strong interest in AI/ML, particularly deep learning and fine-tuning large language models (LLMs). Alongside my experience in building responsive and interactive applications using React.js and GSAP, I actively explore ways to integrate intelligent systems into web solutions. My goal is to bridge modern web development with advanced AI to create impactful, user-driven applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills" className="py-5 section-animate"> */}
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-muted mb-2">Explore My</h6>
            <h2 className="display-5 fw-bold">Skill Set</h2>
          </div>
          
          <div ref={skillsRef} className="skills-container mb-5">
            <div className="row justify-content-center g-3">
              {[html, css, js, reactlogo, Gsap, springBoot, sql, python, java, mongodb].map((skill, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 text-center">
                  <div className="skill-item position-relative">
                    <img 
                      src={skill} 
                      alt={`Skill ${index + 1}`}
                      className="img-fluid skill-image"
                      style={{ 
                        maxWidth: '80px', 
                        height: '80px', 
                        objectFit: 'contain',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                      }}
                      onMouseEnter={(e) => {
                        gsap.to(e.target, {
                          scale: 1.2,
                          rotation: 10,
                          duration: 0.3,
                          ease: "back.out(1.7)"
                        });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.target, {
                          scale: 1,
                          rotation: 0,
                          duration: 0.3,
                          ease: "back.out(1.7)"
                        });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Scrolling Skills Animation */}
          <div className="scrolling-skills-container mb-8">
            <div className="scrolling-skills">
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {[html, css, js, reactlogo, Gsap, mongodb,sql, python, java].map((skill, index) => (
                    <img 
                      key={`${setIndex}-${index}`}
                      src={skill} 
                      alt={`Skill ${index + 1}`}
                      style={{ 
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 bg-dark text-white border-0 shadow">
                <div className="card-body p-5">
                  <h3 className="card-title mb-4">Frontend Development</h3>
                  <p className="card-text">
                    I specialize in building responsive, dynamic, and visually engaging user interfaces using React.js. 
                    My expertise includes component-based architecture, state and props management, and lifecycle hooks. 
                    For smooth and compelling UI animations, I leverage GSAP to enhance user interaction and design fluidity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-2 border-dark shadow">
                <div className="card-body p-5">
                  <h3 className="card-title mb-4">Backend & AI/ML</h3>
                  <p className="card-text">
                    On the backend, I work primarily with Spring Boot to build scalable and secure APIs. I also have experience 
                    with database design and querying using SQL and MongoDB. In the AI/ML space, I'm deeply interested in deep learning 
                    and fine-tuning large language models (LLMs) for NLP tasks—combining backend logic with intelligent systems 
                    to power smarter web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}

     

          {/* Call to Action */}
          <div className="text-center mt-5">
            <div className="card border-0 bg-primary text-white">
              <div className="card-body p-5">
                <h4 className="card-title mb-3">Continuous Learning</h4>
                <p className="card-text lead mb-4">
                  I'm committed to staying updated with the latest technologies and best practices 
                  in web development. Currently pursuing additional certifications in cloud computing and mobile development.
                </p>
                <button className="btn btn-light btn-lg" onClick={() => handle(1)}>
                  <i className="bi bi-linkedin me-2"></i>View My LinkedIn Profile
                </button>
              </div>
            </div>
          </div>

{/* Certifications Section */}
<section id="certifications" className="py-5 bg-light section-animate">
  <div className="container">
    <div className="text-center mb-5">
      <h6 className="text-muted mb-2">My Professional</h6>
      <h2 className="display-5 fw-bold">Certifications</h2>
    </div>

    <div className="row g-4">

      <div className="col-lg-4 col-md-6">
        <div className="card certification-card border-0 shadow h-100">
          <div className="card-body text-center p-5">
            <div className="certification-icon mb-4">
              <i className="bi bi-github fs-1 text-dark"></i>
            </div>
            <h5 className="card-title mb-3">GitHub Foundations</h5>
            <p className="card-text text-muted mb-3">
              Credential for mastering foundational GitHub skills and workflows.
            </p>
            <p className="text-muted small">
              <i className="bi bi-calendar3 me-2"></i>Issued: 2024
            </p>
            <button className="btn btn-outline-dark btn-sm" onClick={() => window.open("https://www.credly.com/badges/7816d676-0257-43f9-b8e2-6cd94351fa21/linked_in?t=sgebby", "_blank")}>
              <i className="bi bi-eye me-1"></i>View Certificate
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card certification-card border-0 shadow h-100">
          <div className="card-body text-center p-5">
            <div className="certification-icon mb-4">
              <i className="bi bi-cloud fs-1 text-primary"></i>
            </div>
            <h5 className="card-title mb-3">Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</h5>
            <p className="card-text text-muted mb-3">
              Professional certification on Oracle's cloud platform and Generative AI technologies.
            </p>
            <p className="text-muted small">
              <i className="bi bi-calendar3 me-2"></i>Issued: 2024
            </p>
            <button className="btn btn-outline-primary btn-sm" onClick={() => window.open("https://catalog-education.oracle.com/pls/certview/sharebadge?id=475E921AD6E0EBF04ACD973B5AB3026E7976E1CD2EB26C378B28B4DF65C68F68", "_blank")}>
              <i className="bi bi-eye me-1"></i>View Certificate
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card certification-card border-0 shadow h-100">
          <div className="card-body text-center p-5">
            <div className="certification-icon mb-4">
              <img src={mongodb} alt="MongoDB Certification" className="img-fluid" style={{ width: '60px', height: '60px' }} />
            </div>
            <h5 className="card-title mb-3">MongoDB Associate Database Administrator</h5>
            <p className="card-text text-muted mb-3">
              Certification focused on MongoDB schema design, indexing, replication, and administration.
            </p>
            <p className="text-muted small">
              <i className="bi bi-calendar3 me-2"></i>Issued: 2024
            </p>
            <button className="btn btn-outline-success btn-sm" onClick={() => window.open("https://www.credly.com/badges/57bc68b8-b19f-44ca-a260-0c1a83b20310", "_blank")}>
              <i className="bi bi-eye me-1"></i>View Certificate
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card certification-card border-0 shadow h-100">
          <div className="card-body text-center p-5">
            <div className="certification-icon mb-4">
              <i className="bi bi-aws fs-1 text-warning"></i>
            </div>
            <h5 className="card-title mb-3">AWS Academy Graduate - Cloud Architecting</h5>
            <p className="card-text text-muted mb-3">
              Certification on AWS cloud architecture principles, cloud design, and solutions.
            </p>
            <p className="text-muted small">
              <i className="bi bi-calendar3 me-2"></i>Issued: 2024
            </p>
            <button className="btn btn-outline-warning btn-sm" onClick={() => window.open("https://www.credly.com/badges/2a87117d-8046-4c9a-8f66-6acedb3bbaf0/public_url", "_blank")}>
              <i className="bi bi-eye me-1"></i>View Certificate
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card certification-card border-0 shadow h-100">
          <div className="card-body text-center p-5">
            <div className="certification-icon mb-4">
              <i className="bi bi-journal-text fs-1 text-info"></i>
            </div>
            <h5 className="card-title mb-3">Java Spring Framework 6 & Spring Boot 3 – Professional Development (Ongoing)</h5>
            <p className="card-text text-muted mb-3">
              Ongoing course on modern Java development using Spring Framework and Spring Boot.
            </p>
            <p className="text-muted small">
              <i className="bi bi-calendar3 me-2"></i>Issued: 2024
            </p>
            <button className="btn btn-outline-info btn-sm" onClick={() => window.open("https://www.udemy.com/share/101w3s3@Z3BPCixWBqoQ6sd9UaRHOTOe14NWaLLaNpZFwkEhY0jhjs28izFlmcEfZcDjBJJO0w==/", "_blank")}>
              <i className="bi bi-eye me-1"></i>View Certificate
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="py-5 bg-light section-animate">
  <div className="container">
    <div className="text-center mb-5">
      <h6 className="text-muted mb-2">Browse My Recent</h6>
      <h2 className="display-5 fw-bold">Projects</h2>
    </div>

    <div className="row g-4">

      {/* Invoice Generator Web App */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={InvoiceGen} className="card-img-top" alt="Invoice Generator" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Invoice Generator Web App</h5>
            <p className="card-text flex-grow-1">
              Full-stack application for generating and emailing PDF invoices, with Clerk-based authentication and MongoDB for data storage.
            </p>
            <div className="mb-3">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-primary me-2">Spring Boot</span>
              <span className="badge bg-primary me-2">MongoDB</span>
              <span className="badge bg-primary">SMTP</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/Invoice-Generator', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CO2 Emission Prediction */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={CO2} className="card-img-top" alt="CO2 Emission Prediction" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">CO2 Emission Prediction</h5>
            <p className="card-text flex-grow-1">
              A machine learning model that predicts CO2 emissions based on vehicle specifications, enabling users to estimate environmental impact.
            </p>
            <div className="mb-3">
              <span className="badge bg-success me-2">Python</span>
              <span className="badge bg-success me-2">Machine Learning</span>
              <span className="badge bg-success me-2">Pandas</span>
              <span className="badge bg-success">Scikit-learn</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/Project', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expense Tracker App */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={Expen} className="card-img-top" alt="Expense Tracker" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Expense Tracker App</h5>
            <p className="card-text flex-grow-1">
              Responsive expense tracker built with React to monitor personal expenses with category-wise tracking and data visualization.
            </p>
            <div className="mb-3">
              <span className="badge bg-info me-2">React</span>
              <span className="badge bg-info me-2">JavaScript</span>
              <span className="badge bg-info me-2">Netlify</span>
              <span className="badge bg-info">CSS</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/Expense-Tracker', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
              <button className="btn btn-outline-dark btn-sm flex-fill" onClick={() => window.open('https://modernexpensetracker.netlify.app/', '_blank')}>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Aspect-Based Sentiment Analysis */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={ABSA} className="card-img-top" alt="Aspect-Based Sentiment Analysis" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Aspect-Based Sentiment Analysis</h5>
            <p className="card-text flex-grow-1">
              An NLP project analyzing customer reviews to detect sentiments toward specific product aspects using BERT-CNN-LSTM models.
            </p>
            <div className="mb-3">
              <span className="badge bg-primary me-2">BERT</span>
              <span className="badge bg-primary me-2">CNN</span>
              <span className="badge bg-primary me-2">LSTM</span>
              <span className="badge bg-primary">Python</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/ABSA-BERT-CNN-LSTM', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frozen Lake RL Solver */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={FrozenLake} className="card-img-top" alt="Frozen Lake RL Solver" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Frozen Lake RL Solver</h5>
            <p className="card-text flex-grow-1">
              Reinforcement Learning implementation solving OpenAI Gym's Frozen Lake environment using Q-learning for optimal path finding.
            </p>
            <div className="mb-3">
              <span className="badge bg-success me-2">Python</span>
              <span className="badge bg-success me-2">Reinforcement Learning</span>
              <span className="badge bg-success me-2">OpenAI Gym</span>
              <span className="badge bg-success">Q-learning</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/Frozen-Lake', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Limit – Task Manager */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card border-0 shadow h-100">
          <img src={Todo} className="card-img-top" alt="Task Manager" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Limit – Task Manager</h5>
            <p className="card-text flex-grow-1">
              Task Manager app for efficient task organization, featuring multi-organization support, inbox messaging, and task assignment using Spring Boot and React.
            </p>
            <div className="mb-3">
              <span className="badge bg-info me-2">React</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark btn-sm flex-fill" onClick={() => window.open('https://github.com/Rahul2405v/Limit', '_blank')}>
                <i className="bi bi-github me-1"></i>View Code
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-white section-animate">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h6 className="text-muted mb-2">&lt; hi &gt;</h6>
              <h2 className="display-5 fw-bold mb-4">Contact Me</h2>
              <p className="lead mb-4">
                I specialize in creating dynamic and engaging web experiences using React and GSAP. 
                Contact me to discuss your project needs!
              </p>
              <h6 className="text-muted mb-5">&lt; /hi &gt;</h6>
              
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <button className="btn btn-link text-white p-0 fs-2" onClick={() => handle(1)} title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </button>
                <button className="btn btn-link text-white p-0 fs-2" onClick={() => handle(2)} title="GitHub">
                  <i className="bi bi-github"></i>
                </button>
                <button className="btn btn-link text-white p-0 fs-2" onClick={() => handle(3)} title="Email">
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
              
              <div className="mt-4">
                <p className="text-muted mb-0">rahulvudathu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
