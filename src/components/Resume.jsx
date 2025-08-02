import './CSS-File/Resume.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='resume' className="container mt-5 pt-md-5 pt-0 pb-5">
      <div className="d-flex justify-content-center" data-aos="fade-down">
        <h5 style={{ background: '#F5DF4E' }} className="text-center px-2">
          Resume
        </h5>
      </div>

      <h1 className="text-center display-5 fw-bold pt-2" data-aos="zoom-in">
        A summary of My Resume
      </h1>

      <div className="pt-md-5 pt-4 mt-5 row gap-5">
        {/* Left Column – Education */}
        <div className="col-12 col-md d-flex gap-4" data-aos="fade-right">
          <div className="yellow-line1 yellow-line"></div>
          <div>
            <h1 className="fw-bold">My Education</h1>

            <div>
              <h4 className="fw-semibold pt-4">Bachelor's Degree</h4>
              <h5 className="py-2">Hemnagar Degree College / 2021 - Running</h5>
              <p className="fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.
              </p>
              <div className="pt-md-2 pt-1">
                <hr />
              </div>
            </div>

            <div>
              <h4 className="fw-semibold pt-md-2 pt-2">HSC Passed</h4>
              <h5 className="py-2">Gopalpur Govt College / 2018 - 2020</h5>
              <p className="fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.
              </p>
              <div className="pt-md-2 pt-1">
                <hr />
              </div>
            </div>

            <div>
              <h4 className="fw-semibold pt-md-4 pt-2">SSC Passed</h4>
              <h5 className="py-2">Suti V.M Pilot Model Govt High School / 2016 - 2018</h5>
              <p className="fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column – Experience */}
        <div className="col-12 col-md d-flex gap-4 pt-md-0 pt-4" data-aos="fade-left">
          <div className="yellow-line yellow-line2"></div>
          <div>
            <h1 className="fw-bold">My Experience</h1>

            <h4 className="fw-semibold pt-4">Frontend Developer (Self-Initiated Projects)</h4>
            <h5 className="py-2">Jan 2024 – Present</h5>
            <p className="fs-5">Self-learning & practice projects</p>
            <p className="fs-5">
              - Converted Figma designs into responsive websites using HTML, Tailwind CSS, and React.
            </p>
            <p className="fs-5">
              - Built single-page applications using React.js with component-based architecture.
            </p>
            <p className="fs-5">
              - Designed mobile-first layouts using Bootstrap and Flexbox/Grid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
