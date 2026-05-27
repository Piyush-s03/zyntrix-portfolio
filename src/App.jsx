// src/App.jsx

import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [text, setText] = useState("");
  const fullText = "Premium Web Solutions For Modern Businesses";

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {

      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }

    }, 70);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

  }, []);

  const openWhatsApp = () => {

    window.open(
      "https://wa.me/917558499024?text=Hello%20Zyntrix%2C%20I%20want%20a%20professional%20website%20for%20my%20business.",
      "_blank"
    );

  };

  const openProject = (url) => {

    window.open(url, "_blank");

  };

  return (

    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="header">

        <h2 className="logo">
          Zyntrix
        </h2>

        <nav>

          <a href="#home">Home</a>

          <a href="#services">Services</a>

          <a href="#stats">Stats</a>

          <a href="#work">Projects</a>

          <a href="#testimonials">Clients</a>

          <a href="#contact">Contact</a>

        </nav>

      </header>

      {/* ================= HERO ================= */}

     {/* HERO TEXT SECTION */}

<div className="hero-text" data-aos="fade-right">

  <p className="developer-tag">
    🚀 Available for Freelance Work
  </p>

  <h1>
    Hi, I'm <span className="highlight-name">Piyush Satpute</span>
  </h1>

  <h3 className="fullstack-title">
    Full Stack Developer (React • Java • Spring Boot)
  </h3>

  <h2 className="typing">
    {text}|
  </h2>

  <p className="hero-description">
    I build modern, scalable and high-performance web applications
    that help startups and businesses grow with better UI, faster systems,
    and clean architecture using React and Java technologies.
  </p>

  {/* TECH STACK */}

  <div className="tech-stack">

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
      <span>HTML</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
      <span>CSS</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
      <span>JavaScript</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
      <span>React</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
      <span>Java</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
      <span>Spring Boot</span>
    </div>

    <div className="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
      <span>MySQL</span>
    </div>

  </div>

  {/* BUTTONS */}

  <div className="hero-buttons">

    <button onClick={openWhatsApp} className="btn primary">
      🚀 Let’s Work Together
    </button>

    <a href="#work" className="btn secondary">
      View My Projects
    </a>

  </div>

</div>

      {/* ================= STATS ================= */}

      <section
        id="stats"
        className="stats-section"
      >

        <div
          className="stats-card"
          data-aos="fade-up"
        >
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>

        <div
          className="stats-card"
          data-aos="fade-up"
        >
          <h2>10+</h2>
          <p>Happy Clients</p>
        </div>

        <div
          className="stats-card"
          data-aos="fade-up"
        >
          <h2>99%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div
          className="stats-card"
          data-aos="fade-up"
        >
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="section"
      >

        <h2 className="section-title">
          Premium Services
        </h2>

        <div className="services-grid">

          <div
            className="service-card"
            data-aos="fade-up"
          >

            <div className="icon">
              🌐
            </div>

            <h3>
              Business Websites
            </h3>

            <p>
              Premium websites that build trust,
              attract customers and grow your brand.
            </p>

          </div>

          <div
            className="service-card"
            data-aos="fade-up"
          >

            <div className="icon">
              🛒
            </div>

            <h3>
              E-Commerce Stores
            </h3>

            <p>
              Modern online stores with payment
              gateways and conversion-focused design.
            </p>

          </div>

          <div
            className="service-card"
            data-aos="fade-up"
          >

            <div className="icon">
              📱
            </div>

            <h3>
              Responsive Design
            </h3>

            <p>
              Fully responsive websites that look
              stunning on all devices and screens.
            </p>

          </div>

          <div
            className="service-card"
            data-aos="fade-up"
          >

            <div className="icon">
              ⚙️
            </div>

            <h3>
              Custom Web Apps
            </h3>

            <p>
              Powerful custom dashboards and web
              applications for your business needs.
            </p>

          </div>

        </div>

      </section>


  



      {/* ================= WHY CHOOSE US ================= */}

      <section className="section">

        <h2 className="section-title">
          Why Clients Choose Zyntrix
        </h2>

        <div className="grid">

          <div
            className="card"
            data-aos="zoom-in"
          >

            <h3>
              ⚡ Fast Delivery
            </h3>

            <p>
              Professional websites delivered quickly
              without compromising quality.
            </p>

          </div>

          <div
            className="card"
            data-aos="zoom-in"
          >

            <h3>
              🎯 Business Focused
            </h3>

            <p>
              Every section is designed to increase
              leads and customer conversions.
            </p>

          </div>

          <div
            className="card"
            data-aos="zoom-in"
          >

            <h3>
              💎 Luxury UI/UX
            </h3>

            <p>
              Stunning modern interfaces with rich
              animations and smooth interactions.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="work"
        className="section"
      >

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="grid">

          <div
            className="card project"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="gym"
            />

            <div className="overlay">

              <h3>
                Fitness Website
              </h3>

              <p>
                Modern gym platform with premium UI.
              </p>

              <button
                onClick={() =>
                  openProject("https://gymate-gym.vercel.app")
                }
                className="small-btn"
              >
                View Website
              </button>

            </div>

          </div>

          <div
            className="card project"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="inventory"
            />

            <div className="overlay">

              <h3>
                Inventory Portal
              </h3>

              <p>
                Smart inventory management dashboard.
              </p>

              <button
                onClick={() =>
                  openProject("https://mobile-care-inventory.vercel.app")
                }
                className="small-btn"
              >
                View Project
              </button>

            </div>

          </div>

          <div
            className="card project"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="crickverse"
            />

            <div className="overlay">

              <h3>
                CrickVerse
              </h3>

              <p>
                Cricket information portal with live UI.
              </p>

              <button
                onClick={() =>
                  openProject("https://crick-verse.vercel.app")
                }
                className="small-btn"
              >
                View Website
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section
        id="testimonials"
        className="section"
      >

        <h2 className="section-title">
          Client Feedback
        </h2>

        <div className="grid">

          <div
            className="card testimonial"
            data-aos="fade-up"
          >

            <p>
              “Amazing premium design and smooth
              experience. Highly professional work.”
            </p>

            <h4>
              — Fitness Brand Owner
            </h4>

          </div>

          <div
            className="card testimonial"
            data-aos="fade-up"
          >

            <p>
              “Our business website now looks modern
              and gets more enquiries daily.”
            </p>

            <h4>
              — Startup Founder
            </h4>

          </div>

          <div
            className="card testimonial"
            data-aos="fade-up"
          >

            <p>
              “Very responsive and delivered exactly
              what we wanted.”
            </p>

            <h4>
              — Local Business Client
            </h4>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section"
      >

        <h2 className="section-title">
          Let’s Build Something Amazing
        </h2>

        <p className="contact-text">

          Ready to grow your business online?
          Contact Zyntrix today.

        </p>

        <form
          action="https://formspree.io/f/xgoqlrrw"
          method="POST"
          className="contact-form"
          data-aos="fade-up"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <select name="service">

            <option>
              Business Website
            </option>

            <option>
              E-Commerce Website
            </option>

            <option>
              Portfolio Website
            </option>

            <option>
              Custom Web App
            </option>

          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project"
          ></textarea>

          <button
            type="submit"
            className="btn primary"
          >
            📩 Send Enquiry
          </button>

        </form>

        <div className="whatsapp-center">

          <button
            onClick={openWhatsApp}
            className="btn primary"
          >
            💬 Chat on WhatsApp
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <h2>
          Zyntrix Solutions
        </h2>

        <p>
          Premium Websites • UI/UX • Web Apps
        </p>

        <p>
          📞 WhatsApp: 7558499024
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>

  );

}

export default App;