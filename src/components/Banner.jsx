import profile from '../assets/image/WhatsApp Image 2025-07-29 at 12.19.01 AM.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import './CSS-File/Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const names = ["WEB DESIGNER", "DEVELOPER"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = names[currentIndex];
    let typingSpeed = isDeleting ? 100 : 100;
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, names]);

  return (
    <div id='home'
      className='banner'
      style={{
        background: '#F5DF4E',
        width: '100vw',
        filter: 0.6,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Container className='pt-5'>
        <Row
          className="d-flex pt-5 flex-column-reverse gap-5 flex-md-row mt-5"
          style={{ marginTop: '120px' }}
        >
          <Col data-aos="fade-right">
            <h2 className='text-center text-md-start display-4 fw-semibold'>MD. SAGAR ALI</h2>
            <h1 className='text-center text-md-start fw-bold display-3'>{displayText}</h1>
            <h3 className='text-center text-md-start'>Based in Dhaka, Bangladesh</h3>
            <div className="row d-flex flex-column flex-md-row pt-5 gap-3 gap-md-5 align-items-center">
              <h5 className='col text-white bg-dark py-3 py-md-4 w-50 text-center'>View My Works</h5>
              <div className="col d-flex justify-content-center align-items-center gap-3">
                <h4 className="text-decoration-underline">Contact Me</h4>
                <FaRegArrowAltCircleDown className='fs-3'></FaRegArrowAltCircleDown>
            
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left">
            <img
              className='border border-5 shadow border-white w-75 ms-5 rounded-circle'
              src={profile}
              alt="Profile"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
