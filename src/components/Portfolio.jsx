import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS-File/portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Modern & Responsive React Web Page",
      description: "A fully responsive web page built using React.js and Tailwind CSS, optimized for all devices.",
      link: "https://jovial-druid-dabeec.netlify.app/",
      github: "https://github.com/MDSagarALI762/React-Ascendance"
    },
    {
      title: "Modern React Landing Page",
      description: "Figma to Code conversion using React and Tailwind",
      link: "https://relaxed-madeleine-fc2a05.netlify.app/",
      github: "https://github.com/MDSagarALI762/React-Hockey"
    },
    {
      title: "Modern E-commerce Landing Page",
      description: "Converted a Figma design into e-commerce landing page using React.js and Tailwind CSS.",
      link: "https://profound-dragon-23dae2.netlify.app/",
      github: "https://github.com/MDSagarALI762/Gluson-ecommrerce-website"
    }
  ];

  return (
    <div id="portfolio" className="mt-5 pt-md-5 pt-2 pb-5 container" data-aos="fade-up">
      <div className="d-flex justify-content-center">
        <h5 style={{ background: '#F5DF4E' }} className="text-center px-2" data-aos="fade-down">
          Portfolio
        </h5>
      </div>
      <h1 className="text-center display-5 fw-bold pt-2" data-aos="fade-up" data-aos-delay="100">
        Some of my most recent projects
      </h1>

      <Row className="g-4 pt-5">
        {projects.map((project, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay={idx * 200}>
            <div className="border border-2 border-dark rounded p-4 custom-hover-shadow h-100">
              <h3 className="fw-bold">{project.title}</h3>
              <p className="fs-5">{project.description}</p>
              <div className="d-flex justify-content-between mt-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-md fs-5">Live</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-md fs-5">GitHub</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
