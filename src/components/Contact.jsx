import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import './CSS-File/ContactForm.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mtctnip',     // ✅ Replace with your actual service ID
      'template_b3vitcu',    // ✅ Replace with your actual template ID
      form.current,
      'GdiNKriMGBaTLPHOy'    // ✅ Replace with your public key
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      }
    );
  };

  return (
    <div id="contact" className="pt-5 mt-5" style={{ background: '#F5DF4E' }}>
      <div className="container pt-md-5 pt-2 pb-4 pb-md-5">
        <Row className="gx-5">
          
          {/* Left Column */}
          <Col data-aos="fade-right">
            <h1 className="fw-bold display-4 text-center text-md-start">
              Let's get in touch
            </h1>
            <p className="py-md-5 py-4 fs-2 text-center text-md-start">
              I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.
            </p>
            <div className="text-center text-md-start">
              <h2 className="fw-bold">Living In:</h2>
              <p className="fs-3">Gopalpur, Tangail, Dhaka, Bangladesh</p>
              <h2 className="fw-bold pt-md-0 pt-2">Call:</h2>
              <p className="fs-3">(+880) 1763131473</p>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start pt-md-5 pt-4 gap-4">
              <FaTwitter className="fs-2 text-secondary" />
              <FaFacebook className="fs-2 text-secondary" />
              <FaInstagram className="fs-2 text-secondary" />
              <FaLinkedin className="fs-2 text-secondary" />
              <FaSnapchat className="fs-2 text-secondary" />
            </div>
          </Col>

          {/* Right Column - Form */}
          <Col data-aos="fade-left">
            <h1 className="fw-bold text-center text-md-start display-5 pt-5 pt-md-0">
              Estimate your Project?
            </h1>
            <form ref={form} onSubmit={sendEmail} className="form-wrapper py-5">
              <div className="mb-4">
                <label className="form-label fs-4 fw-semibold">What is Your Name:</label>
                <input name="name" type="text" required className="custom-input form-control" />
              </div>

              <div className="mb-4">
                <label className="form-label fs-4 fw-semibold">Your Email Address:</label>
                <input name="email" type="email" required className="custom-input form-control light-border" />
              </div>

              <div className="mb-4">
                <label className="form-label fs-4 fw-semibold">How can I Help you?</label>
                <textarea name="message" rows="4" required className="custom-input form-control light-border" />
              </div>

              <div className="d-flex justify-content-center justify-content-md-start pt-4 pt-md-0">
                <button
                  type="submit"
                  style={{ background: '#111418' }}
                  className="text-white d-flex gap-3 align-items-center fs-4 fw-semibold py-md-3 px-md-5 py-2 px-4"
                >
                  <span>Send</span>
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
