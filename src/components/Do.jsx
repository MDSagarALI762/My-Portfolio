import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Do = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="do" className="mt-5 pt-3 pt-md-5 pb-5 container">
      <div className="d-flex justify-content-center" data-aos="fade-down">
        <h5
          style={{ background: '#F5DF4E' }}
          className="text-center px-2"
        >
          What I Do
        </h5>
      </div>

      <h1
        className="text-center display-5 fw-bold pt-2"
        data-aos="zoom-in"
      >
        How I can help your next project
      </h1>

      <div className="row gap-md-5 gap-4 mt-5 pt-3 text-center">
        <div className="col-12 col-md" data-aos="fade-up" data-aos-delay="100">
          <h3 className="fw-bold pb-md-3 pb-2">Web Design</h3>
          <p className="fs-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>

        <div className="col-12 col-md" data-aos="fade-up" data-aos-delay="200">
          <h3 className="fw-bold pb-md-3 pb-2">Front End Development</h3>
          <p className="fs-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>

        <div className="col-12 col-md" data-aos="fade-up" data-aos-delay="300">
          <h3 className="fw-bold pb-md-3 pb-2">Landing Page Design</h3>
          <p className="fs-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Do;
