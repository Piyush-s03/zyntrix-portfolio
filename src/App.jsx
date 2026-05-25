\import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [text, setText] = useState("");
  const fullText = "Web Solutions for Businesses";

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {

      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }

    }, 80);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

  }, []);

  // WHATSAPP FUNCTION

  const openWhatsApp = () => {

    window.open(
      "https://wa.me/917558499024?text=Hello%20Zyntrix%2C%20I%20am%20interested%20in%20your%20web%20development%20services.",
      "_blank"
    );

  };

  // PROJECT OPEN FUNCTION

  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (

    <div className="app">

      {/* NAVBAR */}

      <header className="header">

        <h2 className="logo">
          Zyntrix
        </h2>

        <nav>

          <a href="#home">Home</a>

          <a href="#services">Services</a>

          <a href="#work">Projects</a>

          <a href="#contact">Contact</a>

        </nav>

      </header>

      {/* HERO SECTION */}

      <section id="home" className="hero">

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        <div className="hero-container">

          <div
            className="hero-text"
            data-aos="fade-right"
          >

            <h1>
              We Build Powerful
              <span> Web Experiences</span>
            </h1>

            <h2 className="typing">
              {text}|
            </h2>

            <p>
              We help businesses build modern,
              attractive and high-converting websites
              that grow online presence and generate leads.
            </p>

            <div className="hero-buttons">

              <button
                onClick={openWhatsApp}
                className="btn primary"
              >
                🚀 Get Free Consultation
              </button>

              <a
                href="#work"
                className="btn secondary"
              >
                View Projects
              </a>

            </div>

          </div>

          <div
            className="hero-image"
            data-aos="zoom-in"
          >

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKuXPy61cY9rMnnfu0NWkNs28psJGY4IDkw&s"
              alt="profile"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="section"
      >

        <h2 className="section-title">
          Our Services
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
              Professional business websites
              that establish your online presence.
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
              E-Commerce Websites
            </h3>

            <p>
              Online stores with payment integration
              and premium UI experience.
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
              Powerful web applications tailored
              for your business needs.
            </p>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="section">

        <h2 className="section-title">
          Why Choose Us
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
              High quality websites delivered quickly.
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
              Websites designed to attract customers
              and increase conversions.
            </p>

          </div>

          <div
            className="card"
            data-aos="zoom-in"
          >

            <h3>
              💼 Premium Design
            </h3>

            <p>
              Beautiful UI with smooth animations
              and modern user experience.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="work"
        className="section"
      >

        <h2 className="section-title">
          Our Work
        </h2>

        <div className="grid">

          {/* PROJECT 1 */}

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
                Modern gym website with premium UI.
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

          {/* PROJECT 2 */}

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
                Smart inventory management portal
                for businesses.
              </p>

              <button
                onClick={() =>
                  openProject("https://inventory-management-system-gules.vercel.app")
                }
                className="small-btn"
              >
                View Portal
              </button>

            </div>

          </div>

          {/* PROJECT 3 */}

          <div
            className="card project"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="portfolio"
            />

            <div className="overlay">

              <h3>
                Portfolio Website
              </h3>

              <p>
                Personal branding website
                with modern animations.
              </p>

              <button
                onClick={() =>
                  openProject("https://yourlink.com")
                }
                className="small-btn"
              >
                View Website
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section"
      >

        <h2 className="section-title">
          Let's Build Your Website
        </h2>

        <p className="contact-text">
          Ready to grow online?
          Let’s create something amazing together.
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

        {/* WHATSAPP BUTTON */}

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >

          <button
            onClick={openWhatsApp}
            className="btn primary"
          >
            💬 Chat on WhatsApp
          </button>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Zyntrix Solutions | Designed by Piyush
        </p>

        <p>
          📞 WhatsApp: 7558499024
        </p>

      </footer>

    </div>

  );
}

export default App;