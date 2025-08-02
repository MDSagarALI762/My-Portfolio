import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ background: '#111418' }}>
      <div
        data-aos="fade-up"
        style={{ height: '220px' }}
        className="container d-md-flex text-center py-md-0 py-5 align-items-center justify-content-between"
      >
        <div>
          <p className="text-white fs-5 fw-semibold">
            Copyright © 2021{" "}
            <span style={{ color: '#EBD92C' }} className="text-decoration-underline">
              Callum
            </span>
            . All Rights Reserved.
          </p>
        </div>
        <div>
          <p className="text-white fs-5 fw-semibold">
            Designed by
            <span style={{ color: '#EBD92C' }} className="text-decoration-underline ps-2">
              Harnish Design
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
