import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import faqImg from '../assets/image/faq.png';
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="faq" className="container pt-md-5 pt-2 pb-0 pb-md-5 mt-5">
      <div className="d-flex flex-column-reverse flex-md-row align-items-center gap-4">

        {/* Left Side - Text and Accordion */}
        <div
          className="w-100 w-md-50"
          data-aos="fade-right"
        >
          <div className="d-flex pt-4 pt-md-0 justify-content-center justify-content-md-start">
            <h4
              style={{ background: '#F5DF4E' }}
              className="px-2"
            >
              FAQ
            </h4>
          </div>

          <h1 className="display-5 text-md-start text-center fw-bold pt-2">
            Have any questions?
          </h1>

          <Accordion className="pt-5 mt-3" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4 className="fw-semibold">What is Developer?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="fs-5">
                  A developer is someone who builds and maintains websites or applications using programming languages and tools.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4 className="fw-semibold">How Can I Help You?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="fs-5">
                  I can build modern, responsive websites tailored to your needs using HTML, CSS, JavaScript, and React.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h4 className="fw-semibold">Simple Process of Workflow?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="fs-5">
                  My workflow includes understanding client needs, designing UI, writing clean code, testing, and deployment.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h4 className="fw-semibold">Why Responsive Website Design?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="fs-5">
                  Responsive design ensures your website looks great on all devices, improving user experience and engagement.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Right Side - Image */}
        <div
          className="w-100 w-md-50 text-center"
          data-aos="fade-left"
        >
          <img src={faqImg} alt="FAQ illustration" className="img-fluid" />
        </div>

      </div>
    </div>
  );
};

export default FAQ;
