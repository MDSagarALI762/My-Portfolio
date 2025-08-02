import bgImg from '../assets/image/intro-bg-2.jpg';

const Hire = () => {
  return (
    <div
      className="pt-5 mt-5 position-relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0,0,0,0.75)',
          zIndex: 1,
        }}
      ></div>

      {/* Content with AOS animation */}
      <div
        className="position-relative z-2 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: '100vh' }}
        data-aos="fade-up"
      >
        <h1 className="fw-bold display-5 text-white px-3" data-aos="zoom-in">
          Interested in working with me?
        </h1>
        <button
          style={{
            background: '#F5DF4E',
            transition: 'all 0.3s ease',
          }}
          className="py-3 px-5 mt-4 fw-semibold fs-5 border-0 rounded"
          onMouseEnter={(e) => (e.target.style.background = '#e0cf40')}
          onMouseLeave={(e) => (e.target.style.background = '#F5DF4E')}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Hire Me!
        </button>
      </div>
    </div>
  );
};

export default Hire;
