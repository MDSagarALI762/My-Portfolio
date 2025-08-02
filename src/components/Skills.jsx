import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS-File/skills.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container pb-5 pt-5" data-aos="fade-up">
      <h1 className="fw-bold text-center" data-aos="fade-down">My Skills</h1>

      <Row className="g-5 pt-5">
        <Col xs={6} sm={2} md={4} data-aos="zoom-in">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">HTML5</div>
        </Col>
        <Col xs={6} sm={2} md={4} data-aos="zoom-in" data-aos-delay="100">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">CSS3</div>
        </Col>
        <Col xs={6} sm={2} md={4} data-aos="zoom-in" data-aos-delay="200">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">Tailwind CSS</div>
        </Col>
        <Col xs={6} sm={2} md={4} data-aos="zoom-in" data-aos-delay="300">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">Bootstrap</div>
        </Col>
        <Col xs={6} sm={2} md={4} data-aos="zoom-in" data-aos-delay="400">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">Javascript</div>
        </Col>
        <Col xs={6} sm={2} md={4} data-aos="zoom-in" data-aos-delay="500">
          <div className="skillBox text-center fs-5 p-2 p-md-3 rounded-pill rounded">React Js</div>
        </Col>
      </Row>

      <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="600">
        <button className="py-3 px-5 fs-5 text-warning btn btn-outline-dark">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Skills;
