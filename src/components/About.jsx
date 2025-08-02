import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS-File/about.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div id='about' className="container marginTop pb-5">
            <div className="d-flex justify-content-center" data-aos="fade-down">
                <h5 style={{ background: '#F5DF4E' }} className="text-center px-2">About Me</h5>
            </div>
            <h1 className="text-center display-5 fw-bold pt-2" data-aos="zoom-in">Know Me More</h1>

            <div className="experience mt-5 rounded-xl shadow-sm" data-aos="fade-up">
                <h3 className="fw-bold">Self-Learning Frontend Developer</h3>
                <p className="fs-6">2024 - Present</p>
                <p className="mt-2 fs-5">
                    Practiced building modern landing pages using React.js and Tailwind CSS/Bootstrap by converting Figma UI designs into responsive code.
                    Focused on component-based design and mobile-first development. Created a personal portfolio to showcase projects.
                </p>
            </div>

            <Row xs={1} sm={2} md={4} className="text-center text-md-start mt-5" data-aos="fade-up">
                <Col>
                    <h5 style={{ color: '#6C757D' }}>Name:</h5>
                    <h5 className='fw-bold pb-3 pb-md-0'>MD SAGAR ALI</h5>
                </Col>
                <Col>
                    <h5 style={{ color: '#6C757D' }}>Email:</h5>
                    <h5 className='fw-bold pb-3 pb-md-0'>mdsagarali762@gmail.com</h5>
                </Col>
                <Col>
                    <h5 style={{ color: '#6C757D' }}>Date of birth:</h5>
                    <h5 className='fw-bold pb-3 pb-md-0'>2 March, 2002</h5>
                </Col>
                <Col>
                    <h5 style={{ color: '#6C757D' }}>From:</h5>
                    <h5 className='fw-bold'>Dhaka, Bangladesh</h5>
                </Col>
            </Row>
        </div>
    );
};

export default About;
